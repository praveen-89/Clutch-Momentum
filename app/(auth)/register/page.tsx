"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PremiumInput } from "@/components/ui/premium-input";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { UserPlus, Activity, Phone, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1",  flag: "🇺🇸", name: "USA" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
];

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  countryCode: z.string().min(1, "Select a country code"),
  phone: z.string().min(7, "Enter a valid phone number").max(15).regex(/^\d+$/, "Numbers only"),
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: { countryCode: "+91" },
  });

  const selectedCountryCode = watch("countryCode");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    router.push("/login?registered=true");
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 max-h-[80vh] overflow-y-auto px-1 custom-scrollbar">
      <div className="space-y-2 text-center pb-2">
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="inline-flex p-3 rounded-2xl bg-orange-500/10 text-orange-500 mb-1 border border-orange-500/20 shadow-inner"
        >
            <UserPlus size={24} />
        </motion.div>
        <h1 className="text-2xl font-black uppercase italic tracking-tighter text-slate-100 leading-none">Create <span className="text-orange-500">Account</span></h1>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          Join the elite creator network
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <PremiumInput
          label="Full Name"
          placeholder="Enter name"
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

        {/* Contact Number with Custom Dropdown */}
        <div className="space-y-2 relative">
          <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 ml-1">
            Contact Number
          </label>
          <div className="flex gap-3 h-[52px]">
            {/* Custom Country Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={cn(
                  "h-full flex items-center justify-between gap-2 bg-white/5 border border-white/10 text-white rounded-xl px-4 min-w-[110px] hover:border-orange-500/30 transition-all focus:border-orange-500/50 outline-none",
                  isDropdownOpen && "border-orange-500/50 border-glow"
                )}
              >
                <span className="text-[13px] font-bold">
                  {COUNTRY_CODES.find(c => c.code === selectedCountryCode)?.flag} {selectedCountryCode}
                </span>
                <ChevronDown size={14} className={cn("text-slate-500 transition-transform duration-300", isDropdownOpen && "rotate-180 text-orange-500")} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 5, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-0 top-full z-50 w-[200px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
                  >
                    <div className="max-h-[188px] overflow-y-auto py-2 custom-scrollbar">
                      {COUNTRY_CODES.map((c) => (
                        <button
                          key={c.code + c.name}
                          type="button"
                          onClick={() => {
                            setValue("countryCode", c.code);
                            setIsDropdownOpen(false);
                          }}
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors text-left group",
                            selectedCountryCode === c.code && "bg-orange-500/10"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{c.flag}</span>
                            <div className="flex flex-col">
                              <span className="text-[11px] font-black uppercase tracking-widest text-white">{c.code}</span>
                              <span className="text-[9px] text-slate-500 font-bold uppercase">{c.name}</span>
                            </div>
                          </div>
                          {selectedCountryCode === c.code && <Check size={12} className="text-orange-500" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Phone Input */}
            <div className="flex-1 relative group">
              <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-orange-500 transition-colors z-10" />
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("phone")}
                className="w-full h-full bg-white/5 border border-white/10 text-white placeholder:text-slate-600 rounded-xl pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-orange-500/50 transition-all"
              />
            </div>
          </div>
          {errors.phone && (
            <p className="text-[10px] font-bold text-red-400 ml-1 uppercase tracking-widest">
              {errors.phone?.message}
            </p>
          )}
        </div>

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

        <div className="pt-4">
          <CapsuleButton 
            className="w-full bg-orange-600 hover:bg-orange-700 text-white border-none h-14 shadow-xl shadow-orange-600/20 active:scale-95 transition-all text-[12px] font-black uppercase tracking-[0.2em] italic group relative overflow-hidden flex items-center justify-center px-8" 
            type="submit" 
            disabled={isLoading}
          >
            <span className="relative z-10 w-full text-center">{isLoading ? "Creating Account..." : "Create Account"}</span>
            {!isLoading && <Activity size={18} className="absolute right-6 group-hover:animate-pulse text-white/50" />}
          </CapsuleButton>
        </div>
      </form>

      <div className="text-center pt-6 border-t border-slate-800">
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
