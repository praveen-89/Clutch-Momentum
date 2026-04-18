"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PremiumInput } from "@/components/ui/premium-input";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { UserPlus } from "lucide-react";

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
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Join Clutch Momentum</h1>
        <p className="text-sm text-foreground/50">
          Create your creator profile and start connecting with brands.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <PremiumInput
          label="Full Name"
          placeholder="Enter your name"
          {...register("name")}
          error={errors.name?.message}
        />
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
        <PremiumInput
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <div className="pt-2">
          <CapsuleButton className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Join as Creator"}
          </CapsuleButton>
        </div>
      </form>

      <div className="text-center pt-4 border-t border-white/5">
        <p className="text-sm text-foreground/50">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-bold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
