# Design System - Clutch Momentum

Clutch Momentum uses a premium, high-trust design system built on **Glassmorphism** and a tailored Dark/Light theme logic.

## 1. Color Palette

| Name | Role | HEX/HSL Example |
|------|------|-----------------|
| **Primary** | Action & Unlocks | `#2563eb` (Blue) |
| **Secondary** | Exclusive Leads | `#c026d3` (Purple) |
| **Success** | Unlocked States | `#10b981` (Emerald) |
| **Background** | Core Canvas | `#0f172a` (Dark) / `#f8fafc` (Light) |

## 2. Typography

- **Font Family**: `Inter, sans-serif`
- **Scale**:
  - `h1`: 4.5rem (Heavy, tracking-tight)
  - `h2`: 3rem (Bold)
  - `h3`: 1.5rem (Semibold)
  - `body`: 1rem (Regular, high-readability line-height)
  - `label`: 0.75rem (Bold, uppercase, tracking-widest)

## 3. Glassmorphism Rules

Our "Premium Glass" effect is achieved via:
- **Backdrop Blur**: `backdrop-blur-xl` (16px to 24px)
- **Transparency**: Background opacity between `40%` and `70%`.
- **Border**: `1px` solid border with highly reduced opacity (`rgba(255, 255, 255, 0.1)`).
- **Shadow**: Deep, soft multi-layered shadows to give depth without harshness.

## 4. Components Primitives

### `GlassCard`
The core container for the entire app. Comes in three variants:
- `glass`: Standard blur.
- `frosted`: Increased blur and light reflection for high-importance items.
- `solid`: Used for internal data tables in the Admin panel.

### `CapsuleButton`
Pill-shaped buttons with significant horizontal padding. Hover states include **Subtle Glow** effects centered on the dominant color (Blue for primary, Purple for exclusive).

### `PremiumInput`
Inputs use the same glass theme with a "Focus Ring" depth effect that expands the border shadow slightly on interaction.

## 5. Animation Principles

- **Entrance**: `Slide-in-bottom` for pages, `Fade-in-scale` for cards.
- **Micro-interact**: `1.02x` scale on button hover.
- **Scroll**: Transparent-to-Glass transition on the main Navbar.
- **Transitions**: Global `duration-300` for all color and transform changes.
