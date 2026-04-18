# Component Inventory - Clutch Momentum

This document lists the primary reusable UI components and patterns established during the frontend implementation.

## 1. UI Primitives (`/components/ui`)

### `GlassCard`
- **Purpose**: Core aesthetic container.
- **Props**: `children`, `className`, `variant: "glass" | "frosted" | "solid"`.

### `CapsuleButton`
- **Purpose**: Pill-shaped action button with motion.
- **Props**: `variant: "primary" | "secondary" | "outline" | "ghost"`, `size: "sm" | "md" | "lg"`.

### `PremiumInput`
- **Purpose**: High-end form field with glass styling and focus animations.
- **Props**: `label`, `error`, `register` (from hook-form).

### `StatsWidget`
- **Purpose**: Display dashboard metrics.
- **Props**: `label`, `value`, `trend`, `icon`.

### `UpgradeModal`
- **Purpose**: Standardized upsell and credit-restriction prompt.

---

## 2. Global Layouts (`app/(group)/layout.tsx`)

### `MarketingLayout`
- **Includes**: `Navbar`, `Footer`.
- **Aesthetic**: Light transparent transitions.

### `CreatorLayout`
- **Includes**: `Sidebar`, `Topbar`.
- **Logic**: Persistent session checks + Credit Display.

### `AdminLayout`
- **Includes**: `AdminSidebar`.
- **Aesthetic**: Data-rich, operational dark theme.

---

## 3. Specialized Business Components

### `Hero` (`/components/marketing/hero.tsx`)
Conversion-centric hero with interactive preview card.

### `ContactCard` (`/components/dashboard/contact-card.tsx`)
Complex component handling the **Masking Logic**, **Unlock Flow**, and **Exclusive Lead** badges.

### `Sidebar` / `AdminSidebar`
Role-specific navigation assemblies.
