import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { GlassCard } from "@/components/ui/glass-card";
import { Mail, ShieldCheck, Zap, UserCircle, Unlock, SendHorizontal } from "lucide-react";
import Link from "next/link";
import { MOCK_BRANDS } from "@/data/mock/brands";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Value Proposition Section */}
      <section className="py-12 border-b border-white/5 bg-primary/[0.02]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-2xl lg:text-4xl font-black uppercase italic tracking-tighter">
            Stop Chasing Brands. <span className="text-primary text-glow">Start Connecting Directly.</span>
          </h2>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto">
            No more cold DMs or waiting for replies.
            Get access to verified brand contacts and start meaningful collaborations instantly.

          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none">
              How It <span className="text-primary text-glow">Works</span>
            </h2>
            <p className="text-xl text-foreground/60 font-medium max-w-2xl mx-auto">
              Three simple steps to unlock your elite brand potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Lines (Desktop) */}
            <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description: "Showcase your social presence and audience with a verified elite profile.",
                icon: <UserCircle size={32} />
              },
              {
                step: "02",
                title: "Unlock Brand Contacts",
                description: "Access decision-makers actively looking for premium collaborations.",
                icon: <Unlock size={32} />
              },
              {
                step: "03",
                title: "Pitch & Collaborate",
                description: "Reach out directly and close deals twice as fast without intermediaries.",
                icon: <SendHorizontal size={32} />
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -top-6 -left-6 text-8xl font-black italic text-primary/5 select-none transition-colors group-hover:text-primary/10">
                  {item.step}
                </div>
                
                <GlassCard className="p-10 border-white/10 group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col items-center text-center space-y-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-2xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold italic uppercase tracking-tight">{item.title}</h3>
                    <p className="text-foreground/60 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full shadow-[0_0_8px_var(--color-primary)]" />
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />

      {/* Why Clutch Momentum Section */}
      <section className="py-24 border-t border-white/5 bg-mesh relative overflow-hidden">
        <div className="absolute inset-0 bg-deep pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-6xl font-black tracking-tighter uppercase italic">
              Why <span className="text-primary text-glow">Clutch Momentum</span>
            </h2>
            <p className="text-foreground/60 font-medium text-lg max-w-2xl mx-auto">
              The elite platform built for high-performance creators who value direct connection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Direct access to CEOs, CXOs, and decision-makers",
              "High-intent collaboration opportunities",
              "No intermediaries or agencies",
              "Affordable and scalable pricing"
            ].map((point, i) => (
              <GlassCard key={i} className="p-8 border-white/10 flex flex-col items-center text-center space-y-6 group hover:bg-primary/5 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} />
                </div>
                <p className="text-base font-bold leading-relaxed text-foreground/80">{point}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section className="py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row shadow-2xl rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 overflow-hidden">
            <div className="lg:w-3/5 p-12 lg:p-20 space-y-10">
              <h2 className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter leading-[0.9]">
                Who Can <br />
                <span className="text-primary text-glow outline-text-secondary">Join The Elite</span>
              </h2>
              <p className="text-xl text-foreground/60 leading-relaxed font-medium max-w-xl">
                Clutch Momentum is a gated ecosystem for professionals ready to dominate their niche through elite brand partnerships.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {[
                  "Content Creators",
                  "Influencers",
                  "YouTubers",
                  "Instagram Creators",
                  "Personal Brands",
                  "Talent Managers"
                ].map((type) => (
                  <div key={type} className="flex items-center gap-4 py-4 px-8 rounded-2xl bg-primary/5 border border-primary/10 text-sm font-bold text-foreground/80 hover:bg-primary/10 transition-colors group">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)] group-hover:scale-125 transition-transform" />
                    {type}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/5 relative group bg-primary/5 p-12 lg:p-20 flex items-center justify-center border-l border-white/10">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-colors animate-pulse" />
              <GlassCard variant="frosted" className="p-10 border-white/10 relative z-10 text-center space-y-8 max-w-sm">
                <div className="w-24 h-24 rounded-[2rem] bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4 shadow-2xl">
                  <Zap size={48} fill="currentColor" className="animate-float" />
                </div>
                <h3 className="text-3xl font-black italic uppercase tracking-tight">Direct Access.</h3>
                <p className="text-foreground/60 text-base font-medium leading-relaxed">
                  Stop waiting for replies that never come. Connect with the people who make the decisions.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Trust Section */}
      <section className="py-24 border-t border-white/5 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-foreground/50 mb-12">
            Trusted by elite creators collaborating with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {MOCK_BRANDS.map((brand) => (
              <div
                key={brand.id}
                className={`text-2xl font-black ${brand.italic ? 'italic' : ''} tracking-tight uppercase`}
              >
                {brand.logoText}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="contact" className="py-32 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full -z-10" />

        <div className="max-w-4xl mx-auto px-6 text-center">
          <GlassCard className="p-16 space-y-10 border-white/10 group overflow-hidden relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors" />

            <Mail size={48} className="mx-auto text-primary mb-6" />

            <h2 className="text-4xl lg:text-7xl font-black tracking-tight leading-none uppercase italic">
              Start Your First Brand <br />
              <span className="text-primary text-glow">
                Collaboration Today
              </span>
            </h2>

            <p className="text-xl text-foreground/70 font-medium max-w-xl mx-auto leading-relaxed">
              Join 2,000+ creators who have stopped searching and started connecting directly with decision makers.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <Link href="/register">
                <CapsuleButton size="lg" className="px-12 py-8 text-lg">Sign Up Free</CapsuleButton>
              </Link>
              <Link href="/contact">
                <CapsuleButton variant="outline" size="lg" className="px-12 py-8 text-lg">Talk to Support</CapsuleButton>
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
