# Assaduzzaman Munna — Personal Portfolio

A world-class personal portfolio for an AI/ML Engineer & Researcher.  
Live at: **https://iam-ajmunna.github.io**

---

## 🗂️ File Structure

```
portfolio/
├── index.html              # Main HTML — semantic, accessible, SEO-optimised
├── style.css               # Full design system — tokens, components, responsive
├── script.js               # Interactions — nav, scroll animations, contact form
├── Assaduzzaman_Munna_CV.pdf  # Downloadable CV
├── IMG_20221229_010241.jpg    # Hero portrait photo
├── 20260601_091549.jpg        # About section photo
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine crawl rules
└── README.md               # This file
```

---

## 🚀 Deploying to GitHub Pages

### Option A — New Repository (Recommended)

```bash
# 1. Create a new repo named exactly:  <your-username>.github.io
#    e.g. iam-ajmunna.github.io

# 2. Clone it
git clone https://github.com/iam-ajmunna/iam-ajmunna.github.io
cd iam-ajmunna.github.io

# 3. Copy all portfolio files into the repo root
cp -r /path/to/portfolio/* .

# 4. Commit & push
git add .
git commit -m "feat: launch personal portfolio"
git push origin main
```

GitHub will automatically serve the site at **https://iam-ajmunna.github.io** within ~60 seconds.

---

### Option B — Existing Repository / Subdirectory

1. Push all files into a branch or folder.
2. In **Settings → Pages**, set Source to `main` branch, root `/` (or `/docs` if placed there).
3. Save — GitHub deploys automatically.

---

## ✅ Pre-Deployment Checklist

- [ ] Update `sitemap.xml` with your actual live URL
- [ ] Replace placeholder `og-image.jpg` with a real 1200×630 social preview image
- [ ] Verify all photo files are committed (check `git status`)
- [ ] Test the CV download link works
- [ ] Confirm `mailto:` in contact form matches your email
- [ ] Run Lighthouse audit (target: Performance > 90, Accessibility > 95, SEO > 95)

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#080C14` | Page background |
| `--surface` | `#0E1421` | Section backgrounds, cards |
| `--accent` | `#3B82F6` | CTA buttons, highlights, links |
| `--teal` | `#06B6D4` | Project tags, secondary accent |
| `--text` | `#E8EDF5` | Body text |
| `--muted` | `#7B8FAD` | Secondary text, labels |

**Fonts:**
- Display / Headings: `Syne` (800 weight) — Google Fonts
- Body / UI: `Inter` (300–600 weight) — Google Fonts

---

## 🔧 Customisation Guide

### Update personal info
Edit `index.html` directly — all content is in clearly labelled HTML sections.

### Change accent colour
In `style.css`, update the `--accent` and `--accent-dim` CSS variables at the top of the file. Everything else inherits automatically.

### Add a new project
Copy an existing `.project-card` block in `index.html` and update the content.  
For a featured (full-width) card, add the `featured` class.

### Add/remove skills
Find the `.skills-grid` section in `index.html` and edit the `.skill-tag` items inside each card.

---

## 📊 Performance Notes

| Metric | Target | Strategy |
|--------|--------|----------|
| Performance | > 90 | No external JS libs, CSS-only animations, lazy-loaded images |
| Accessibility | > 95 | Semantic HTML5, ARIA labels, `alt` text, focus states |
| SEO | > 95 | Meta tags, OG tags, canonical URL, sitemap, robots.txt |
| Best Practices | > 95 | HTTPS, no mixed content, modern HTML |

### Further optimisation (optional)
```bash
# Compress images with imagemagick
convert IMG_20221229_010241.jpg -quality 82 -resize 680x hero.jpg
convert 20260601_091549.jpg    -quality 82 -resize 720x about.jpg

# Or use squoosh.app for a GUI tool
```

---

## 💡 Suggested Domain Names

| Domain | Notes |
|--------|-------|
| `munna.dev` | Clean, developer-focused |
| `ajmunna.com` | Personal brand match |
| `assaduzzaman.dev` | Full name authority |
| `iamajmunna.com` | Matches existing handles |

---

## 📧 Contact

Built for **Assaduzzaman Munna** — iam.ajmunna@gmail.com  
LinkedIn: [linkedin.com/in/iamajmunna](https://linkedin.com/in/iamajmunna)  
GitHub: [github.com/iam-ajmunna](https://github.com/iam-ajmunna)
