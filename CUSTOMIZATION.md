# Portfolio Customization Guide

## 🎨 Quick Start Customization

### 1. Replace Profile Images

**Hero Section Image:**
- File: `src/components/Hero.jsx`
- Line: Look for `https://via.placeholder.com/300`
- Replace with your actual image URL or path: `/profile-hero.jpg`

**About Section Image:**
- File: `src/components/About.jsx`
- Line: Look for `https://via.placeholder.com/400`
- Replace with your image: `/profile-about.jpg`

### 2. Update Personal Information

**Contact Details:**
- Email: Search for `kamalesh.cs23@bitsathy.ac.in` and replace
- Phone: Search for `+91 6369026251` and replace
- Location: Search for `Tiruppur, Tamil Nadu` and replace

**Social Links:**
- GitHub: Replace `https://github.com/kamaleshk23`
- LinkedIn: Replace `https://linkedin.com/in/kamaleshk23`

### 3. Update Resume

**Replace Resume File:**
- Remove: `public/resume.pdf` (current placeholder)
- Add your actual resume PDF with the same name: `public/resume.pdf`

### 4. Customize Colors

**In `src/index.css`, modify these CSS variables:**

\`\`\`css
:root {
  --accent-primary: #667eea;     /* Primary accent color */
  --accent-secondary: #764ba2;   /* Secondary accent color */
  --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
\`\`\`

**Suggested Color Schemes:**

**Blue-Purple (Current):**
\`\`\`css
--accent-primary: #667eea;
--accent-secondary: #764ba2;
\`\`\`

**Teal-Blue:**
\`\`\`css
--accent-primary: #4facfe;
--accent-secondary: #00f2fe;
\`\`\`

**Pink-Orange:**
\`\`\`css
--accent-primary: #f093fb;
--accent-secondary: #f5576c;
\`\`\`

**Green-Cyan:**
\`\`\`css
--accent-primary: #11998e;
--accent-secondary: #38ef7d;
\`\`\`

### 5. Add Your Projects

**In `src/components/Projects.jsx`, update the projects array:**

\`\`\`javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Detailed description of your project...',
    tech: ['React', 'Node.js', 'MongoDB'],
    date: 'Month Year',
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-project-demo.com',
    image: '/project-screenshot.jpg',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  // Add more projects
];
\`\`\`

### 6. Update Skills

**In `src/components/Skills.jsx`, modify the skillCategories:**

\`\`\`javascript
{
  title: 'Your Skill Category',
  skills: [
    { name: 'Skill Name', level: 85, icon: <IconComponent /> }
  ]
}
\`\`\`

### 7. Add Certifications

**In `src/components/Certifications.jsx`:**

\`\`\`javascript
const certifications = [
  {
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    score: 'Score/Grade',
    date: 'Year',
    icon: <FaCertificate />
  }
];
\`\`\`

### 8. Update About Section

**In `src/components/About.jsx`:**
- Update bio paragraphs
- Update education details (CGPA, college name)
- Update languages spoken

### 9. Customize Services

**In `src/components/Services.jsx`:**
- Modify service offerings
- Update descriptions and features

## 📸 Image Recommendations

### Optimal Image Sizes:

1. **Hero Profile Picture:** 300x300px (square)
2. **About Profile Picture:** 400x400px (square)
3. **Project Screenshots:** 600x400px (3:2 ratio)

### Image Formats:
- Use WebP for best performance
- JPG/PNG are also supported
- Optimize images before uploading (compress to reduce file size)

### Where to Place Images:
- Create a `public/images/` folder
- Place all images there
- Reference them as `/images/your-image.jpg`

## 🎯 Adding New Sections

### To add a new section:

1. **Create Component:**
   \`\`\`bash
   src/components/YourSection.jsx
   src/components/YourSection.css
   \`\`\`

2. **Import in App.jsx:**
   \`\`\`javascript
   import YourSection from './components/YourSection';
   \`\`\`

3. **Add to App component:**
   \`\`\`javascript
   <YourSection />
   \`\`\`

4. **Add to Navbar:**
   Update `navItems` array in `src/components/Navbar.jsx`

## 🚀 Deployment

### Deploy to Vercel:
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Deploy to Netlify:
1. Build: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Deploy to GitHub Pages:
1. Install: `npm install --save-dev gh-pages`
2. Update `package.json`:
   \`\`\`json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   \`\`\`
3. Deploy: `npm run deploy`

## 🐛 Common Issues

### Images not loading?
- Check image paths (use `/images/photo.jpg` for public folder)
- Ensure images are in the `public` folder

### Animations not smooth?
- Check browser compatibility
- Disable animations for older browsers

### Dark mode not persisting?
- Clear browser cache
- Check localStorage is enabled

## 💡 Tips

1. **Use high-quality images** for professional appearance
2. **Keep descriptions concise** - users don't read long paragraphs
3. **Update regularly** - add new projects and skills as you learn
4. **Test on mobile** - most visitors will be on mobile devices
5. **Add your actual projects** - showcase real work, not placeholders

## 📝 SEO Optimization

### Update meta tags in `index.html`:
\`\`\`html
<meta name="description" content="Your description">
<meta name="keywords" content="Full Stack Developer, React, Node.js">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="/preview-image.jpg">
\`\`\`

## 🔗 Useful Resources

- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Colors:** [Coolors](https://coolors.co/)
- **Gradients:** [uiGradients](https://uigradients.com/)
- **Images:** [Unsplash](https://unsplash.com/)
- **Fonts:** [Google Fonts](https://fonts.google.com/)

---

Need help? Check the README.md or open an issue on GitHub!
