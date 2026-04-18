"use client";

import { Contact } from "@/data/mock/contacts";
import { GlassCard } from "../ui/glass-card";
import { CapsuleButton } from "../ui/capsule-button";
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Lock, 
  Zap, 
  CheckCircle2,
  ExternalLink 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  contact: Contact;
  onUnlock: (id: string) => void;
  isUnlocked: boolean;
}

export function ContactCard({ contact, onUnlock, isUnlocked }: ContactCardProps) {
  return (
    <GlassCard className={cn(
      "p-8 h-full flex flex-col justify-between group transition-all duration-500 relative overflow-hidden",
      isUnlocked 
        ? "border-emerald-200 bg-white shadow-xl shadow-emerald-500/5" 
        : "hover:border-orange-500/50 hover:bg-white bg-white/70 border-slate-200 shadow-sm"
    )}>
      {/* Micro-shine for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

      <div className="space-y-8 relative z-10">
        <div className="flex items-start justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors shadow-sm">
                <Building2 size={18} className="text-slate-400 group-hover:text-orange-600" />
              </div>
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900 leading-none group-hover:text-orange-600 transition-colors">
                {contact.companyName}
              </h3>
            </div>
            <div className="flex items-center gap-5 text-[10px] font-black uppercase tracking-widest text-slate-500">
              <span className="flex items-center gap-2">
                <MapPin size={12} className="text-slate-400" />
                {contact.location}
              </span>
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="text-orange-600 font-black">{contact.industry}</span>
            </div>
          </div>
          {contact.type === 'exclusive' && (
            <div className="p-3 rounded-2xl bg-orange-600 text-white shadow-lg shadow-orange-600/20 border border-orange-400/30" title="Exclusive Premium Lead">
              <Zap size={18} fill="currentColor" />
            </div>
          )}
        </div>

        <div className="p-6 rounded-[1.5rem] bg-slate-50 border border-slate-100 relative overflow-hidden group-hover:bg-white transition-colors duration-500 shadow-inner">
          <div className="space-y-5">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600 mb-2">Subject Dossier</p>
              <p className="text-lg font-black italic uppercase tracking-tight text-slate-900">{contact.contactName}</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{contact.designation}</p>
            </div>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-slate-400" />
                <span className={cn(
                  "font-bold uppercase tracking-tight transition-all duration-700",
                  !isUnlocked && "blur-lg select-none opacity-30 px-2 bg-slate-200 rounded"
                )}>
                  {isUnlocked ? contact.email : "IDENTITY_RESTRICTED"}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-slate-400" />
                <span className={cn(
                  "font-bold uppercase tracking-tight transition-all duration-700",
                  !isUnlocked && "blur-lg select-none opacity-30 px-2 bg-slate-200 rounded"
                )}>
                  {isUnlocked ? contact.phone : "IDENTITY_RESTRICTED"}
                </span>
              </div>
            </div>
          </div>

          {!isUnlocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm transition-all duration-500">
              <div className="p-4 rounded-full bg-white border border-slate-200 shadow-2xl scale-110 group-hover:scale-125 transition-transform duration-500">
                <Lock size={20} className="text-slate-400" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-slate-100 relative z-10">
        {isUnlocked ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-600 font-black uppercase tracking-widest text-[10px]">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Persistence Active
            </div>
            <CapsuleButton variant="outline" className="flex items-center gap-3 border-slate-200 hover:bg-slate-50 hover:text-slate-900 group/btn py-4">
              <ExternalLink size={16} className="text-slate-400 group-hover/btn:text-orange-600 transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Initiate Outreach</span>
            </CapsuleButton>
          </div>
        ) : (
          <CapsuleButton 
            onClick={() => onUnlock(contact.id)}
            className="w-full flex items-center justify-center gap-3 bg-orange-600 text-white hover:bg-orange-700 shadow-xl shadow-orange-600/20 py-5 active:scale-95 border-none"
          >
            <Lock size={16} />
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Unlock Dossier • 1 Credit</span>
          </CapsuleButton>
        )}
      </div>
    </GlassCard>
  );
}
