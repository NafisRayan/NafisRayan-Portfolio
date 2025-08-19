# Nafis Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and ShadCN UI components, showcasing a software developer's projects, experience, and skills.

## ✨ Features

- **🌓 Dark/Light Mode** - Full theme switching with system preference detection and persistent user preference.
- **📱 Responsive Design** - Mobile-first approach with seamless responsive navigation and a dedicated mobile hamburger menu.
- **🎨 Modern UI** - Built with ShadCN components and Tailwind CSS for a sleek and accessible user interface.
- **⚡ Performance** - Fast loading with Next.js 15 App Router, optimized for a smooth user experience.
- **🎬 Animations** - Smooth loading animations, slide-up effects, interactive hover transitions on project cards, and a captivating grid background.
- **📧 Contact Form** - Functional contact form with client-side validation, loading states, and file upload capability.
- **🎯 Smooth Scrolling** - Enhanced smooth scrolling experience powered by Lenis for fluid navigation.
- **💡 Professional Sections** - Dedicated sections for Hero, Experience, Projects, Skills, and Contact, providing a comprehensive overview.
- **🌐 SEO Optimized** - Proper meta tags and structure for improved search engine visibility.
- **🔗 Social Media Integration** - Easy access to social profiles and external links.

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN UI (Button, Card, Badge, Sheet, Input, Textarea, Label, Skeleton)
- **Icons:** Lucide React, React Icons
- **Animations:** Framer Motion
- **3D Graphics:** @splinetool/react-spline (for interactive 3D elements)
- **Smooth Scrolling:** Lenis
- **Theme Management:** next-themes
- **Email Service:** EmailJS (for contact form submissions)
- **Image Uploads:** Cloudinary
- **Form Handling:** Custom validation
- **Deployment:** Ready for Vercel/Netlify/Railway/DigitalOcean App Platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/NafisRayan/nafis-portfolio.git
    cd nafis-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env.local` file in the root directory and add your EmailJS and Cloudinary credentials:
    ```
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  **Open your browser**
    Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nafis-portfolio/
├── public/                    # Static assets (images, favicon, client logos, project images)
├── src/
│   ├── app/
│   │   ├── api/               # API routes (e.g., contact form submission)
│   │   ├── globals.css        # Global styles with custom animations
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   └── page.tsx           # Main page component, integrating all sections
│   ├── components/
│   │   ├── ui/                # ShadCN UI components and custom UI elements
│   │   ├── contact-section.tsx  # Contact form and social links
│   │   ├── email-templates.tsx  # Email templates for contact form
│   │   ├── experience-section.tsx # Professional timeline
│   │   ├── footer.tsx         # Footer component
│   │   ├── header.tsx         # Navigation header
│   │   ├── hero-section.tsx   # Landing section with interactive 3D and client logos
│   │   ├── lenis-provider.tsx # Context provider for smooth scrolling
│   │   ├── loading-spinner.tsx  # Loading components (spinners, skeletons)
│   │   ├── projects-section.tsx # Project showcase
│   │   ├── skills-section.tsx # Displays technical skills
│   │   ├── theme-provider.tsx # Theme context provider
│   │   └── theme-toggle.tsx   # Theme switching button
│   ├── data/
│   │   └── projects.json      # Project data (titles, descriptions, tech, links)
│   ├── lib/
│   │   ├── cloudinary.ts      # Cloudinary configuration
│   │   └── utils.ts           # Utility functions (cn for Tailwind classes)
├── components.json            # ShadCN configuration
├── EMAILJS_SETUP.md           # EmailJS setup instructions
├── env.local.demo.txt         # Example environment variables
├── eslint.config.mjs          # ESLint configuration
├── FRONTEND_IMAGE_CONFIG.md   # Frontend image configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Project dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── README.md                  # Project documentation
├── ShadCN-context.md          # ShadCN component usage context
├── test-email.js              # Email testing script
├── tsconfig.json              # TypeScript configuration
```

## 📈 Project Showcase (Highlights)

Here are a few highlights from the projects featured in this portfolio:

-   **Fashion Ecommerce**: A modern e-commerce front-end built with Next.js 14, TypeScript, and Tailwind CSS, featuring Redux Toolkit for state management and Framer Motion animations.
-   **TechX-Ecommerce**: A robust, full-stack E-Commerce platform using Next.js 14, React, and TypeScript, with a responsive UI, admin dashboard, Prisma ORM, MongoDB, and NextAuth for secure authentication.
-   **Admin Dashboard**: A modern admin panel dashboard built with ShadcnUI in Next.js, offering light/dark modes, responsive design, and reusable components for various projects.
-   **AI-Powered Customer Support**: An intelligent customer support system featuring AI chatbots, automated ticket routing, and sentiment analysis, built with React and NodeJS, incorporating NLP and ML.
-   **AR Product Visualization**: A powerful, customizable tray configuration tool built with React-Three-Fiber, Next.js, and Tailwind CSS, enabling users to design and visualize 3D models.
-   **3D Lego Simulation**: A web-based 3D Lego simulation game built with Next.js 15, React 19, and Three.js, offering a creative and engaging experience for Lego enthusiasts.

## 🚀 Deployment

The project is ready for deployment on platforms like:

-   **Vercel** (Recommended for Next.js)
-   **Netlify**
-   **Railway**
-   **DigitalOcean App Platform**

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
