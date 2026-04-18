"use client";

import { useState } from "react";
import { MOCK_CONTACTS, Contact } from "@/data/mock/contacts";
import { ContactCard } from "@/components/dashboard/contact-card";
import { PremiumInput } from "@/components/ui/premium-input";
import { UpgradeModal } from "@/components/ui/upgrade-modal";
import { useAuthStore } from "@/store/useAuthStore";
import { Search, Filter, SlidersHorizontal, Info, Zap } from "lucide-react";
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
    // Check if free user
    if (user?.plan === 'free') {
      setModalReason("Free users cannot unlock contacts. Join a plan to start connecting with brands.");
      setIsUpgradeModalOpen(true);
      return;
    }

    // Check credits
    const currentCredits = user?.credits ?? 0;
    if (currentCredits <= 0 && user?.plan !== 'premium') {
      setModalReason("You've used all your monthly credits. Upgrade to Growth or Premium for more access.");
      setIsUpgradeModalOpen(true);
      return;
    }

    // Success unlock logic (Mocked: in real app, call API and deduct credits)
    setUnlockedIds(prev => [...prev, id]);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Brand Decision Makers</h1>
          <p className="text-foreground/50">Direct contact information for verified marketing and PR leads.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2 text-xs font-bold text-foreground/40 uppercase tracking-widest">
            <Filter size={14} />
            Filters
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2 text-xs font-bold text-foreground/40 uppercase tracking-widest hover:text-foreground transition-colors cursor-pointer">
            <SlidersHorizontal size={14} />
            Sort
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-primary transition-colors">
          <Search size={20} />
        </div>
        <input 
          type="text" 
          placeholder="Search by company, industry, or contact name..."
          className="w-full bg-glass border border-glass-border rounded-2xl py-6 pl-12 pr-6 text-lg outline-none focus:border-primary/50 focus:ring-8 focus:ring-primary/5 transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-4 text-amber-500/80">
        <div className="p-2 rounded-lg bg-amber-500/20">
          <Info size={20} />
        </div>
        <div className="text-sm">
          <p className="font-bold">Member Notice</p>
          <p className="opacity-80 font-medium">Starter plan allows 20 unlocks per month. Each unlock displays permanent contact details.</p>
        </div>
      </div>

      {filteredContacts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredContacts.map((contact) => (
              <motion.div
                key={contact.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
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
        <div className="py-20 text-center space-y-4">
          <div className="inline-flex p-6 rounded-full bg-white/5 text-foreground/20">
            <Search size={48} />
          </div>
          <h3 className="text-xl font-bold">No contacts found</h3>
          <p className="text-foreground/40 max-w-xs mx-auto">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      )}

      {/* Upgrade Modal for business logic checks */}
      <UpgradeModal 
        isOpen={isUpgradeModalOpen} 
        onClose={() => setIsUpgradeModalOpen(false)} 
        reason={modalReason}
      />
    </div>
  );
}
