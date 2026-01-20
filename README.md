# DevPro - Fullstack Developer Portfolio

An advanced, interactive portfolio website designed as a picture book experience with stunning SVG animations, smooth transitions, and modern web technologies.

## Features

- 📖 **Interactive Picture Book Design** - Navigate through pages with beautiful flip animations
- 🎨 **SVG Animations** - Custom SVG graphics with Anime.js animations
- ✨ **Advanced Animations** - Smooth transitions and interactive elements
- 📱 **Fully Responsive** - Mobile-first design, works on all devices (320px+)
- 🚀 **PWA Support** - Progressive Web App with offline capabilities
- ⚡ **Performance Optimized** - Fast loading, code splitting, lazy loading
- 🎯 **SEO Optimized** - sitemap.xml, robots.txt, meta tags
- 🌐 **Google Fonts** - Beautiful typography with multiple font families
- 🎭 **Custom Cursor** - Enhanced user experience with custom cursor effects
- 🌌 **Particle Background** - Dynamic particle system with mouse interaction

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced animations, Grid, Flexbox
- **JavaScript (ES6+)** - Modern JavaScript
- **Anime.js** - Powerful animation library
- **Google Fonts API** - Orbitron, Space Grotesk, Fira Code
- **Canvas API** - Particle background effects
- **Service Workers** - PWA functionality
- **Intersection Observer API** - Scroll-triggered animations

## Pages

1. **Home** - Hero section with animated SVG graphics
2. **About** - Personal introduction with stats counter
3. **Skills** - Tech stack with animated progress bars
4. **Projects** - Portfolio showcase with project cards
5. **Contact** - Contact form with social links

## Performance Metrics

- LCP (Largest Contentful Paint): < 2.5s
- FCP (First Contentful Paint): < 1.8s
- CLS (Cumulative Layout Shift): < 0.1
- TBT (Total Blocking Time): < 200ms
- Performance Score: > 90

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/devpro-portfolio.git
cd devpro-portfolio
```

2. Open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

## File Structure

```
DevPro/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript with Anime.js
├── manifest.json       # PWA manifest
├── service-worker.js   # Service worker for offline support
├── favicon.svg         # Site favicon
├── robots.txt          # SEO robots file
├── sitemap.xml         # SEO sitemap
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Customization

### Update Personal Information

1. Edit `index.html`:
   - Update meta tags (name, description, keywords)
   - Change contact information in the Contact page
   - Modify project details
   - Update social media links

2. Edit `styles.css`:
   - Customize color scheme in `:root` variables
   - Adjust spacing, fonts, and animations

3. Edit `script.js`:
   - Modify animation timings and effects
   - Customize particle effects

### Adding Projects

Add new project cards in the Projects section of `index.html`:

```html
<div class="project-card">
  <div class="project-image">
    <!-- SVG or image -->
  </div>
  <div class="project-info">
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">Description</p>
    <div class="project-tech">
      <span class="tech-badge">Tech 1</span>
      <span class="tech-badge">Tech 2</span>
    </div>
  </div>
</div>
```

## Navigation

- **Mouse/Touch**: Click navigation links or arrow buttons
- **Keyboard**: Use Left/Right arrow keys
- **Scroll**: Mouse wheel to navigate between pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings > Pages
3. Select branch and root folder
4. Save

### Netlify/Vercel

1. Connect your repository
2. Set build settings (if needed)
3. Deploy

### Traditional Hosting

Upload all files to your web server's public directory.

## Performance Tips

- Images are lazy-loaded
- Animations use CSS transforms for better performance
- Service worker caches assets for offline use
- Code is optimized for minimal file size

## Credits

- **Anime.js** - https://animejs.com/
- **Google Fonts** - https://fonts.google.com/
- **Icons** - Custom SVG graphics

## License

MIT License - Feel free to use this template for your own portfolio!

## Author

**Your Name**

- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

---

Made with ❤️ and lots of ☕
