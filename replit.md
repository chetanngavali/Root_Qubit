# Spacehuhn Technologies Portfolio

## Overview

A portfolio and showcase website for Spacehuhn Technologies, featuring open-source hacking tools and security projects. The application displays hardware/software projects, blog posts, and company information with a modern, tech-focused design aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth page transitions
- **Build Tool**: Vite with custom plugins for Replit integration

The frontend follows a component-based architecture with:
- Shared UI components in `client/src/components/ui/` (shadcn/ui)
- Custom components like Navbar, Footer, ProjectCard in `client/src/components/`
- Page components in `client/src/pages/`
- Custom hooks in `client/src/hooks/` for data fetching and utilities

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **API Design**: RESTful endpoints defined in `shared/routes.ts`
- **Storage Pattern**: Repository pattern via `server/storage.ts`

The backend uses a simple layered architecture:
- Routes registered in `server/routes.ts`
- Database operations abstracted through `DatabaseStorage` class
- Shared schema and route definitions between frontend and backend

### Data Models
Two primary entities defined in `shared/schema.ts`:
- **Projects**: id, title, description, category, imageUrl, linkUrl, features
- **BlogPosts**: id, title, content, excerpt, imageUrl, publishedAt

### API Structure
- `GET /api/projects` - List all projects
- `GET /api/projects/:id` - Get single project
- `GET /api/blog` - List all blog posts
- `GET /api/blog/:id` - Get single blog post

### Development vs Production
- Development: Vite dev server with HMR via `server/vite.ts`
- Production: Static file serving via `server/static.ts`, built with esbuild

## External Dependencies

### Database
- **PostgreSQL**: Primary database via `DATABASE_URL` environment variable
- **Drizzle ORM**: Schema management and migrations in `migrations/` directory
- **connect-pg-simple**: Session storage (configured but sessions not currently used)

### Third-Party Services
- **Google Fonts**: Inter and Space Mono typefaces
- **External Links**: GitHub (spacehuhntech), Blog (blog.spacehuhn.com), Docs (docs.spacehuhn.com), Store (spacehuhn.store)

### Key NPM Packages
- Radix UI primitives for accessible components
- Zod for schema validation
- date-fns for date formatting
- Lucide React for icons