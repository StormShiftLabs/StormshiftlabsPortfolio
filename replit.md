# StormShift Labs Portfolio Website

## Overview

This is a modern, dark-themed portfolio website for StormShift Labs, the developer brand of Justin Madanayake. The site showcases a collection of projects ranging from client websites to iOS apps and React applications, built with a futuristic design featuring smooth animations, scroll-triggered effects, and a comprehensive contact system.

The application is a full-stack solution with a React frontend and Express backend, designed to present technical projects and career milestones in an engaging, interactive format. The site includes sections for hero introduction, about story, project portfolio, timeline visualization, and contact functionality with email integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

**Frontend Architecture**
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom CSS variables for theming and Shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Components**: Radix UI primitives with custom styling via class-variance-authority
- **Animations**: CSS-based animations with intersection observer hooks for scroll-triggered effects
- **Typography**: Custom font setup with Orbitron for headings and Inter for body text

**Backend Architecture**
- **Framework**: Express.js with TypeScript
- **Email Service**: Nodemailer integration for contact form submissions
- **Development**: Vite middleware integration for hot module replacement
- **Request Handling**: JSON and URL-encoded request parsing with logging middleware
- **Error Handling**: Centralized error handling middleware

**Data Layer**
- **Database**: PostgreSQL with Drizzle ORM configured (schema defined but minimal usage)
- **Connection**: Neon Database serverless connection
- **Migrations**: Drizzle Kit for database schema management
- **Storage**: In-memory storage implementation as fallback with user CRUD interface

**Styling and Design System**
- **Theme**: Dark-themed with neon cyan and electric purple color scheme
- **Component Library**: Shadcn/ui with custom modifications for the futuristic aesthetic
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animation Strategy**: Intersection Observer API for performance-optimized scroll animations

**Development and Build**
- **Monorepo Structure**: Client and server code in separate directories with shared schema
- **Build Process**: Vite for frontend, ESBuild for backend bundling
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Hot Reloading**: Vite development server with Express middleware integration

## External Dependencies

**Core Framework Dependencies**
- React 18 with TypeScript for component architecture
- Express.js for server-side API handling
- Wouter for lightweight client-side routing
- Vite for development server and build tooling

**Database and ORM**
- Drizzle ORM for type-safe database operations
- Neon Database serverless PostgreSQL hosting
- Drizzle Kit for schema migrations and management

**UI and Styling**
- Tailwind CSS for utility-first styling
- Radix UI for accessible component primitives
- Shadcn/ui for pre-built component library
- class-variance-authority for component variant management
- Lucide React for consistent iconography

**Data Fetching and State**
- TanStack React Query for server state management and caching
- React Hook Form with Zod resolvers for form validation
- Date-fns for date manipulation and formatting

**Email and Communication**
- Nodemailer for transactional email sending
- SMTP configuration for email delivery
- Zod for runtime validation of contact form data

**Development Tools**
- PostCSS with Autoprefixer for CSS processing
- ESLint and Prettier for code quality (implied by structure)
- Replit-specific plugins for development environment integration

**Authentication and Session (Configured but Unused)**
- PostgreSQL session store with connect-pg-simple
- User schema defined in shared directory for future authentication features