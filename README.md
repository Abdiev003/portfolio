# Portfolio Website - Ali Abdiyev

A modern, responsive portfolio website built with cutting-edge technologies and stunning UI effects.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)

## ✨ Features

### 🎨 Modern UI Components
- **Aceternity UI Integration**: Premium components including:
  - Spotlight effects
  - 3D card animations
  - Text generation effects
  - Moving border buttons
  - Bento grid layouts
  - Background beams
  - Animated custom cursor
  - Particle trail effects
  
- **shadcn/ui**: 40+ beautifully designed components
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Custom Cursor**: Animated cursor with particle trail effects (toggleable)
- **Ambient Music Player**: Floating music player with 6 ambient sounds (Rain, Ocean, Forest, Cafe, Fire, Night)
- **Interactive 3D Avatar**: React Three Fiber powered 3D sphere with mouse tracking and particle effects
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### 📱 Sections

1. **Hero Section**
   - Split layout (text + 3D avatar)
   - Interactive 3D sphere with mouse tracking
   - Particle effects around 3D avatar
   - Auto-rotating camera controls
   - Spotlight animation
   - Text generation effect
   - Grid background pattern
   - Social media links
   - Smooth scroll indicators

2. **About Section**
   - Professional bio
   - Highlight cards with statistics
   - Achievement metrics
   - Company information

3. **Experience Timeline**
   - Professional work history with detailed descriptions
   - Interactive timeline with alternating layout
   - Company links and location information
   - Technologies used for each role
   - Animated timeline dots and cards
   - Experience statistics summary
   - LinkedIn profile link

4. **Skills Section**
   - Tabbed interface for different tech stacks
   - Frontend, Backend, Database, DevOps categories
   - Skill level indicators (Expert/Advanced/Intermediate)
   - Bento grid for services
   - Hover effects and animations

5. **GitHub Stats & Activity**
   - Real-time GitHub statistics (Stars, Forks, Repos, Followers)
   - GitHub contribution stats card
   - Most used languages chart
   - Contribution streak counter 🔥
   - Direct link to GitHub profile
   - Animated stat cards with smooth transitions

6. **Projects Section**
   - 3D card effects
   - Featured projects showcase
   - GitHub and live demo links
   - Tech stack tags
   - Show more/less functionality

7. **Contact Section**
   - Moving border button for email
   - Multiple contact methods
   - Social media integration
   - Professional CTA card

8. **Navigation**
   - Sticky navbar with glassmorphism
   - Mobile-responsive menu
   - Smooth scroll behavior
   - Theme toggle integration

9. **Ambient Music Player**
   - Floating button in bottom-right corner
   - 6 ambient sound options (Rain, Ocean, Forest, Cafe, Fire, Night)
   - Volume control with slider
   - Play/Pause functionality
   - Persistent settings (localStorage)
   - Loading states and error handling
   - Smooth panel animations

10. **Interactive 3D Avatar**
   - React Three Fiber powered holographic 3D graphics
   - Multi-layered geometric composition (Icosahedron + Sphere + Wireframe)
   - 3 animated rotating rings with gradient colors (Blue, Purple, Pink)
   - 200 floating particles with gradient HSL colors
   - 8 animated light beams rotating around the center
   - Pulse animation on hover (20% scale increase)
   - Auto-rotating camera controls
   - Multi-color lighting system (Blue, Purple, Pink spotlights)
   - Emissive materials for glowing effects
   - Additive blending for ethereal appearance
   - Glow effect background
   - Responsive canvas sizing
   - Dynamic import for optimal performance

### 🛠️ Tech Stack

#### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Animation library
- **React Three Fiber** - 3D graphics and animations
- **Three.js** - 3D rendering engine
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Inter + JetBrains Mono** - Professional Google Fonts

#### UI Components
- **shadcn/ui** - Component library
- **Aceternity UI** - Premium animated components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library

#### State Management
- **Zustand** - For custom cursor toggle state and music player state

#### Development Tools
- **Biome** - Fast linter and formatter
- **next-themes** - Theme management
- **class-variance-authority** - Component variants
- **tailwind-merge** - Classname merging utility

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abdiev003/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles & animations
│   ├── components/
│   │   ├── ui/                 # shadcn/ui & Aceternity components
│   │   │   ├── spotlight.tsx
│   │   │   ├── text-generate-effect.tsx
│   │   │   ├── moving-border.tsx
│   │   │   ├── bento-grid.tsx
│   │   │   ├── 3d-card.tsx
│   │   │   ├── glowing-stars.tsx
│   │   │   ├── meteors.tsx
│   │   │   └── ... (40+ more)
    │   │   ├── sections/           # Page sections
    │   │   │   ├── hero-section.tsx
    │   │   │   ├── about-section.tsx
    │   │   │   ├── experience-section.tsx
    │   │   │   ├── skills-section.tsx
    │   │   │   ├── github-section.tsx
    │   │   │   ├── projects-section.tsx
    │   │   │   └── contact-section.tsx
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── theme-provider.tsx
│   │   ├── theme-toggle.tsx
│   │   ├── music-player.tsx
│   │   ├── cursor-provider.tsx
│   │   ├── cursor-toggle.tsx
│   │   └── 3d-avatar.tsx
│   ├── hooks/
│   │   ├── use-music-player.ts
│   │   └── use-cursor-toggle.ts
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
│   └── resume-ali-abdiyev-en.pdf  # Resume (English)
├── components.json             # shadcn/ui config
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript config
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details**: Update email and social links in:
   - `src/components/sections/hero-section.tsx`
   - `src/components/sections/contact-section.tsx`
   - `src/components/footer.tsx`

2. **Projects**: Edit the projects array in:
   - `src/components/sections/projects-section.tsx`

3. **Skills**: Modify skill categories in:
   - `src/components/sections/skills-section.tsx`

4. **About**: Update bio and achievements in:
   - `src/components/sections/about-section.tsx`

5. **Resume/CV**: Replace the PDF file in:
   - `public/resume-ali-abdiyev-en.pdf` (see `public/README-CV.md` for details)

### Theme Customization

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... more variables */
}
```

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Abdiev003/portfolio)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy with one click

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Render**
- **DigitalOcean App Platform**

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run Biome linter
npm run format   # Format code with Biome
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Ali Abdiyev**
- Website: [quberts.com](https://quberts.com)
- GitHub: [@Abdiev003](https://github.com/Abdiev003)
- LinkedIn: [ali-abdiyev](https://linkedin.com/in/ali-abdiyev)
- Email: aliabdiyev000@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Aceternity UI](https://ui.aceternity.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)

---

⭐ Star this repo if you like it! Built with ❤️ using Next.js and TypeScript.
