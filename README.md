# Angular 20 Portfolio (Standalone + Lazy Loading)

A modern, standalone-first Angular portfolio with feature-based routing, lazy-loaded routes, and local JSON data.

## Tech Highlights
- Angular 20 standalone app (no AppModule)
- Feature-based folder structure (`core / shared / features`)
- Lazy-loaded routes via `loadChildren` / `loadComponent`
- Router preloading enabled for smooth navigation
- Local JSON data (`src/assets/data/portfolio.json`) as mock API
- Modern template control flow (`@if`, `@for`) instead of `*ngIf/*ngFor`

## Getting Started

> Prerequisites: Node.js 20+ recommended.

```bash
npm install
npm start
```

Open: http://localhost:4200

## Customize Your Content
- Update your content here: `src/assets/data/portfolio.json`
- Replace the profile photo: `src/assets/images/profile-placeholder.png`

## Build

```bash
npm run build
```

## Notes
- This project uses router lazy loading best practices (component/route-based splitting). See Angular docs: lazy-loaded routes.
