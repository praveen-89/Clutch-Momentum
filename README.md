# Clutch Momentum - Creator-First SaaS Marketplace

Clutch Momentum is a production-grade, premium SaaS platform dedicated to connecting creators directly with verified brand decision-makers.

## 🚀 Overview

The project provides a unified marketplace where creators can discover brand contacts, unlock them using a plan-based credit system, and request access to exclusive high-value leads. It features two distinct panels: a premium, aspirational **Creator Dashboard** and a powerful, operational **Admin Console**.

## 🛠 Tech Stack

- **Next.js 14+**: App Router & Server Components.
- **TypeScript**: Strict type-safety across the board.
- **Tailwind CSS v4**: Modern styling with a custom glassmorphism theme.
- **Framer Motion**: Premium animations and layout transitions.
- **Zustand**: Lightweight, persistent store for auth and global state.
- **React Hook Form + Zod**: Robust form management and validation.
- **Lucide React**: Vector icons for a clean aesthetic.

## 📂 Project Structure

```
/frontend
├── app/                  # Application routes (Route Groups: marketing, auth, creator, admin)
├── components/           # Reusable UI system (ui, shared, marketing, dashboard)
├── features/             # Core business logic modules
├── services/             # Mock services layer for future API integration
├── store/                # Persistent Zustand state
├── data/mock/            # Realistic demonstration datasets
└── docs/                 # Detailed technical documentation
```

## 🔑 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| **Creator** | `creator@clutchmomentum.com` | `Creator@123` |
| **Admin** | `admin@clutchmomentum.com` | `Admin@123` |

## 🧭 Routes

- **Public**: Home, About, Pricing, How It Works, Contact.
- **Auth**: `/login`, `/register`, `/admin-login`.
- **Creator**: `/dashboard`, `/brand-contacts`, `/exclusive-leads`, `/usage`, `/profile`.
- **Admin**: `/admin/dashboard`, `/admin/manage-contacts`, `/admin/manage-users`.

## 📦 Getting Started

```bash
cd frontend
npm install
npm run dev
```

## 📄 Documentation

For deep dives into the system, refer to the `/frontend/docs` directory:
- [Architecture](./docs/ARCHITECTURE.md)
- [Design System](./docs/DESIGN-SYSTEM.md)
- [Route Map](./docs/ROUTES.md)
- [Mock Auth Flow](./docs/MOCK-AUTH.md)
- [Backend Integration](./docs/BACKEND-INTEGRATION.md)

## 🔮 Future Roadmap

- **JWT Integration**: Swap the mock service layer with a real Express/Node.js backend.
- **Database**: Connect to Supabase for persistent cloud storage.
- **Payments**: Integrate real Stripe checkout flows on the `/usage` page.
- **Analytics**: Connect the admin dashboard to live DB metrics.
