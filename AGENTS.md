<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep official business facts and the business schema in the shared browser-safe business module so displayed hours and structured data cannot drift.
- Homepage metadata and JSON-LD belong in the index route head; root head holds sitewide defaults only to avoid conflicting titles and duplicate canonicals.
- Keep FAQ answers mounted when collapsed and generate FAQ schema from the same FAQ collection so HTML and structured answers match.
- The static sitemap lives in public/sitemap.xml; each lastmod records that page's significant content update, not generation time.
- Share the header and footer in the root around Outlet; reuse the estimate section on content pages to keep existing behavior and appearance consistent.
- Local landing pages use explicit file routes backed by a browser-safe content collection and shared page view; derive FAQ and area schemas from that collection to avoid drift.
- Prerender only the explicit nine public content paths with automatic discovery disabled; this finite allowlist avoids accidentally capturing future private pages.
