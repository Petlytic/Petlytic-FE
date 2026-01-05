# Architecture Documentation

## Project Structure

The project follows a modular architecture with clear separation of concerns.

### Directory Structure

- `src/app/` - Next.js app directory and routes
- `src/components/` - React components organized by type
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions, API client, and configuration
- `src/store/` - State management (Redux)
- `src/types/` - TypeScript type definitions
- `src/styles/` - Global styles and CSS
- `tests/` - Unit, integration, and E2E tests

## Component Organization

- `components/common/` - Shared components (Header, Footer, etc.)
- `components/features/` - Feature-specific components
- `components/providers/` - Context and provider components
- `components/ui/` - Reusable UI components
