# HKS Portfolio

Portfolio website for Hezekiah Kolawole Shobowale — graphic design, video production, social media and digital creative work.

## Deploy
This is a static HTML/CSS/JS site and can be deployed directly to Vercel from GitHub.

## Included work
- 8 graphic design / campaign projects
- 4 compressed video projects with posters
- Responsive layout
- Image lightbox
- Contact CTA

## Languages
- English and Italian are hand-written in `i18n.js` (keys match the `data-i18n` / `data-i18n-attr` attributes in `index.html`).
- Every other language is machine-translated from the English page with the Google Translate website element. Its bar, tooltips and highlighting are hidden in `style.css`. Brand names, poster titles, tools and the email carry `translate="no"`.
- Which language is used: `?lang=xx` in the URL (for example `?lang=it` or `?lang=fr`; not saved, handy for recordings and shared links), then the visitor's pick from the nav switch (saved in `localStorage` as `hksLang`), then the browser's first preferred language.
- Changing language reloads the page so the endless rows, marquee and hero animation are rebuilt from the translated text. A machine-translated page gets `html.translated-ltr` / `translated-rtl` once done, or `html.mt-failed` if the translator could not load.
