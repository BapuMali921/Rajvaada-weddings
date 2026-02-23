# Rajvaada Wedding Planner

## Overview

Rajvaada is a luxury wedding planning website inspired by Rajasthani royal heritage. It's a single-page marketing site with a contact form that saves inquiries to a PostgreSQL database. The site features a hero section, about/services/portfolio sections, and a contact form — all styled with a cream/ivory and deep maroon luxury aesthetic using Playfair Display and DM Sans fonts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight router) — currently only has a Home page and 404
- **Styling**: Tailwind CSS with shadcn/ui component library (new-york style). Custom luxury theme with CSS variables for ivory/cream backgrounds, deep maroon primary colors, and gold accents
- **Animations**: Framer Motion for scroll reveals and page animations
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **Data Fetching**: TanStack React Query with a custom `apiRequest` helper
- **Icons**: Lucide React
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (run via `tsx`)
- **API Pattern**: Single REST endpoint at `POST /api/contact` for contact form submissions
- **Route Definitions**: Shared route definitions in `shared/routes.ts` with Zod schemas for input validation and response types — used by both client and server
- **Dev Server**: Vite dev server is integrated as middleware in development; static files served in production from `dist/public`
- **Build**: Custom build script using esbuild for server and Vite for client, outputs to `dist/`

### Database
- **Database**: PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-Zod conversion
- **Schema Location**: `shared/schema.ts` — single table `contact_messages` with fields: id, name, email, weddingLocation, budget, message, createdAt
- **Migrations**: Drizzle Kit with `db:push` command for schema sync
- **Connection**: `pg` Pool in `server/db.ts`

### Storage Layer
- `server/storage.ts` defines an `IStorage` interface and `DatabaseStorage` implementation
- This abstraction allows swapping storage backends if needed

### Shared Code
- `shared/schema.ts` — database schema and Zod validation types
- `shared/routes.ts` — API route definitions with paths, methods, input/output schemas
- Both frontend and backend import from shared, ensuring type safety across the stack

## External Dependencies

- **PostgreSQL**: Required. Connection via `DATABASE_URL` environment variable. Uses `connect-pg-simple` for session storage capability (though sessions aren't currently used)
- **Google Fonts**: Playfair Display and DM Sans loaded via CSS import
- **Unsplash**: Hero and portfolio images sourced from Unsplash CDN URLs
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, and `@replit/vite-plugin-dev-banner` used in development on Replit