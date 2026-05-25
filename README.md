# Spiritual Impact

A modern, responsive landing page for a spiritual organization dedicated to meaningful impact and community service. Built with React, TypeScript, and Vite for optimal performance.

## Features

- **Hero Section**: Eye-catching landing with call-to-action
- **Mission & Values**: Showcase your organization's purpose and impact
- **Campaigns**: Highlight current initiatives and programs
- **Testimonials**: Share stories from community members
- **Donation CTA**: Floating donation button for easy access
- **Contact Form**: Collect inquiries with validation
- **Responsive Design**: Beautiful on all devices
- **Smooth Animations**: Framer Motion for fluid interactions
- **Accessibility**: Built with modern best practices

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite 7** - Lightning-fast build tool
- **TanStack Router** - File-based routing
- **TanStack Query** - Data fetching & caching
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Efficient form handling
- **Zod** - Schema validation
- **Recharts** - Data visualization

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5174](http://localhost:5174) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Mission.tsx
│   ├── Impact.tsx
│   ├── Campaigns.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── ui/           # Radix UI components
├── routes/           # File-based routes (TanStack Router)
├── hooks/            # Custom React hooks
├── lib/              # Utilities & helpers
└── styles.css        # Global styles

```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Customization

### Contact Information
Update contact details in `src/components/Contact.tsx`:
```tsx
const info = [
  { icon: FiMail, label: "Email", value: "seva@charanvandan.org" },
  { icon: FiPhone, label: "Phone", value: "+91 98765 43210" },
  { icon: FiMapPin, label: "Address", value: "Charan Aashray, Rishikesh, India" },
];
```

### Colors & Branding
Tailwind configuration is in `tailwind.config.js`. Custom colors like `saffron`, `teal`, `maroon`, and `cream` are defined there.

## Deployment

The site is configured for deployment on Cloudflare Pages:
- Uses `@cloudflare/vite-plugin` for optimized builds
- `public/_redirects` handles URL routing
- `src/server.ts` contains server-side request handling

Deploy with:
```bash
npm run build
# Then push to your hosting provider
```

## Performance

- Optimized for Core Web Vitals
- Image lazy-loading
- Code splitting via Vite
- PostCSS & Tailwind JIT for minimal CSS

## License

Spiritual Impact © 2024. All rights reserved.
