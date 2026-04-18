"use client";

import { useState } from "react";
import { MOCK_CONTACTS } from "@/data/mock/contacts";
import { ContactCard } from "@/components/dashboard/contact-card";
import { UpgradeModal } from "@/components/ui/upgrade-modal";
import { useAuthStore } from "@/store/useAuthStore";
import { Search, Filter, SlidersHorizontal, Info, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BrandContactsPage() {
  const { user } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [modalReason, setModalReason] = useState("");

  const filteredContacts = MOCK_CONTACTS.filter(contact => 
    contact.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.contactName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUnlock = (id: string) => {
    if (user?.plan === 'free') {
      setModalReason("Free users cannot unlock contacts. Join a plan to start connecting with brands.");
      setIsUpgradeModalOpen(true);
      return;
    }

    const currentCredits = user?.credits ?? 0;
    if (currentCredits <= 0 && user?.plan !== 'premium') {
      setModalReason("You've used all your monthly credits. Upgrade to Growth or Premium for more access.");
      setIsUpgradeModalOpen(true);
      return;
    }

    setUnlockedIds(prev => [...prev, id]);
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 w-fit"
            >
                <Database size={12} className="text-orange-600" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600">Decision Maker Database</span>
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter leading-none text-slate-900">
                Direct <span className="text-orange-600 text-glow">Intelligence.</span>
            </h1>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-2">
                Unfiltered access to marketing leads and brand PR decision makers
            </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="px-5 py-3 rounded-2xl bg-white/50 border border-slate-200 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-orange-500/50 transition-all cursor-pointer shadow-sm">
            <Filter size={14} />
            Filter Array
          </div>
          <div className="px-5 py-3 rounded-2xl bg-white/50 border border-slate-200 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-orange-500/50 transition-all cursor-pointer shadow-sm">
            <SlidersHorizontal size={14} />
            Sort Node
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors">
          <Search size={24} />
        </div>
        <input 
          type="text" 
          placeholder="Query by company, industry, or contact identity..."
          className="w-full bg-white/60 backdrop-blur-xl border border-slate-200 rounded-[2rem] py-8 pl-16 pr-8 text-xl font-medium outline-none focus:border-orange-500/50 focus:ring-8 focus:ring-orange-500/5 shadow-xl shadow-slate-200/40 placeholder:text-slate-300 transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10 flex items-center gap-5 text-orange-600 shadow-sm">
        <div className="p-3 rounded-xl bg-white border border-orange-100 shadow-sm">
          <Info size={20} />
        </div>
        <div className="text-xs uppercase font-black tracking-widest">
          <p className="text-slate-900 mb-1">Operational Parameter</p>
          <p className="text-slate-500 leading-relaxed font-bold lowercase first-letter:uppercase">Each contact unlock consumes 1 credit. Unlocks are persistent and permanently stored in your instance history.</p>
        </div>
      </div>

      {filteredContacts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredContacts.map((contact) => (
              <motion.div
                key={contact.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ContactCard 
                  contact={contact} 
                  onUnlock={handleUnlock}
                  isUnlocked={unlockedIds.includes(contact.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="py-32 text-center space-y-8">
          <div className="inline-flex p-10 rounded-full bg-slate-100 text-slate-300 shadow-inner">
            <Search size={64} />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900">Zero Matches Found</h3>
            <p className="text-slate-400 font-bold uppercase text-[11px] tracking-widest max-w-xs mx-auto">Recursive search failed. Adjust parameters to locate brand decision makers.</p>
          </div>
        </div>
      )}

      <UpgradeModal 
        isOpen={isUpgradeModalOpen} 
        onClose={() => setIsUpgradeModalOpen(false)} 
        reason={modalReason}
      />
    </div>
  );
}
