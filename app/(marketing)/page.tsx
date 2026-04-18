import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { PricingPreview } from "@/components/marketing/pricing-preview";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      
      {/* Brand Trust Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/30 mb-10">
            Trusted by creators collaborated with brands like
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all">
            {/* Logo Placeholders */}
            <div className="text-2xl font-black italic">NIKE</div>
            <div className="text-2xl font-black italic tracking-tighter">ADIDAS</div>
            <div className="text-22 font-black italic uppercase">Samsung</div>
            <div className="text-2xl font-black italic">RedBull</div>
            <div className="text-2xl font-black italic">Spotify</div>
          </div>
        </div>
      </section>

      <PricingPreview />

      {/* CTA Section */}
      <section id="contact" className="py-32 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <GlassCard className="p-16 space-y-10 border-white/10 group overflow-hidden relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors" />
            
            <Mail size={48} className="mx-auto text-primary mb-6" />
            
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Ready to land your <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Next Collaboration?
              </span>
            </h2>
            
            <p className="text-xl text-foreground/50 max-w-xl mx-auto">
              Join 2,000+ creators who have stopped searching and started connecting directly with decision makers.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/register">
                <CapsuleButton size="lg">Join as Creator</CapsuleButton>
              </Link>
              <Link href="/contact">
                <CapsuleButton variant="outline" size="lg">Talk to Support</CapsuleButton>
              </Link>
            </div>
            
            <p className="text-xs text-foreground/30 font-medium">
              Free registration • Cancel anytime • 100% Verified Contacts
            </p>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
