# Eginata Kasan's Personal Portfolio

Hi, this is a repo for my portfolio (in-progress).

I'm building my website using Next.js with TypeScript, Tailwind CSS, and GSAP for animations.

## 🚀 Deployment

This project is configured for deployment to GitHub Pages. The site is automatically deployed when changes are pushed to the main branch.

### Manual Deployment

If you need to deploy manually:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

### Automated Deployment

The project uses GitHub Actions for automated deployment. When you push changes to the main branch, the site will be automatically built and deployed to GitHub Pages.

## 🛠️ Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/eginatakasan/eginatakasan.github.io.git
   cd eginatakasan.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
├── src/
│   ├── components/         # React components
│   │   ├── atoms/         # Atomic components
│   │   └── organisms/     # Complex components
│   ├── assets/            # Static assets (images, fonts, etc.)
│   ├── constants/         # Application constants
│   └── utils/             # Utility functions
├── public/                # Public static files
└── .github/workflows/     # GitHub Actions workflows
```

## 🎨 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **Emotion** - CSS-in-JS library
- **GitHub Pages** - Static site hosting

## 🔧 Configuration

The project is configured for static export to work with GitHub Pages:

- Static export enabled in `next.config.js`
- Trailing slashes enabled for better compatibility
- `.nojekyll` file included to disable Jekyll processing

## 📝 License

This project is private and personal.
