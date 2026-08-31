Baseer Ahmad Piracha — Portfolio Website
A single-page, ultra-premium personal portfolio built with pure HTML, CSS, and vanilla JavaScript.
No frameworks, no build step — ready to push directly to GitHub Pages.

File Structure
text
.
├── index.html                  # Single-page site (all sections)
└── assets/
    ├── css/
    │   └── style.css           # Full stylesheet (palette, layout, responsive rules)
    ├── js/
    │   └── main.js             # Nav toggle, active-link highlighting, fade-in on scroll
    ├── img/
    │   └── profile-placeholder.svg   # Replace with a real headshot (keep the filename or update the <img src>)
    ├── logos/                  # Drop real company-logo SVGs here later
    └── Baseer-Ahmad-Piracha-CV.pdf   # Add your actual CV PDF here (referenced by the "Download CV" button)
Replacing Placeholders
Photo — swap assets/img/profile-placeholder.svg for a real photo (JPG/PNG/WebP). Update the src in the About section of index.html if you rename the file.

CV PDF — add your CV file at assets/Baseer-Ahmad-Piracha-CV.pdf. The "Download CV" button already points there.

Company logos — the Experience timeline uses simple circular text badges (.logo-badge) as placeholders (AFAQY, ISYS, KRÄMER, CRDC). To use real logos:

Drop SVG/PNG logo files into assets/logos/.

In index.html, replace the <div class="logo-badge">TEXT</div> markup with an <img> tag pointing to the new asset, e.g. <img src="assets/logos/afaqy.svg" alt="AFAQY IT CO logo">.

Keep the surrounding .timeline-logo wrapper so sizing and spacing stay consistent.

Deploying to GitHub Pages
Create a new GitHub repository (e.g. baseer-portfolio).

Push these files to the repository root (index.html must sit at the root, or in /docs if you configure Pages that way).

In the repo settings, go to Pages → set Source to the main branch (root or /docs).

Your site will be published at https://<username>.github.io/<repo-name>/.

Optional: add a custom domain via the Pages settings and a CNAME file.

Notes
Fonts (Playfair Display + Inter) load from Google Fonts via <link> tags in index.html. For fully offline/self-hosted use, download the font files and update the @import/<link> accordingly.

The subtle paper-grain texture is a pure CSS/SVG noise filter — no external image asset required.

All animations (fade-in on scroll, active-nav highlighting, mobile menu) run on vanilla JS via IntersectionObserver — no libraries needed.

Color tokens are defined as CSS custom properties in :root at the top of style.css for easy theming.