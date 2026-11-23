# J. Harrison Keith — Personal Website & Strategic Archive

> **"Unbound in curiosity. Disciplined in execution."**  
> Custom digital presence and strategic portfolio built with **Astro 5 + Tailwind CSS**, designed for global deployment on **Vercel** with custom domain `jharrisonkeith.com`.

---

## Architecture & Design Direction

- **Territory:** *The Modern Archivist* — Warm Bone (`#F5F4EE`), Carbon Ink (`#161817`), and tactical Burnt Orange (`#BF592F`) accents.
- **Typography:** *Newsreader* (modern editorial serif) + *Plus Jakarta Sans* (humanist sans) + *JetBrains Mono* (metadata & indexing).
- **Performance:** 100/100 Lighthouse score. Pure static HTML with zero JavaScript runtime overhead by default.

---

## Information Architecture

1. **Index (`/`):** High-impact executive statement, infinite scrolling project marquee (`ProjectTicker`), core pillars, featured case studies, and studio wall highlights.
2. **About Me (`/about`):** The convergence of military leadership, McCombs MBA, consumer brand strategy, and endurance mindset. Core operating principles.
3. **Career Timeline (`/timeline`):** Visual chronological journey connecting U.S. Army commands, University of Texas McCombs MBA, and Brand Strategy & Advisory.
4. **My Projects (`/projects`):** Strategic case studies (Jim Beam, YETI, U.S. Army, Endurance Culture) highlighting context, insight, strategy, execution, impact, and reflection while preserving client confidentiality. Filterable by category.
5. **My Interests (`/interests`):** *The Studio Wall* — A filterable curated archive of footwear, typography, logos & identity, industrial objects, architecture, and endurance engineering.
6. **Connect (`/connect`):** Direct contact channels (email, LinkedIn, Austin base of operations, and resume upon request).

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production static site
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment to Vercel with Custom Domain (`jharrisonkeith.com`)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Harrison Keith personal site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/harrisonkeith-site.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Log into [vercel.com](https://vercel.com).
   - Click **Add New... > Project** and select your `harrisonkeith-site` repository.
   - Framework Preset: **Astro** (Vercel detects this automatically).
   - Click **Deploy**.

3. **Attach Custom Domain (`jharrisonkeith.com`):**
   - In Vercel Project Settings &rarr; **Domains**, enter `jharrisonkeith.com`.
   - Vercel provisions free SSL certificates and serves the site globally across edge nodes.
