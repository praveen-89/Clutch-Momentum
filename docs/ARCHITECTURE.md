# Frontend Architecture - Clutch Momentum

This document outlines the high-level technical architecture and organizational patterns used in the Clutch Momentum frontend.

## 1. Core Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **State Management**: Zustand (Context-free, persistent)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

## 2. Directory Structure

The project follows a scalable, modular folder structure:

```
/frontend
├── app/                  # App Router: Pages, layouts, and route groups
│   ├── (marketing)/      # Public site routes
│   ├── (auth)/           # Creator authentication
│   ├── (creator)/        # Protected creator panel
│   ├── (admin)/          # Protected admin panel
│   └── admin-login/      # Separate isolated admin auth
├── components/           # Reusable UI components
│   ├── ui/               # Base primitives (Buttons, Inputs, etc.)
│   ├── shared/           # Cross-panel layout components
│   ├── marketing/        # Landing page specific components
│   └── dashboard/        # Creator/Admin panel specific components
├── features/             # Business logic modules (e.g. contact-unlock)
├── services/             # API/Mock service layer
├── store/                # Global state (Auth, UI Preferences)
├── types/                # Global TypeScript interfaces
├── data/mock/            # Realistic datasets for the demo
└── docs/                 # Project documentation
```

## 3. State Management Strategy

We use **Zustand** for lightweight and performant state management.
- `useAuthStore`: Manages user session, role, and credit state.
- **Persistence**: Using Zustand's `persist` middleware to ensure sessions survive page reloads (simulating a real session/JWT).

## 4. Design Language: Glassmorphism

The platform uses a **high-end SaaS aesthetic** defined by:
- **Frosted Panels**: Using `backdrop-blur-xl` and semi-transparent backgrounds.
- **Micro-animations**: Subtle Framer Motion transitions for entry and interaction.
- **Typography**: Inter (Sans-serif) for professional high-trust feel.
- **Color Transitions**: Smooth transitions between Dark and Light themes.

## 5. Security & Access Control

Role-based access is implemented on the frontend via:
- **Route Grouping**: Physical separation of Creator (`/creator`) and Admin (`/admin`) routes.
- **Frontend Guards**: `layout.tsx` wrappers perform session and role checks, redirecting unauthorized users to their respective login portals.
- **Isolated Admin Auth**: The admin login is decoupled from the main app auth to ensure internal tools remain distinct from user-facing pages.
