"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PremiumInput } from "@/components/ui/premium-input";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { UserPlus, Activity } from "lucide-react";
import { motion } from "framer-motion";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    // Redirect to login after "registration"
    router.push("/login?registered=true");
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-3 text-center">
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="inline-flex p-3 rounded-2xl bg-orange-500/10 text-orange-500 mb-2 border border-orange-500/20 shadow-inner"
        >
            <UserPlus size={28} />
        </motion.div>
        <h1 className="text-3xl font-black uppercase italic tracking-tighter text-slate-100 leading-none">Create <span className="text-orange-500">Account</span></h1>
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
          Join as a creator and grow with brands
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <PremiumInput
          label="Full Name"
          placeholder="Enter your name"
          {...register("name")}
          error={errors.name?.message}
          className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-orange-500/50"
        />
        <PremiumInput
          label="Email Address"
          placeholder="name@example.com"
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
        <PremiumInput
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
          className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-orange-500/50"
        />

        <div className="pt-6">
          <CapsuleButton className="w-full bg-orange-600 hover:bg-orange-700 text-white border-none py-6 shadow-xl shadow-orange-600/20 active:scale-95 transition-all text-[11px] font-black uppercase tracking-[0.2em] italic group" type="submit" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Create Account"}
            {!isLoading && <Activity size={16} className="ml-3 group-hover:animate-pulse" />}
          </CapsuleButton>
        </div>
      </form>

      <div className="text-center pt-8 border-t border-slate-800">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 hover:text-orange-400 font-black transition-colors">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
