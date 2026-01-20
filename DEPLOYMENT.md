# DevPro Portfolio - Deployment Guide

## Quick Start

### Local Development

1. **Clone or download the project**

```bash
cd DevPro
```

2. **Start a local server** (choose one method):

**Option A: Using Python 3**

```bash
python -m http.server 8000
```

**Option B: Using Node.js (npx)**

```bash
npx serve -s . -l 3000
```

**Option C: Using Live Server (VS Code Extension)**

- Install "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

3. **Open your browser** and navigate to:

- `http://localhost:8000` (Python)
- `http://localhost:3000` (Node.js)
- Automatically opens if using Live Server

---

## Pre-Deployment Checklist

### 1. Customize Content

**In `index.html`:**

- [ ] Update personal information (name, title, bio)
- [ ] Change contact details (email, phone, location)
- [ ] Update social media links
- [ ] Add your actual projects
- [ ] Update meta tags (title, description, keywords)
- [ ] Change Open Graph image URL

**In `manifest.json`:**

- [ ] Update app name and description
- [ ] Verify icon paths (create icons if needed)

**In `sitemap.xml` & `robots.txt`:**

- [ ] Replace `https://yourwebsite.com` with your actual domain

### 2. Create Required Assets

**Favicon and PWA Icons:**
Create the following images in an `assets` folder:

- `favicon.svg` (already created)
- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-192x192.png`
- `icon-384x384.png`
- `icon-512x512.png`
- `apple-touch-icon.png` (180x180)

**Screenshots:**

- `screenshot-wide.png` (1280x720)
- `screenshot-mobile.png` (750x1334)

**Other:**

- `og-image.jpg` (1200x630 for social media)

**Tip:** Use tools like:

- [Favicon Generator](https://realfavicongenerator.net/)
- [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator)

### 3. Optimize Performance

- [ ] Minify CSS (optional): Use tools like `cssnano`
- [ ] Minify JavaScript (optional): Use tools like `terser`
- [ ] Optimize images: Use tools like `ImageOptim` or `TinyPNG`
- [ ] Test performance: Use Lighthouse in Chrome DevTools

---

## Deployment Options

### Option 1: GitHub Pages (Free)

**Steps:**

1. Create a GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Enable GitHub Pages:

- Go to repository Settings > Pages
- Source: Deploy from a branch
- Branch: `main` / `root`
- Save

3. Your site will be live at:

```
https://yourusername.github.io/portfolio/
```

4. Update URLs in:

- `sitemap.xml`
- `manifest.json`
- `index.html` (Open Graph meta tags)

**Custom Domain (optional):**

- Add a `CNAME` file with your domain
- Configure DNS with your domain provider

---

### Option 2: Netlify (Free with CI/CD)

**Steps:**

1. **Via Git:**
   - Push code to GitHub/GitLab/Bitbucket
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.`
   - Deploy

2. **Via Drag & Drop:**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the `DevPro` folder
   - Done!

3. Your site will be live at:

```
https://random-name.netlify.app
```

**Custom Domain:**

- Domain settings > Add custom domain
- Follow DNS configuration instructions

**Continuous Deployment:**

- Push to Git → Automatic deploy
- Environment variables (if needed) in Site settings

---

### Option 3: Vercel (Free with CI/CD)

**Steps:**

1. Install Vercel CLI (optional):

```bash
npm install -g vercel
```

2. **Via Git:**
   - Push code to GitHub/GitLab/Bitbucket
   - Go to [Vercel](https://vercel.com)
   - Import project
   - Framework Preset: Other
   - Root Directory: `./`
   - Deploy

3. **Via CLI:**

```bash
cd DevPro
vercel
```

4. Your site will be live at:

```
https://portfolio-username.vercel.app
```

**Custom Domain:**

- Project Settings > Domains
- Add your custom domain

---

### Option 4: Cloudflare Pages (Free)

**Steps:**

1. Push code to GitHub/GitLab
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Create a new project
4. Connect repository
5. Build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
6. Deploy

Your site will be at:

```
https://portfolio.pages.dev
```

---

### Option 5: Traditional Hosting (cPanel, FTP)

**Steps:**

1. **Prepare files:**
   - Ensure all paths are relative
   - Test locally first

2. **Upload via FTP:**
   - Use FileZilla or similar
   - Connect to your hosting
   - Upload all files to `public_html` or `www`

3. **Via cPanel:**
   - Login to cPanel
   - File Manager
   - Upload and extract ZIP
   - Or drag files directly

4. **Update URLs:**
   - Replace all `yourwebsite.com` with actual domain
   - Update `sitemap.xml` and `manifest.json`

---

## Post-Deployment

### 1. Test Your Site

**Performance:**

- Run [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- Target: Performance > 90, Accessibility > 90

**Functionality:**

- [ ] Navigation works (all pages)
- [ ] Forms submit correctly
- [ ] Animations load properly
- [ ] Mobile responsive (test on real devices)
- [ ] PWA installable (check install prompt)

**SEO:**

- Test with [Google Search Console](https://search.google.com/search-console)
- Submit sitemap
- Verify meta tags with [Open Graph Debugger](https://www.opengraph.xyz/)

### 2. Analytics (Optional)

Add Google Analytics:

```html
<!-- Add before </head> in index.html -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

### 3. SSL/HTTPS

- **GitHub Pages:** Automatic HTTPS
- **Netlify/Vercel/Cloudflare:** Automatic HTTPS
- **Traditional Hosting:** Enable in cPanel or via Let's Encrypt

---

## Performance Optimization Tips

### 1. Enable Compression

**Netlify** (`netlify.toml`):

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 2. Lazy Load Images

Already implemented with Intersection Observer in `script.js`

### 3. Minification (Optional)

**CSS Minification:**

```bash
npx cssnano styles.css styles.min.css
# Update link in HTML
```

**JS Minification:**

```bash
npx terser script.js -o script.min.js
# Update script src in HTML
```

---

## Troubleshooting

### Issue: Anime.js not loading

**Solution:**

- Ensure CDN link is correct in `index.html`
- Check browser console for errors
- Verify internet connection (CDN requires network)

### Issue: Service Worker not registering

**Solution:**

- HTTPS is required (except localhost)
- Check browser console for errors
- Clear browser cache and reload

### Issue: Images not loading

**Solution:**

- Check file paths (case-sensitive on servers)
- Ensure `assets` folder is uploaded
- Use relative paths, not absolute

### Issue: Page not responsive on mobile

**Solution:**

- Verify viewport meta tag in HTML
- Test with Chrome DevTools device emulation
- Check CSS media queries

---

## Maintenance

### Regular Updates

1. **Content Updates:**
   - Add new projects regularly
   - Update skills and experience
   - Refresh contact information

2. **Dependency Updates:**
   - Check for Anime.js updates
   - Update Google Fonts if needed

3. **Security:**
   - Keep hosting platform updated
   - Review and update dependencies
   - Monitor for vulnerabilities

### Backup

- Keep source code in Git
- Regular commits
- Use branches for experiments
- Tag releases: `git tag v1.0.0`

---

## Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [Anime.js Documentation](https://animejs.com/documentation/)
- [Google Fonts](https://fonts.google.com/)
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [WebPageTest](https://www.webpagetest.org/) - Performance testing

---

## Support

If you encounter issues:

1. Check browser console for errors
2. Verify all files are uploaded
3. Test in different browsers
4. Check hosting platform documentation
5. Review this deployment guide

---

**Good luck with your deployment! 🚀**

Made with ❤️ using DevPro Portfolio Template
