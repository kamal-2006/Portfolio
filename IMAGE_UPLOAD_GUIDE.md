# 📸 Image & Resume Upload Guide

## 📁 Where to Put Your Files

### 1. **Profile Images**

Create these image files in the `public/images/` folder:

#### **Hero Section Image** (Main Profile Photo)
- **File name:** `profile.jpg` or `profile.png`
- **Location:** `public/images/profile.jpg`
- **Recommended size:** 300x300 pixels (square)
- **Format:** JPG or PNG
- **Tips:** 
  - Professional headshot
  - Good lighting
  - Plain or blurred background
  - Smiling and approachable

#### **About Section Image**
- **File name:** `about.jpg` or `about.png`
- **Location:** `public/images/about.jpg`
- **Recommended size:** 400x400 pixels (square)
- **Format:** JPG or PNG
- **Tips:**
  - Can be same as profile.jpg
  - Or a different professional photo
  - Working at desk or casual professional look

### 2. **Resume/CV**

Place your resume in the `public/` folder:

- **File name:** `resume.pdf`
- **Location:** `public/resume.pdf`
- **Format:** PDF only
- **Size:** Keep under 2MB
- **Tips:**
  - Name it clearly: "Kamalesh_K_Resume.pdf" or just "resume.pdf"
  - Make sure it's the latest version
  - Include your contact info and projects

### 3. **Project Screenshots** (Optional)

If you want to add real project images:

- **Location:** `public/images/`
- **File names:** 
  - `project-chat-app.jpg`
  - `project-hospital.jpg`
  - `project-portfolio.jpg`
- **Recommended size:** 600x400 pixels (3:2 ratio)
- **Format:** JPG or PNG

---

## 🎯 Current Setup

Your portfolio is configured to use:

### Hero Section:
```javascript
src="/images/profile.jpg"
```
**Fallback:** If image not found, shows a nice purple avatar with your initials "KK"

### About Section:
```javascript
src="/images/about.jpg"
```
**Fallback:** Shows a gradient avatar with your initials

### Resume:
```javascript
href="/resume.pdf"
```

---

## 📝 Step-by-Step: How to Upload

### Option 1: Using File Explorer (Easiest)

1. **Open Windows File Explorer**
2. **Navigate to:** `D:\Portfolio\public\`
3. **You'll see a folder called `images`** - if not, create it
4. **Copy your photos into the `images` folder:**
   - Rename your profile photo to `profile.jpg`
   - Rename your about photo to `about.jpg` (or use same as profile)
5. **Copy your resume to `public` folder:**
   - Rename your resume PDF to `resume.pdf`
6. **Refresh your browser** - your images should appear!

### Option 2: Using VS Code

1. **In VS Code, look at the file explorer (left sidebar)**
2. **Find:** `public` folder
3. **Right-click** on `public/images` → Select "Reveal in File Explorer"
4. **Drag and drop** your images into the folder
5. **Rename files** to match:
   - `profile.jpg`
   - `about.jpg`
6. **Drag your resume** into the `public` folder
7. **Rename to:** `resume.pdf`

---

## 🖼️ Image Optimization Tips

### Before Uploading:

1. **Compress your images** at: https://tinypng.com/
   - Reduces file size without losing quality
   - Faster loading times

2. **Crop to correct size:**
   - Profile: 300x300px square
   - About: 400x400px square
   - Projects: 600x400px rectangle

3. **Use good quality photos:**
   - Well-lit
   - Clear and sharp
   - Professional appearance

---

## 🎨 Image Sources (If You Don't Have Photos Yet)

### Free Professional Headshots:
- **This Person Does Not Exist:** https://thispersondoesnotexist.com/ (AI-generated)
- **Unsplash:** https://unsplash.com/s/photos/professional-headshot
- **Pexels:** https://www.pexels.com/search/portrait/

### Create Avatar Placeholder:
- **UI Avatars:** https://ui-avatars.com/
- **Boring Avatars:** https://boringavatars.com/

**Current Fallback:** Your site uses UI Avatars automatically if images aren't found!

---

## ✅ Checklist

Before deploying your portfolio, make sure you have:

- [ ] **Profile photo** uploaded to `public/images/profile.jpg`
- [ ] **About photo** uploaded to `public/images/about.jpg`
- [ ] **Resume PDF** uploaded to `public/resume.pdf`
- [ ] Images are **optimized** (compressed)
- [ ] Resume is **up-to-date** with latest projects
- [ ] All images are **high quality** and professional
- [ ] File names are **exactly correct** (case-sensitive!)

---

## 🚨 Troubleshooting

### Images Not Showing?

1. **Check file names** - Must be exactly:
   - `profile.jpg` (lowercase, no spaces)
   - `about.jpg` (lowercase, no spaces)
   - `resume.pdf` (lowercase, no spaces)

2. **Check file location:**
   ```
   D:\Portfolio\
   ├── public\
   │   ├── images\
   │   │   ├── profile.jpg     ← HERE
   │   │   └── about.jpg       ← HERE
   │   └── resume.pdf          ← HERE
   ```

3. **Refresh browser** with Ctrl + Shift + R (hard refresh)

4. **Check file format:**
   - Images: `.jpg`, `.jpeg`, or `.png` only
   - Resume: `.pdf` only

5. **File too big?**
   - Compress images at tinypng.com
   - Keep images under 500KB each
   - Keep resume under 2MB

---

## 🎯 Current Status

✅ **Loading screen:** Now displays for 5-6 seconds
✅ **Role rotation:** Shows 3 roles automatically
   - Aspiring Full Stack Developer
   - Tech Explorer
   - Problem Solver
✅ **Background:** Changed to 'geometric' (floating shapes)
✅ **Image setup:** Ready to accept your photos
✅ **Fallback avatars:** Will show if images not found

---

## 💡 Pro Tips

1. **Use the same photo** for both profile.jpg and about.jpg (easier)
2. **Take a new photo** with good lighting if needed
3. **Compress all images** before uploading (faster load times)
4. **Update resume regularly** as you complete new projects
5. **Test download** - click the resume button to make sure it works

---

## 📞 Quick Reference

**Image Folder:**
```
D:\Portfolio\public\images\
```

**Resume Location:**
```
D:\Portfolio\public\resume.pdf
```

**Required Files:**
- `public/images/profile.jpg` (300x300px)
- `public/images/about.jpg` (400x400px)
- `public/resume.pdf` (PDF format)

---

Your portfolio will work perfectly even without custom images (it shows nice gradient avatars as fallback), but adding your real photos makes it much more personal and professional! 🎉
