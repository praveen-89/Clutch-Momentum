"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PremiumInput } from "@/components/ui/premium-input";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { LogIn, Info, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { login, isLoading } = useAuthStore();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      setError("Invalid credentials. Please attempt authentication again.");
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-3 text-center">
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="inline-flex p-3 rounded-2xl bg-orange-500/10 text-orange-500 mb-2 border border-orange-500/20 shadow-inner"
        >
            <ShieldCheck size={28} />
        </motion.div>
        <h1 className="text-3xl font-black uppercase italic tracking-tighter text-slate-100 leading-none">Welcome <span className="text-orange-500">Back</span></h1>
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
          Sign in to your account
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <PremiumInput
          label="Email Address"
          placeholder="creator@clutchmomentum.com"
          {...register("email")}
          error={errors.email?.message}
          className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-orange-500/50"
        />
        <PremiumInput
          label="Password"
          type="password"
          placeholder="••••••••"
          {...register("password")}
          error={errors.password?.message}
          className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-orange-500/50"
        />

        {error && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-widest flex items-center justify-center shadow-inner">
            {error}
          </div>
        )}

        <div className="pt-4">
          <CapsuleButton className="w-full bg-orange-600 hover:bg-orange-700 text-white border-none py-6 shadow-xl shadow-orange-600/20 active:scale-95 transition-all text-[11px] font-black uppercase tracking-[0.2em] italic" type="submit" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </CapsuleButton>
        </div>
      </form>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-inner">
        <div className="flex items-center gap-3 text-orange-500">
          <Info size={16} />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Demo Credentials</span>
        </div>
        <div className="text-[10px] text-slate-400 space-y-2 font-bold uppercase tracking-widest">
          <p className="flex justify-between items-center bg-slate-950 p-2 rounded-lg">Email: <span className="text-orange-400 normal-case tracking-normal">creator@clutchmomentum.com</span></p>
          <p className="flex justify-between items-center bg-slate-950 p-2 rounded-lg">Password: <span className="text-orange-400 normal-case tracking-normal">Creator@123</span></p>
        </div>
      </div>

      <div className="text-center space-y-5 pt-8 border-t border-slate-800">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          Don't have an account?{" "}
          <Link href="/register" className="text-orange-500 hover:text-orange-400 transition-colors">
            Join as Creator
          </Link>
        </p>
        <p className="text-[9px] font-black uppercase tracking-widest">
          <Link href="/forgot-password" className="text-slate-600 hover:text-slate-400 transition-colors">
            Forgot your password?
          </Link>
        </p>
      </div>
    </div>
  );
}
