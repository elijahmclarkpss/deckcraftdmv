import { createServerFn } from '@tanstack/react-start';
import { estimateSchema, estimateFailure } from './estimate-validation';

export const submitEstimate = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => estimateSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) return { success: false, message: 'Unable to submit. Please call or text (804) 399-9722.' };
    try {
      const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
      const { data: saved, error } = await supabaseAdmin.rpc('save_estimate_request', {
        p_name: data.name, p_phone: data.phone, p_email: data.email,
        p_address: data.address, p_project_type: data.project,
        p_project_details: data.details, p_page_url: data.pageUrl,
      });
      if (error || !saved) return { success: false, message: 'We could not save your request. Please call or text (804) 399-9722.' };
      if (typeof saved === 'object' && !Array.isArray(saved) && saved['limited'] === true) {
        return { success: false, message: 'Too many requests. Please wait 15 minutes or call or text (804) 399-9722.' };
      }
      if (typeof saved !== 'object' || Array.isArray(saved)
        || typeof saved['id'] !== 'string' || typeof saved['created_at'] !== 'string') {
        return { success: false, message: estimateFailure };
      }
      try {
        const { sendTemplateEmail } = await import('./email-templates/send-email');
        const result = await sendTemplateEmail('estimate-notification', 'deckcraftdmv@gmail.com', {
          templateData: {
            name: data.name, phone: data.phone, email: data.email, address: data.address,
            project: data.project, details: data.details, pageUrl: data.pageUrl,
            submittedAt: saved['created_at'],
          },
          replyTo: data.email,
          idempotencyKey: `estimate-notification-${saved['id']}`,
        });
        if (result.sent) return { success: true };
      } catch {
        // Delivery failures never undo the permanent backup or report success.
      }
      return { success: false, message: `${estimateFailure} Your request has been saved as a backup.` };
    } catch {
      return { success: false, message: 'We could not complete your request. Please call or text (804) 399-9722.' };
    }
  });