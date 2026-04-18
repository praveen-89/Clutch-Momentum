# Setup & Development Guide

Follow these steps to get the Clutch Momentum frontend running locally.

## 1. Prerequisites

- **Node.js**: v18 or later
- **npm**: v9 or later (recommended)

## 2. Installation

Clone or enter the project directory and install dependencies:

```bash
cd frontend
npm install
```

## 3. Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## 4. Development Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Validates TypeScript, Linting, and builds the production bundle.
- `npm run lint`: Runs ESLint for code quality checks.

## 5. Environment Configuration

For now, the project runs entirely on mocked data. No `.env` file is strictly required to start, but for future backend integration, you can create a `.env.local` file:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 6. Accessing the Panels

Once the server is running, use these credentials to explore:

- **Creator Portal**: Navigate to `/login`
- **Admin Console**: Navigate to `/admin-login`

Refer to [MOCK-AUTH.md](./MOCK-AUTH.md) for demo credentials.
