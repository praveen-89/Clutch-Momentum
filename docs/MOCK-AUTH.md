# Mock Authentication - Clutch Momentum

This project uses a frontend-only mocked authentication system built with **Zustand** and persistent storage.

## Demo Credentials

These credentials can be used to bypass the auth wall and access the respective panels:

### Creator Demo
- **Email**: `creator@clutchmomentum.com`
- **Password**: `Creator@123`
- **Role**: Creator
- **Simulated Plan**: Starter (20 Credits)

### Admin Demo
- **Email**: `admin@clutchmomentum.com`
- **Password**: `Admin@123`
- **Role**: Admin
- **Simulated Plan**: System Master

---

## How It Works

1. **Submission**: When the login form is submitted, the `useAuthStore.login()` function is called.
2. **Delay**: A `1000ms` delay is simulated to mirror real-world API latency.
3. **Check**: The email and password are checked against the hardcoded constants in `store/useAuthStore.ts`.
4. **Session Persistence**: If successful, the user object is saved into `localStorage` via Zustand's persist middleware.
5. **Route Guards**: On every subsequent page load (or route change), the layout's `useEffect` checks the auth store. If the session or role is invalid, an immediate redirect to `/login` or `/admin-login` is triggered.

## Transitioning to Real Auth (JWT)

To replace this with a real Node.js/Express + JWT backend:
1. Update `store/useAuthStore.ts` to call a real fetch/axios endpoint instead of checking hardcoded strings.
2. Store the JWT token returned by the backend in the store.
3. Add a global interceptor to attach the `Authorization: Bearer <token>` header to all service requests.
4. Update the `logout()` function to clear the token from storage.
