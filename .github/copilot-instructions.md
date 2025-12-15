# AI Coding Agent Instructions for Taller Cardonal Website

## Project Overview
This is a React single-page application (SPA) for a mechanic workshop website, built with Vite. It features a homepage with scrollable sections, service details, and a contact form. Deployed on Vercel with SEO optimizations.

## Architecture
- **Routing**: React Router with nested routes. `MainLayout` wraps all pages, conditionally rendering `HeroSection` on home.
- **Data Layer**: Services data stored in `src/utils/servicesData.js` as a static array of objects.
- **Components**: Organized by feature (home/, ui/, layout/). Each component has its own CSS file.
- **State Management**: Local component state only; no global state library.
- **SEO**: Uses `react-helmet-async` for meta tags and custom `StructuredData` component for JSON-LD.

## Key Patterns
- **Service Cards**: Map over `SERVICES` array in `ServicesSection`, link to `/servicios/{id}` using `Link` from React Router.
- **Icons**: Import from `react-icons/fa6` or `react-icons/md`, render as `<Icon />` components.
- **Forms**: EmailJS integration via `@emailjs/browser`. Config in `src/config/emailjsConfig.js` using Vite env vars (`VITE_EMAILJS_*`).
- **Section Observation**: Custom `useSectionObserver` hook uses `IntersectionObserver` for navbar highlighting.
- **Styling**: CSS classes with custom properties (e.g., `--service-color` for dynamic colors).

## Workflows
- **Development**: `npm run dev` starts Vite dev server.
- **Build**: `npm run build` creates production bundle.
- **Linting**: `npm run lint` runs ESLint with flat config.
- **Deployment**: Automatic on Vercel pushes to main branch.
- **Email Setup**: Create `.env` with EmailJS credentials; form sends via `emailjs.send()`.

## Conventions
- **File Structure**: Components in folders with `Component.jsx` and `Component.css`.
- **Imports**: Use `@/` alias for `src/` (configured in `vite.config.js`).
- **Environment**: Vite env vars prefixed with `VITE_`.
- **SEO**: Add `SEO` and `StructuredData` components to pages.
- **Analytics**: `Analytics` component wraps the app for Google Analytics 4.
- **Error Handling**: Basic form validation; no global error boundaries.

## Dependencies
- **Core**: React 19, React Router DOM.
- **External**: EmailJS for forms, React GA4 for analytics, React Helmet Async for SEO.
- **Dev**: ESLint with React plugins, Prettier for formatting.

## Examples
- Adding a service: Update `SERVICES` array in `servicesData.js`, include `icon` from react-icons.
- Form submission: Use `emailjs.send()` with service/template IDs from env.
- New page: Add route in `router.jsx`, create in `pages/`, wrap with `SEO` component.

Reference: [README.md](README.md) for setup, [package.json](package.json) for scripts.