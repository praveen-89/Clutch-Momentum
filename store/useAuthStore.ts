import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'creator' | 'admin' | null;

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  plan?: 'free' | 'starter' | 'growth' | 'premium';
  credits?: number;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
}

const DEMO_CREATOR: User = {
  id: 'creator-1',
  email: 'creator@clutchmomentum.com',
  name: 'Demo Creator',
  role: 'creator',
  plan: 'starter',
  credits: 20,
};

const DEMO_ADMIN: User = {
  id: 'admin-1',
  email: 'admin@clutchmomentum.com',
  name: 'System Admin',
  role: 'admin',
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      login: async (email, password, role) => {
        set({ isLoading: true });
        
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (role === 'creator') {
          if (email === 'creator@clutchmomentum.com' && password === 'Creator@123') {
            set({ user: DEMO_CREATOR, isAuthenticated: true, isLoading: false });
            return true;
          }
        } else if (role === 'admin') {
          if (email === 'admin@clutchmomentum.com' && password === 'Admin@123') {
            set({ user: DEMO_ADMIN, isAuthenticated: true, isLoading: false });
            return true;
          }
        }

        set({ isLoading: false });
        return false;
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'clutch-auth-storage',
    }
  )
);
