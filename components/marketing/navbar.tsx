"use client";

import Link from "next/link";
import { CapsuleButton } from "../ui/capsule-button";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
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
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-primary">Clutch</span> Momentum
          </span>
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
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/login" className="text-lg font-bold flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <LogIn size={18} />
            Login
          </Link>
          <Link href="/register" onClick={() => setIsOpen(false)}>
            <CapsuleButton className="w-full">Get Started Free</CapsuleButton>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
