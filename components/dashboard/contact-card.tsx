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
      "p-6 h-full flex flex-col justify-between group transition-all duration-300",
      isUnlocked ? "border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_30px_rgba(16,185,129,0.05)]" : "hover:border-primary/30"
    )}>
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Building2 size={16} className="text-foreground/30" />
              <h3 className="text-xl font-bold tracking-tight">{contact.companyName}</h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-foreground/40 uppercase tracking-widest">
              <span className="flex items-center gap-1">
                <MapPin size={12} />
                {contact.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-foreground/20" />
              <span>{contact.industry}</span>
            </div>
          </div>
          {contact.type === 'exclusive' && (
            <div className="p-2 rounded-lg bg-secondary/10 text-secondary border border-secondary/20" title="Exclusive Premium Lead">
              <Zap size={18} fill="currentColor" />
            </div>
          )}
        </div>

        <div className="p-4 rounded-xl bg-white/5 border border-white/5 relative overflow-hidden">
          <div className="space-y-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 mb-1">Contact Details</p>
              <p className="font-bold">{contact.contactName}</p>
              <p className="text-xs text-foreground/60">{contact.designation}</p>
            </div>
            
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-foreground/30" />
                <span className={cn(
                  "transition-all duration-500",
                  !isUnlocked && "blur-md select-none opacity-50"
                )}>
                  {isUnlocked ? contact.email : "•••••••••••••••••"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-foreground/30" />
                <span className={cn(
                  "transition-all duration-500",
                  !isUnlocked && "blur-md select-none opacity-50"
                )}>
                  {isUnlocked ? contact.phone : "•••••••••••••••••"}
                </span>
              </div>
            </div>
          </div>

          {!isUnlocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-[2px]">
              <div className="p-2 rounded-full bg-background/80 border border-white/10 shadow-xl">
                <Lock size={16} className="text-foreground/40" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5">
        {isUnlocked ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
              <CheckCircle2 size={16} />
              Unlocked
            </div>
            <CapsuleButton variant="ghost" size="sm" className="flex items-center gap-2">
              <ExternalLink size={14} />
              Reach Out
            </CapsuleButton>
          </div>
        ) : (
          <CapsuleButton 
            onClick={() => onUnlock(contact.id)}
            className="w-full flex items-center justify-center gap-2"
          >
            <Lock size={14} />
            Unlock for 1 Credit
          </CapsuleButton>
        )}
      </div>
    </GlassCard>
  );
}
