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
- The single-page site's requested static sitemap lives in public/sitemap.xml; its lastmod records the significant homepage content update, not generation time.
