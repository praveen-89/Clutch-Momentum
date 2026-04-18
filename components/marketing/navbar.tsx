"use client";

import Link from "next/link";
import { CapsuleButton } from "../ui/capsule-button";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
import { LayoutDashboard, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.4)"]
  );
  const backdropFilter = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(16px)"]);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Connect", href: "/#contact" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform">
            C
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
            Clutch Momentum
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-px bg-foreground/10 mx-2" />
          <Link href="/login" className="text-sm font-medium text-foreground/70 hover:text-foreground">
            Login
          </Link>
          <Link href="/register">
            <CapsuleButton>Join as Creator</CapsuleButton>
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
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link href="/register" onClick={() => setIsOpen(false)}>
            <CapsuleButton className="w-full">Join as Creator</CapsuleButton>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
