import { GlassCard } from "@/components/ui/glass-card";
import { Zap, Gavel, Scale, AlertTriangle, ArrowRight, Star } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "Establishment of Terms",
      icon: <Scale size={20} />,
      content: "By accessing the Clutch Momentum ecosystem, you establish a binding commitment to our operational protocols. This platform is designed exclusively for elite creators and brand founders seeking high-tier collaboration."
    },
    {
      title: "Operational Conduct",
      icon: <Zap size={20} />,
      content: "Reselling, reverse-engineering, or unauthorized distribution of brand contact data is strictly prohibited. Misuse of platform telemetry will result in immediate termination of access rights."
    },
    {
      title: "Intellectual Property",
      icon: <Star size={20} />,
      content: "All branding, design architecture, and proprietary datasets within Clutch Momentum remain the exclusive property of our transmission center. No rights are transferred upon subscription."
    },
    {
        title: "Responsibility & Liability",
        icon: <Gavel size={20} />,
        content: "While we facilitate elite connections, Clutch Momentum does not guarantee specific collaboration outcomes. Our liability is limited to the provision of the digital platform 'as is'."
    }
  ];

  return (
    <div className="pt-32 pb-40 relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-600/5 blur-[150px] rounded-full -z-0" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full -z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Scale size={14} className="text-orange-500" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 italic">Operational Protocol</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none">
            Terms of <br />
            <span className="text-orange-500 text-glow text-stroke-white">Engagement.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-bold uppercase tracking-tight">
            The rules of the elite creator marketplace. High expectations, clear boundaries.
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

        <div className="mt-16 p-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex gap-4 items-center">
            <AlertTriangle size={24} className="text-red-500 shrink-0" />
            <p className="text-xs font-bold text-red-200 leading-relaxed uppercase tracking-widest">
                Violation of these terms results in permanent blacklisting from the Clutch Momentum ecosystem and all future collaboration modules.
            </p>
        </div>

        <div className="mt-24 p-10 rounded-[2.5rem] bg-white text-black overflow-hidden relative group">
            <div className="relative z-10 space-y-4 text-center">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter">Ready to Proceed?</h2>
                <p className="font-black uppercase tracking-widest text-[10px] opacity-80">By continuing to use our platform, you accept these operational protocols.</p>
                <div className="pt-4">
                    <a href="/register" className="inline-flex items-center gap-2 font-black uppercase italic tracking-widest hover:translate-x-2 transition-transform">
                        Initiate Registration <ArrowRight size={20} />
                    </a>
                </div>
            </div>
            {/* Dark glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
        
        <div className="mt-20 text-center">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">Established Under Governing Law of India | Effective {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}
