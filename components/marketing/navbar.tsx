"use client";

import Link from "next/link";
import { Logo } from "../ui/logo";
import { CapsuleButton } from "../ui/capsule-button";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Menu, X, LogIn } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.7)"]
  );
  const backdropFilter = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(16px)"]);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      style={{ 
        backgroundColor: isOpen ? "var(--background)" : backgroundColor, 
        backdropFilter: isOpen ? "blur(24px)" : backdropFilter 
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500",
        isOpen ? "border-foreground/10 h-screen md:h-20" : "border-transparent h-20"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[60]">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
          <Logo size="md" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-px bg-white/10 mx-2" />
          <Link href="/login" className="text-sm font-bold text-foreground/60 hover:text-primary transition-colors flex items-center gap-2">
            <LogIn size={16} />
            Login
          </Link>
          <Link href="/register">
            <CapsuleButton className="px-8">Get Started Free</CapsuleButton>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 top-20 bg-background flex flex-col p-8 z-50 overflow-y-auto"
          >
            <div className="flex flex-col gap-8 py-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-black italic uppercase tracking-tighter hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="h-px w-full bg-foreground/5 my-4" />
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="flex flex-col gap-6"
              >
                <Link href="/login" className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-3" onClick={() => setIsOpen(false)}>
                  <LogIn size={24} className="text-primary" />
                  Login
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <CapsuleButton className="w-full py-6 text-lg">Get Started Free</CapsuleButton>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
