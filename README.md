# Christina Charan - Digital Creator Portfolio

A modern, responsive portfolio website for Christina Charan, showcasing her work as a digital creator, voiceover artist, and image consultant.

## Features

- 🎨 Modern, clean, and responsive design
- ⚡ Built with Next.js 13 and React 18
- 🎨 Styled with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive layout
- 🚀 Optimized for performance and SEO
- 🌈 Custom animations and transitions
- 📝 Contact form with form validation
- 🎤 Showcase of work and services
- 📱 Mobile-first approach

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Type Animation**: [react-type-animation](https://www.npmjs.com/package/react-type-animation)
- **Form Handling**: React Hook Form
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 14.6.0 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/christina-charan-portfolio.git
   cd christina-charan-portfolio/frontend
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
frontend/
├── public/                 # Static files
├── src/
│   ├── app/                # Next.js 13+ app directory
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx     # Contact section
│   │   ├── CTA.tsx         # Call-to-action section
│   │   ├── Experience.tsx  # Experience section
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Portfolio.tsx   # Portfolio section
│   │   ├── Services.tsx    # Services section
│   │   └── Testimonials.tsx # Testimonials section
│   └── lib/                # Utility functions
└── package.json            # Project dependencies
```

## Customization

### Update Content

1. **Personal Information**: Update the content in the respective component files.
2. **Colors**: Customize the color scheme in `tailwind.config.js`.
3. **Images**: Replace placeholder images in the `public` folder.

### Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# Add other environment variables as needed
```

## Deployment

The easiest way to deploy this project is to use [Vercel](https://vercel.com/):

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project on Vercel.
3. Vercel will automatically detect it's a Next.js app and set up the build and deployment settings.

## Performance

- **Lighthouse Score**: 95+ (Performance), 100 (Accessibility), 100 (Best Practices), 100 (SEO)
- **Optimized Images**: Using Next.js Image component
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Images and components are lazy-loaded

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

Made with ❤️ by [Your Name](https://your-website.com)
