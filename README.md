# Eginata Kasan's Personal Portfolio

Hi, I'm **Eginata Kasan** — a software engineer with a background in full-stack development and UX engineering. I'm currently a Full Stack Engineer at QSStudio in Sydney. Previously I worked as a UX Engineer at Nomura Research Institute Indonesia in Jakarta and started out as a Game Programmer intern at Agate Games Studio. This repository is my personal portfolio site: a place to share my experience, projects, and the technologies I work with.

The site is built as a static Next.js app and is deployed to **GitHub Pages** at [eginatakasan.github.io](https://eginatakasan.github.io).

---

## What's in this project

This is the source code for my portfolio website. It includes:

- **About / intro** — who I am and what I do  
- **Work experience** — roles at QSStudio, Nomura Research Institute Indonesia, and Agate  
- **Technical skills** — web, mobile, and testing technologies I use  
- **Projects** — selected work and side projects  

The app is exported as static HTML/CSS/JS and served on GitHub Pages (no server required).

---

## Tech stack (this site)

| Area        | Technologies |
|------------|--------------|
| **Framework** | Next.js 15 (App Router) |
| **Language**  | TypeScript |
| **UI / styling** | React 19, Tailwind CSS, Emotion, styled-components |
| **Animation** | GSAP (GreenSock) |
| **Utilities** | date-fns, clsx |
| **Hosting**   | GitHub Pages (static export) |

Build and deploy use **Node.js**, **gh-pages**, and (optionally) **GitHub Actions**.

---

## Deployment

The site is set up for deployment to GitHub Pages and can be updated manually or via CI.

### Manual deployment

1. **Build:**
   ```bash
   npm run build
   ```
   or with yarn:
   ```bash
   yarn build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```
   or:
   ```bash
   yarn deploy
   ```

### Automated deployment

When GitHub Actions is configured, pushing to the main branch can trigger an automatic build and deploy to GitHub Pages.

---

## Development

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**

### Setup and run

1. **Clone the repo:**
   ```bash
   git clone https://github.com/eginatakasan/eginatakasan.github.io.git
   cd eginatakasan.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or:
   ```bash
   yarn
   ```

3. **Start the dev server:**
   ```bash
   npm run dev
   ```
   or:
   ```bash
   yarn dev
   ```

4. Open **http://localhost:3000** in your browser.

---

## Project structure

```
├── app/                    # Next.js App Router (pages, layout)
├── src/
│   ├── components/         # React components
│   │   ├── atoms/          # Small reusable UI pieces
│   │   └── organisms/      # Larger composed sections
│   ├── assets/             # Images, fonts, etc.
│   ├── constants/          # Data (e.g. work experience, technologies)
│   └── utils/              # Helpers
├── public/                 # Static files (favicon, etc.)
└── .github/workflows/      # GitHub Actions (if used)
```

---

## Configuration

- **Static export** is enabled in `next.config.js` so the site can be hosted on GitHub Pages.
- **Trailing slashes** are enabled for compatibility.
- A **`.nojekyll`** file is used so GitHub Pages doesn’t run Jekyll on the output.

---

## License

This project is personal and private, repository is made public for code viewing.
