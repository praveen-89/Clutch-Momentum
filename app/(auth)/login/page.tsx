"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PremiumInput } from "@/components/ui/premium-input";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { LogIn, Info } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { login, isLoading } = useAuthStore();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setError(null);
    const success = await login(data.email, data.password, "creator");
    
    if (success) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
        <p className="text-sm text-foreground/50">
          Sign in to access your brand contacts and credits.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <PremiumInput
          label="Email Address"
          placeholder="name@example.com"
          {...register("email")}
          error={errors.email?.message}
        />
        <PremiumInput
          label="Password"
          type="password"
          placeholder="••••••••"
          {...register("password")}
          error={errors.password?.message}
        />

        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium">
            {error}
          </div>
        )}

        <div className="pt-2">
          <CapsuleButton className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </CapsuleButton>
        </div>
      </form>

      <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 space-y-2">
        <div className="flex items-center gap-2 text-primary">
          <Info size={14} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Demo Credentials</span>
        </div>
        <div className="text-xs text-foreground/60 space-y-1">
          <p>Email: <code className="bg-primary/10 px-1 rounded">creator@clutchmomentum.com</code></p>
          <p>Pass: <code className="bg-primary/10 px-1 rounded">Creator@123</code></p>
        </div>
      </div>

      <div className="text-center space-y-4 pt-4 border-t border-white/5">
        <p className="text-sm text-foreground/50">
          Don't have an account?{" "}
          <Link href="/register" className="text-primary font-bold hover:underline">
            Join as Creator
          </Link>
        </p>
        <p className="text-xs">
          <Link href="/forgot-password text-foreground/30 hover:text-foreground/60">
            Forgot your password?
          </Link>
        </p>
      </div>
    </div>
  );
}
