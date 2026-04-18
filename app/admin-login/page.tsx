"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { PremiumInput } from "@/components/ui/premium-input";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ShieldCheck, Lock, AlertTriangle, Fingerprint } from "lucide-react";
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 p-6 relative overflow-hidden text-slate-100">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      
      {/* Decorative Orange Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/10 blur-[120px] rounded-full -z-10" />
      
      <div className="w-full max-w-md relative z-10 space-y-8">
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-5 rounded-[2rem] bg-slate-900 border border-slate-800 text-orange-600 shadow-2xl shadow-orange-600/20 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
            <ShieldCheck size={48} className="relative z-10 group-hover:scale-110 transition-transform duration-500" />
          </motion.div>
          
          <div className="space-y-3">
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic leading-none">
              Clutch <span className="text-orange-600 text-glow">Momentum</span>
            </h1>
            <div className="px-5 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 inline-block backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">
                Admin Access
              </span>
            </div>
          </div>
        </div>

        <GlassCard className="p-10 md:p-12 border-slate-800 bg-slate-900/60 backdrop-blur-3xl shadow-2xl shadow-black">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8">
              <PremiumInput
                label="Email Address"
                placeholder="admin@clutchmomentum.com"
                className="bg-slate-950 border-slate-800 focus:border-orange-500/50 text-white placeholder:text-slate-600"
                {...register("email")}
                error={errors.email?.message}
              />
              <PremiumInput
                label="Password"
                type="password"
                placeholder="••••••••"
                className="bg-slate-950 border-slate-800 focus:border-orange-500/50 text-white placeholder:text-slate-600"
                {...register("password")}
                error={errors.password?.message}
              />
            </div>

            {error && (
               <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="p-4 rounded-xl bg-red-950/50 border border-red-900 flex items-center gap-4 text-red-500 shadow-inner"
              >
                <div className="p-2 bg-red-900/30 rounded-lg">
                    <AlertTriangle size={18} className="flex-shrink-0 animate-pulse" />
                </div>
                <p className="text-[10px] font-black leading-tight uppercase tracking-widest">{error}</p>
              </motion.div>
            )}

            <div className="pt-4">
              <CapsuleButton 
                className="w-full h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl shadow-xl shadow-orange-600/30 group transition-all duration-300 border-none active:scale-95" 
                type="submit" 
                disabled={isLoading}
              >
                <span className="flex items-center justify-center gap-3 font-black uppercase italic tracking-[0.2em]">
                  {isLoading ? "Signing In..." : "Sign In"}
                  {!isLoading && <Fingerprint size={20} className="group-hover:scale-125 transition-transform duration-500" /> }
                </span>
              </CapsuleButton>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-slate-800 flex items-center justify-between opacity-50 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <div className="flex items-center gap-2">
              <Lock size={12} className="text-emerald-500" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Connection Secured</span>
            </div>
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
              v2.1.0-STABLE
            </span>
          </div>
        </GlassCard>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
          className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4 backdrop-blur-md transition-all group shadow-inner"
        >
          <div className="flex items-center gap-3 mb-4">
             <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse outline outline-4 outline-orange-500/10" />
             <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">
               Demo Account Details
             </p>
          </div>
          <div className="text-xs text-slate-300 flex flex-col gap-2 font-bold italic">
            <span className="flex justify-between items-center group-hover:bg-slate-800/50 p-2 rounded-lg transition-colors">
                <span className="text-[10px] tracking-widest uppercase text-slate-500">Email:</span> 
                <span className="text-orange-500 font-mono text-[11px]">admin@clutchmomentum.com</span>
            </span>
            <span className="flex justify-between items-center group-hover:bg-slate-800/50 p-2 rounded-lg transition-colors">
                <span className="text-[10px] tracking-widest uppercase text-slate-500">Password:</span>
                <span className="text-orange-500 font-mono text-[11px]">Admin@123</span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
