import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Shield, Lock, Eye, ArrowRight, Star } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information Acquisition",
      icon: <Eye size={20} />,
      content: "We collect high-intent data necessary to accelerate your creator journey. This includes identity details (Name, Email), contact coordinates (Phone), and operational usage telemetry to optimize your experience."
    },
    {
      title: "Strategic Data Usage",
      icon: <Shield size={20} />,
      content: "Your data is used to establish direct connections with global brand founders. We leverage transmission logs to refine our matching engine and ensure secure, elite access to brand contacts."
    },
    {
      title: "Data Sovereignty",
      icon: <Lock size={20} />,
      content: "You maintain absolute control over your digital legacy. At any point, you may access, rectify, or request the permanent erasure of your data from the Clutch Momentum ecosystem."
    },
    {
        title: "Security & Shielding",
        icon: <Star size={20} />,
        content: "We employ mission-critical encryption (SSL/TLS) and strict access controls. Your contact data is shielded from unauthorized resale and used exclusively for your collaboration pursuits."
    }
  ];

  return (
    <div className="pt-32 pb-40 relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-600/5 blur-[150px] rounded-full -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-600/5 blur-[120px] rounded-full -z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Shield size={14} className="text-orange-500" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 italic">Security Protocol</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none">
            Privacy <br />
            <span className="text-orange-500 text-glow">Manifesto.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-bold uppercase tracking-tight">
            Transparent, secure, and creator-first. How we handle your transmission data.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <GlassCard key={i} className="p-10 border-white/5 hover:border-orange-500/20 transition-all group">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all duration-500 shrink-0">
                  {section.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter text-slate-100">
                    {section.title}
                  </h3>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-24 p-10 rounded-[2.5rem] bg-orange-600 text-black overflow-hidden relative group">
            <div className="relative z-10 space-y-4 text-center">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter">Have Legal Inquiries?</h2>
                <p className="font-black uppercase tracking-widest text-[10px] opacity-80">Our transmission team is standing by to clarify our protocols.</p>
                <div className="pt-4">
                    <a href="mailto:support@clutchmomentum.com" className="inline-flex items-center gap-2 font-black uppercase italic tracking-widest hover:translate-x-2 transition-transform">
                        Establish Connection <ArrowRight size={20} />
                    </a>
                </div>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
        
        <div className="mt-20 text-center">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">Last Transmission Update: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
}
