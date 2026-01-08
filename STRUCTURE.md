# Petlytic Frontend - Project Structure Guide

## Overview

The project has been refactored into a modular, scalable architecture following Next.js and React best practices.

## Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth route group
│   │   ├── login/
│   │   ├── register/
│   │   └── layout.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/                   # React Components
│   ├── common/                   # Shared components (Header, Footer, etc.)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── ...other common components
│   │
│   ├── features/                 # Feature-specific components
│   │   ├── Products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductList.tsx
│   │   │   └── ProductFilters.tsx
│   │   ├── Cart/
│   │   │   ├── CartSummary.tsx
│   │   │   └── CartItem.tsx
│   │   └── Dashboard/
│   │       ├── Analytics.tsx
│   │       └── StatCard.tsx
│   │
│   ├── providers/                # Context & Provider components
│   │   ├── AuthProvider.tsx
│   │   └── ThemeProvider.tsx
│   │
│   └── ui/                       # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── modal.tsx
│       ├── input.tsx
│       └── ...other UI components
│
├── hooks/                        # Custom React Hooks
│   ├── useAuth.ts               # Authentication hook
│   ├── useLocalStorage.ts       # localStorage hook
│   ├── useFetch.ts              # Data fetching hook
│   ├── useDebounce.ts           # Debounce hook
│   └── useWindowSize.ts         # Window resize hook
│
├── lib/                          # Utility functions & configuration
│   ├── api/                      # API client & endpoints
│   │   ├── client.ts            # Axios/fetch client setup
│   │   ├── endpoints.ts         # API endpoint constants
│   │   └── interceptors.ts      # Request/response interceptors
│   │
│   ├── utils/                    # Utility functions
│   │   ├── formatters.ts        # Date, currency, string formatting
│   │   ├── validators.ts        # Input validation functions
│   │   ├── helpers.ts           # General helper functions
│   │   └── constants.ts         # Application constants
│   │
│   └── config/                   # Configuration
│       └── environment.ts        # Environment variables
│
├── store/                        # State Management (Redux)
│   ├── slices/                   # Redux slices
│   │   ├── authSlice.ts
│   │   ├── productsSlice.ts
│   │   └── cartSlice.ts
│   ├── index.ts                 # Store configuration
│   └── hooks.ts                 # Redux hooks (useAppDispatch, useAppSelector)
│
├── types/                        # TypeScript type definitions
│   ├── api.types.ts             # API response/request types
│   ├── common.types.ts          # Shared types
│   └── domain.types.ts          # Domain-specific types
│
├── styles/                       # Global styles
│   ├── fonts.css
│   ├── index.css
│   ├── tailwind.css
│   └── theme.css
│
├── assets/                       # Static assets (images, etc.)
│
└── middleware.ts                # Next.js middleware
```

## Additional Directories

```
public/                           # Static files
├── assets/
│   ├── icons/
│   ├── images/
│   └── svgs/
└── robots.txt

tests/                            # Test files
├── unit/                         # Unit tests
│   ├── hooks/
│   ├── utils/
│   └── lib/
├── integration/                  # Integration tests
│   ├── api.test.ts
│   └── auth.test.ts
└── e2e/                          # End-to-end tests
    ├── checkout.spec.ts
    └── user-flow.spec.ts

.github/                          # GitHub configuration
└── workflows/                    # GitHub Actions workflows
    ├── ci.yml                    # CI/CD pipeline
    ├── deploy.yml                # Deployment workflow
    └── lighthouse.yml            # Performance audit

docs/                             # Documentation
├── API.md                        # API documentation
├── ARCHITECTURE.md               # Architecture guide
├── SETUP.md                      # Setup instructions
└── CONTRIBUTING.md               # Contribution guidelines
```

## File Organization Guide

### Components

- **common/** - Layout and structural components used across pages (Header, Footer, Navigation)
- **features/** - Feature-specific component groups (Product catalog, Shopping cart, Dashboard)
- **providers/** - Context providers and wrappers for authentication, theming, etc.
- **ui/** - Atomic/primitive UI components (buttons, inputs, modals, cards)

### Hooks

- Custom React hooks for reusable logic
- One hook per file for better tree-shaking
- Prefix with `use` (React convention)

### Lib

- **api/** - API client configuration and endpoints
- **utils/** - Helper and utility functions
- **config/** - Application configuration and environment variables

### Store

- Redux store setup and slices
- Redux hooks for typed usage

### Types

- TypeScript type definitions organized by domain
- Keep types close to where they're used when possible

## Import Paths

### Recommended Imports

```typescript
// Components
import { Header } from "@/components/common/Header";
import { ProductCard } from "@/components/features/Products/ProductCard";
import { Button } from "@/components/ui/button";

// Hooks
import { useAuth } from "@/hooks/useAuth";

// Utilities
import { cn } from "@/lib/utils/formatters";
import { ENDPOINTS } from "@/lib/api/endpoints";

// Types
import { User } from "@/types/common.types";

// Store
import { useAppDispatch, useAppSelector } from "@/store/hooks";
```

## Best Practices

1. **Component Organization**

   - Keep components small and focused
   - Co-locate related components
   - Use feature folders for scalability

2. **Type Safety**

   - Define types in `src/types/`
   - Use TypeScript for all new files
   - Avoid `any` type when possible

3. **API Integration**

   - Use API client from `lib/api/client`
   - Define endpoints in `lib/api/endpoints`
   - Keep API logic separate from components

4. **State Management**

   - Use Redux for global state
   - Use React hooks for local component state
   - Create slices for feature domains

5. **Testing**

   - Write unit tests in `tests/unit/`
   - Write integration tests in `tests/integration/`
   - Write E2E tests in `tests/e2e/`

6. **Code Quality**
   - Follow ESLint configuration
   - Format code with Prettier
   - Keep imports organized

## Next Steps

1. Update import paths in existing components to match new structure
2. Implement Redux store slices
3. Add environment configuration
4. Set up API client with interceptors
5. Write tests for each module

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [React Hooks API](https://react.dev/reference/react)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
