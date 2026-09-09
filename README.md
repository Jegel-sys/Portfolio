# Jegel Cabuso — Portfolio

Personal portfolio website of **Jegel Cabuso**, a Full-Stack Web Developer. Built with React, TypeScript, and Tailwind CSS.

## Sections

- **Hero** — intro, tagline, and floating tech badges
- **About** — bio, key highlights, and career stats
- **Skills** — database, backend/frontend, tools & workflows, professional skills
- **Featured Project** — spotlight on the flagship project
- **Projects** — filterable project grid with a screenshot gallery modal
- **Experience** — work history timeline
- **Services** — services offered
- **Contact** — contact form (powered by [Web3Forms](https://web3forms.com))

## Tech Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev) — build tool & dev server
- [Tailwind CSS 4](https://tailwindcss.com) — styling
- [Lucide React](https://lucide.dev) — icons
- [Motion](https://motion.dev) — animations

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```
   npm install
   ```
2. Start the dev server:
   ```
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Type-check the project (`tsc --noEmit`) |
| `npm run clean` | Remove the `dist/` build output |

## Project Structure

```
src/
  assets/         Images and project screenshots
  components/     Page sections (Hero, About, Skills, Projects, ...)
  data/           Portfolio content (portfolioData.ts)
  types.ts        Shared TypeScript types
```

All portfolio content (projects, skills, experience, services, links) lives in [`src/data/portfolioData.ts`](src/data/portfolioData.ts) — edit that file to update the site's content.
