# Backend Integration Roadmap

Clutch Momentum is designed as a "Frontend-Ready" application, meaning the service layer is already abstracted to allow for a direct swap from mock data to real API endpoints.

## 1. Expected API Contracts

### Authentication (`/api/auth`)
- `POST /register`: Payload `{ name, email, password }`. Returns User object.
- `POST /login`: Payload `{ email, password }`. Returns User object + JWT.
- `GET /me`: Header `Authorization: Bearer <token>`. Returns current session user.

### Contacts (`/api/contacts`)
- `GET /contacts`: Fetch filterable list of brand contacts.
- `POST /contacts/:id/unlock`: Logic: Checks user credits, decrements by 1, adds to `unlocked_contacts` table, returns full contact details.

### Subscriptions (`/api/billing`)
- `GET /subscription`: Returns current plan and credit balance.
- `POST /checkout`: Initiates Stripe session.
- `POST /webhook`: Listens for successful payments to update plan/credits.

### Admin (`/api/admin`)
- `GET /admin/stats`: Aggregate analytical data.
- `POST /admin/contacts`: CRUD for contact database.
- `PATCH /admin/leads/:id`: Update status of exclusive lead requests.

## 2. Recommended Data Schema (Supabase)

If using Supabase, the following tables are recommended:
- **`profiles`**: `id, name, avatar_url, bio, niche, social_links (jsonb)`
- **`contacts`**: `id, company_name, industry, location, contact_name, designation, email, phone, type`
- **`unlocked_contacts`**: `user_id, contact_id, unlocked_at`
- **`subscriptions`**: `user_id, plan_id, credits_remaining, current_period_end`
- **`exclusive_requests`**: `id, user_id, lead_id, message, status`

## 3. Storage Layer

- **Avatars/Media**: Should be stored in Supabase Storage or AWS S3.
- **Frontend URL**: Publicly accessible URL for the Express API to talk to.

## 4. Environment Variables

The frontend expects these variables once integrated:
```bash
NEXT_PUBLIC_API_URL=https://api.clutchmomentum.com/v1
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
```
