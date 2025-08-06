# Nafis Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and ShadCN UI components.

## ✨ Features

- **🌓 Dark/Light Mode** - Full theme switching with system preference detection
- **📱 Responsive Design** - Mobile-first approach with seamless responsive navigation
- **🎨 Modern UI** - Built with ShadCN components and Tailwind CSS
- **⚡ Performance** - Fast loading with Next.js 15 App Router
- **🎬 Animations** - Smooth loading animations and hover effects
- **📧 Contact Form** - Functional contact form with validation
- **🎯 Smooth Scrolling** - Enhanced smooth scrolling experience powered by Lenis
- **🎨 Grid Background** - Beautiful animated grid background pattern

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN UI
- **Icons:** Lucide React
- **Smooth Scrolling:** Lenis
- **Theme:** next-themes
- **Deployment:** Ready for Vercel/Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nafis-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nafis-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles with custom animations
│   │   ├── layout.tsx           # Root layout with theme provider
│   │   └── page.tsx             # Main page component
│   ├── components/
│   │   ├── ui/                  # ShadCN UI components
│   │   ├── contact-section.tsx  # Contact form and social links
│   │   ├── experience-section.tsx # Professional timeline
│   │   ├── footer.tsx           # Footer component
│   │   ├── header.tsx           # Navigation header
│   │   ├── hero-section.tsx     # Landing section
│   │   ├── loading-spinner.tsx  # Loading components
│   │   ├── projects-section.tsx # Project showcase
│   │   ├── theme-provider.tsx   # Theme context provider
│   │   └── theme-toggle.tsx     # Theme switching button
│   └── lib/
│       └── utils.ts             # Utility functions
├── components.json              # ShadCN configuration
├── ShadCN-context.md           # Component tracking
└── README.md                   # Project documentation
```

## 🎨 ShadCN Components Used

- **Button** - Navigation, CTAs, and form submissions
- **Card** - Project showcase and experience timeline
- **Badge** - Technology tags and skill indicators
- **Sheet** - Mobile navigation menu
- **Input/Textarea/Label** - Contact form elements
- **Skeleton** - Loading states

## 🎬 Animations & Effects

- **Fade-in animations** - Smooth content loading
- **Slide-up effects** - Progressive content reveal
- **Hover transitions** - Interactive project cards
- **Loading skeletons** - Better UX during loading states
- **Grid background** - Animated background pattern

## 📱 Sections

1. **Hero Section** - Introduction with animated skills badges
2. **Experience Section** - Professional timeline with achievements
3. **Projects Section** - Showcase of development projects
4. **Contact Section** - Contact form and social media links

## 🎯 Key Features Implemented

- **Responsive Navigation** with mobile hamburger menu
- **Theme Switching** with persistent user preference
- **Project Cards** with interactive hover effects
- **Contact Form** with loading states and validation
- **Professional Timeline** for experience display
- **Social Media Integration** with external links
- **Smooth Scrolling** for a fluid navigation experience
- **SEO Optimized** with proper meta tags

## 🚀 Deployment

The project is ready for deployment on platforms like:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**

### Quick Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using Next.js, TypeScript, and ShadCN UI**
