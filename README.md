# Assaduzzaman Munna - World-Class AI/ML & Systems Engineer Portfolio

This is a premium, high-fidelity personal branding portfolio website designed for recruiters, hiring managers, and CTOs at leading tech firms. Inspired by the visual aesthetics of Stripe, Linear, and Vercel, it features native scroll-driven animations, an interactive Canvas neural network particle system, 3D mouse-tracking glass cards, and a real-time system HUD navbar.

---

## 🎨 Personal Branding Suggestions

### 1. Suggested Domain Name Ideas
To maximize impact and maintain a premium personal brand, consider registering:
*   **`munna.ai`** (Highly recommended - short, professional, and represents your niche)
*   **`ajmunna.dev`** (Great developer-focused option)
*   **`munnaml.com`** (Excellent alternative for ML engineering specialization)
*   **`assaduzzaman.ai`** (Full professional name, highly authorative)
*   **`amunna.dev`** (Sleek and professional)

### 2. Suggested Color Palette (Implemented)
*   **Background (Obsidian Black)**: `#020204` (Deep black base to eliminate screen glare and let animations pop)
*   **Surfaces (Frosted Glass)**: `rgba(10, 15, 30, 0.4)` with `backdrop-filter: blur(20px)`
*   **Glow borders**: `rgba(255, 255, 255, 0.05)` changing to cyan/indigo glows on hover.
*   **Accents**: Neon Cyber Teal (`#06b6d4`), Hyper Violet (`#8b5cf6`), and Accent Indigo (`#6366f1`).

### 3. Suggested Typography Pairings (Implemented)
*   **Headings**: `Plus Jakarta Sans` (Geometric, clean, modern, sans-serif)
*   **Body Copy**: `Inter` (Optimized for readability and clean sizing hierarchy)
*   **Metrics / Systems / HUD**: `Fira Code` (Monospaced, technical layout vibe)

---

## 🚀 Local Development Setup

To run the portfolio website locally for testing or updates:

### Option A: Direct Open (Zero Tools)
Double-click [index.html](file:///Users/ajmunna/Desktop/Workspace/portfolio/index.html) in your file explorer to open it directly in any modern web browser.

### Option B: Local Server (Recommended for checking caching/assets)
Run a local Python server from this workspace directory:
```bash
python3 -m http.server 8000
```
Then open your browser and navigate to: [http://localhost:8000](http://localhost:8000).

---

## 🌐 GitHub Pages Deployment Instructions

This website has no backend dependencies and is fully optimized for free hosting on **GitHub Pages** (yourname.github.io).

### Step 1: Initialize Git and Commit Files
If you haven't initialized git in this directory yet:
```bash
git init
git add .
git commit -m "feat: initial commit of premium AI/ML portfolio"
```

### Step 2: Create a GitHub Repository
1. Log into your GitHub account.
2. Create a new repository named exactly: **`iam-ajmunna.github.io`** (replace `iam-ajmunna` with your actual GitHub username).
3. Keep the repository **Public** (required for free GitHub Pages).

### Step 3: Link and Push to GitHub
Link your local repository to GitHub and push your files:
```bash
git remote add origin https://github.com/iam-ajmunna/iam-ajmunna.github.io.git
git branch -M main
git push -u origin main
```

### Step 4: Verify Deployment
GitHub Pages builds and deploys automatically upon pushing. 
1. Go to your repository settings on GitHub.
2. Click the **Pages** tab in the left sidebar.
3. Under "Build and deployment", confirm the source is set to **Deploy from a branch**, and the branch is set to **`main`** and **`/ (root)`**.
4. Visit your website at: **`https://iam-ajmunna.github.io/`** (usually active within 1-2 minutes).
