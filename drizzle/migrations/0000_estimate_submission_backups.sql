CREATE TABLE public.estimate_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL,
 phone text NOT NULL,
 email text NOT NULL,
 address text NOT NULL DEFAULT '',
 project_type text NOT NULL,
 project_details text NOT NULL DEFAULT '',
 page_url text NOT NULL
);
GRANT ALL ON public.estimate_requests TO service_role;
ALTER TABLE public.estimate_requests ENABLE ROW LEVEL SECURITY;
CREATE INDEX estimate_requests_email_time ON public.estimate_requests (email, created_at DESC);
CREATE FUNCTION public.save_estimate_request(p_name text, p_phone text, p_email text, p_address text, p_project_type text, p_project_details text, p_page_url text)
RETURNS jsonb LANGUAGE plpgsql SECURITY INVOKER SET search_path = public AS $$
DECLARE saved public.estimate_requests;
BEGIN
 PERFORM pg_advisory_xact_lock(hashtextextended(lower(p_email), 0));
 IF (SELECT count(*) FROM public.estimate_requests WHERE email = lower(p_email) AND created_at > now() - interval '15 minutes') >= 3 THEN
  RETURN jsonb_build_object('limited', true);
 END IF;
 INSERT INTO public.estimate_requests (name, phone, email, address, project_type, project_details, page_url)
 VALUES (p_name, p_phone, lower(p_email), p_address, p_project_type, p_project_details, p_page_url) RETURNING * INTO saved;
 RETURN to_jsonb(saved);
END;
$$;
REVOKE ALL ON FUNCTION public.save_estimate_request(text,text,text,text,text,text,text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.save_estimate_request(text,text,text,text,text,text,text) TO service_role;