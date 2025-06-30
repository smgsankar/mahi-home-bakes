# 🧁 Mahi Home Bakes

A modern, responsive website for Mahi Home Bakes - a home-based bakery specializing in custom cakes, muffins, cookies, and chocolates. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Product Showcase**: Beautiful gallery of baked goods with category filtering
- **Contact Integration**: WhatsApp and email integration for easy customer communication
- **Photo Gallery**: Visual showcase of past work and creations
- **Customer Testimonials**: Social proof from satisfied customers
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4.x with custom animations
- **Build Tool**: Vite 6.x
- **UI Components**: ShadCN UI, Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: Firebase Hosting
- **Development**: ESLint for code quality

## 📋 Prerequisites

- Node.js (version 18 or higher)
- Yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mahi-home-bakes
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 📜 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build locally
- `yarn lint` - Run ESLint for code quality checks
- `yarn check:types` - Run TypeScript type checking

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── icons/          # Custom SVG icons
│   ├── layout/         # Header and Footer components
│   ├── sections/       # Main page sections
│   └── ui/             # Base UI components (Button, Card, etc.)
├── data/               # Static content and product data
├── lib/                # Utility functions and custom hooks
└── main.tsx           # Application entry point

public/
├── catalog/           # Product images
├── gallery/          # Gallery images
└── ...               # Other static assets
```

## 🎨 Key Components

### Sections
- **Hero Section**: Eye-catching landing area with brand introduction
- **About Section**: Information about the bakery and its story
- **Products Section**: Filterable product catalog
- **Gallery Section**: Photo showcase of creations
- **Testimonials Section**: Customer reviews and feedback
- **Contact Section**: Business contact information and location

### Features
- **Product Filtering**: Filter products by category (Cakes, Muffins, Cookies, Chocolates)
- **Scroll to Top**: Floating action button for easy navigation
- **Mobile Menu**: Responsive navigation for mobile devices
- **Fade-in Animations**: Smooth animations on scroll

## 📱 Contact Integration

The website includes direct integration with:
- **WhatsApp**: Instant messaging for orders and inquiries
- **Email**: Professional email communication
- **Instagram**: Social media presence
- **Google Maps**: Business location

## 🚀 Deployment

The project is configured for Firebase Hosting:

1. **Build the project**
   ```bash
   yarn build
   ```

2. **Deploy to Firebase** (requires Firebase CLI)
   ```bash
   firebase deploy
   ```

## 🔧 Configuration

### Contact Information
Update contact details in `src/data/content.ts`:
- WhatsApp number
- Email address
- Instagram link
- Google Maps link

### Products
Add or modify products in `src/data/content.ts` in the `products` array.

### Images
- Product images: Place in `public/catalog/`
- Gallery images: Place in `public/gallery/`
- Other assets: Place in `public/`

## 🎯 Performance Features

- **Optimized Images**: WebP format for faster loading
- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Unused code elimination
- **Modern JS**: ES modules for better performance

## 📄 License

This project is private and proprietary to Mahi Home Bakes.

## 🤝 Contributing

This is a private project for Mahi Home Bakes. For any modifications or updates, please contact the development team.

---

**Built with ❤️ for Mahi Home Bakes**