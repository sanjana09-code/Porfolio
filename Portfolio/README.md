# Sanjana K. - Developer Portfolio Website

A modern, responsive personal developer portfolio website designed for **Sanjana K.**, a 2nd-year B.Tech Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at Lovely Professional University.

---

## 🌟 Visual Design & Highlights

- **Dark Modern Aesthetic**: Obsidian background (`#07080c`), glowing radial purple/blue/cyan accents, and glassmorphism.
- **Interactive Neural Constellation**: Dynamic HTML5 canvas constellation network in the Hero section responding to mouse physics.
- **Micro-Interactions**: Active scrollspy navigation, mouse spotlight cards, smooth scroll anchors, and toast notifications.
- **Student-Focused Showcase**: Realistically structured for internship applications, hackathons, and GitHub presentation.
- **Comprehensive Project Deep-Dives**:
  - **SpendWise** (Personal expense tracker & budgeting app)
  - **Smart Bluetooth Car** (Arduino & HC-05 robotics vehicle)
  - **Bullet Rush** (HTML5 Canvas 2D arcade shooter)
- **100% Mobile Responsive**: Tested across desktop, tablet, and mobile with an accessible drawer menu.

---

## 📁 File Structure

```
sanjana-portfolio/
├── index.html                  # Semantic HTML5 single-page portfolio
├── css/
│   └── styles.css              # Custom animations, glassmorphism, scrollbars & glow utilities
├── js/
│   ├── main.js                 # Scrollspy, dynamic navbar, modals, form validation, filter tabs, toasts
│   └── particles.js            # Interactive particle network canvas animation
├── assets/
│   ├── favicon.svg             # Monogram 'SK' brand icon
│   ├── avatar.svg              # Developer profile vector illustration
│   ├── project-spendwise.svg   # SpendWise UI dashboard mockup
│   ├── project-car.svg         # Smart Bluetooth Car robotics schematic mockup
│   ├── project-bulletrush.svg  # Bullet Rush arcade game screen mockup
│   ├── cert-python.svg         # Python certification badge
│   └── cert-cyber.svg          # Cybersecurity certification shield badge
└── README.md                   # Documentation & deployment guide
```

---

## 🚀 How to Run Locally

### Method 1: Direct Browser
Simply double-click `index.html` or drag it into any web browser (Chrome, Edge, Firefox, Safari).

### Method 2: VS Code Live Server
1. Open the `sanjana-portfolio` folder in VS Code.
2. Click **Go Live** on the bottom status bar (or right-click `index.html` -> **Open with Live Server**).

---

## 🌐 How to Deploy for Free

### Option A: GitHub Pages (Recommended)
1. Create a new repository on GitHub named `sanjana-portfolio` or `<your-username>.github.io`.
2. Push the files in this directory to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sanjana K. Developer Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/sanjana-portfolio.git
   git push -u origin main
   ```
3. Go to **Settings** > **Pages** in your repository.
4. Set Source to **Deploy from a branch** -> `main` -> `/ (root)`.
5. Your portfolio will be live at `https://<your-username>.github.io/sanjana-portfolio/`!

### Option B: Vercel
1. Install the Vercel CLI (`npm i -g vercel`) or log into [vercel.com](https://vercel.com).
2. Connect your GitHub repository or run `vercel` in this folder.
3. Your portfolio will deploy instantly with a live `.vercel.app` domain.

---

## ✏️ Customizing Your Links

When you are ready to plug in your real URLs:
1. **GitHub Profile**: Replace `#github-sanjana` in `index.html` with your GitHub profile URL (e.g., `https://github.com/your-username`).
2. **LinkedIn Profile**: Replace `#linkedin-sanjana` in `index.html` with your LinkedIn URL.
3. **Project Repositories**: Replace `#github-project-1`, `#github-project-2`, `#github-project-3` with your specific repository URLs in `index.html` and `js/main.js`.
4. **Resume / CV**: Place your `Sanjana_K_Resume.pdf` in the `assets/` folder and update the download trigger button.

---

## 📜 License
&copy; 2026 Sanjana K. All rights reserved.
