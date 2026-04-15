# Contributing Guide

Welcome to the development guide for the **devrizvy-portfolio**. This project is a fantasy-themed developer portfolio built with Next.js, React Three Fiber, and Tailwind CSS.

## Development Setup

### Prerequisites
* **Node.js 20+**
* **npm** (or **Bun** if preferred)
* **Git**

### Getting Started
1. **Clone the repository**
   ```bash
   git clone https://github.com/devrizvy/devrizvy-portfolio.git
   cd devrizvy-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Visit:** [http://localhost:3000](http://localhost:3000)

---

## Project Customization

### Personal Information
Most personal details are hardcoded in the following components:
* **`components/ProfileHeader.tsx`**: Update your name, title, bio, and work experiences.
* **`components/ProjectsTimeline.tsx`**: Update your project list, descriptions, and tech stacks.
* **`app/page.tsx`**: Update social media links (GitHub, LinkedIn, Instagram, etc.).

### GitHub Contribution Graph
The contribution graph is powered by `react-github-calendar`.
* To update the username, edit `components/GithubActivity.tsx`:
  ```tsx
  <GitHubCalendar
    username="your-github-username"
    // ...
  />
  ```

### 3D Model
The 3D castle model used in the header is a compressed GLB file.
* **Model file:** `public/castle-compressed.glb`
* **Component:** `components/CastleModel.tsx`
* To replace the model, swap the file in `public/` and update the `useGLTF` paths in the component.

### Intro Video
The intro "rebirth" video is located at `public/rebirth.mp4`. To change it, replace the file and ensure the filename matches in `app/page.tsx`.

---

## Building & Deployment

### Build for Production
```bash
npm run build
# or
bun run build
```
The output will be in the `.next` directory.

### Deployment
This project is configured for deployment on **Netlify**.
* Build Command: `npm run build`
* Publish Directory: `.next`
* Node Version: `20` (configured in `netlify.toml`)

---

## Project Structure
```text
.
├── app/                  # Next.js App Router (Layouts & Pages)
├── components/           # React Components (Profile, Projects, 3D)
├── public/               # Static Assets (3D models, videos, icons)
├── netlify.toml          # Netlify Deployment Configuration
├── tailwind.config.ts    # Tailwind CSS Configuration
└── package.json          # Project Dependencies & Scripts
```

## Available Commands
* `npm run dev`: Start development server.
* `npm run build`: Build production bundle.
* `npm run start`: Run production build locally.
* `npm run lint`: Run ESLint checks.

---

## Troubleshooting
* **Hydration Errors:** This project uses `dynamic` imports for 3D components to avoid SSR mismatches. Ensure `ssr: false` is used when importing `CastleModel`.
* **Model Not Loading:** Verify the `.glb` file exists in `public/` and paths are correct.
* **Tailwind 4:** This project uses Tailwind CSS 4. Ensure your IDE extensions are updated to support the latest version.

## Questions?
Reach out via [GitHub Issues](https://github.com/devrizvy/devrizvy-portfolio/issues).
