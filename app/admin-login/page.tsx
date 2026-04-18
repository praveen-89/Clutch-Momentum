"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PremiumInput } from "@/components/ui/premium-input";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ShieldCheck, Lock, AlertTriangle } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const loginSchema = z.object({
  email: z.string().email("Invalid admin email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
  const { login, isLoading } = useAuthStore();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: LoginForm) => {
    setError(null);
    const success = await login(data.email, data.password, "admin");
    
    if (success) {
      router.push("/admin/dashboard");
    } else {
      setError("Unauthorized access. Admin credentials required.");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 p-6">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="w-full max-w-md relative z-10 space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter text-white uppercase italic">
            Clutch <span className="text-blue-500">Momentum</span>
          </h1>
          <div className="px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 inline-block">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Admin Access Terminal
            </span>
          </div>
        </div>

        <GlassCard className="p-8 border-slate-800 bg-slate-900/50 backdrop-blur-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <PremiumInput
                label="Internal Admin Email"
                placeholder="admin@clutchmomentum.com"
                className="bg-slate-950 border-slate-800 focus:border-blue-500/50"
                {...register("email")}
                error={errors.email?.message}
              />
              <PremiumInput
                label="Secure Password"
                type="password"
                placeholder="••••••••"
                className="bg-slate-950 border-slate-800 focus:border-blue-500/50"
                {...register("password")}
                error={errors.password?.message}
              />
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400">
                <AlertTriangle size={18} className="flex-shrink-0" />
                <p className="text-xs font-bold leading-tight uppercase">{error}</p>
              </div>
            )}

            <CapsuleButton 
              className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-4 shadow-[0_0_20px_rgba(37,99,235,0.2)]" 
              type="submit" 
              disabled={isLoading}
            >
              {isLoading ? "Authenticating..." : "Establish Secure Session"}
            </CapsuleButton>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-800 flex items-center justify-between opacity-50">
            <div className="flex items-center gap-2">
              <Lock size={12} />
              <span className="text-[10px] font-bold uppercase">256-bit Encrypted</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">
              v2.1.0-STABLE
            </span>
          </div>
        </GlassCard>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 opacity-50 hover:opacity-100 transition-opacity">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
            Debug Overload (Demo Only)
          </p>
          <div className="text-xs text-slate-400 flex justify-between">
            <span>Email: admin@clutchmomentum.com</span>
            <span>Pass: Admin@123</span>
          </div>
        </div>
      </div>
    </div>
  );
}
