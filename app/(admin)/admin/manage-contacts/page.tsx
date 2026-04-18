"use client";

import { useState } from "react";
import { MOCK_CONTACTS, Contact } from "@/data/mock/contacts";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { PremiumInput } from "@/components/ui/premium-input";
import { 
  Database, 
  Search, 
  Plus, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Filter,
  Zap,
  Globe
} from "lucide-react";

export default function ManageContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>(MOCK_CONTACTS);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">Inventory Control</h1>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Manage verified brand decision maker database</p>
        </div>
        <CapsuleButton className="bg-blue-600 hover:bg-blue-500 flex items-center gap-2 text-glow">
          <Plus size={18} />
          New Contact Entry
        </CapsuleButton>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search database by company, contact, designation..." 
            className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 pl-12 pr-6 text-sm outline-none focus:border-blue-500/50 transition-all font-bold"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-900 border border-slate-800 px-4 rounded-xl text-slate-400 hover:text-white transition-colors">
            <Filter size={18} />
          </button>
          <button className="bg-slate-900 border border-slate-800 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400">
            Export JSON
          </button>
        </div>
      </div>

      <GlassCard className="bg-slate-950/50 border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/50 border-b border-slate-800">
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Company / Entity</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Decision Maker</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Industry</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Reach</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Type</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900">
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-blue-600/[0.02] transition-colors group">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 font-black text-[10px]">
                        {contact.companyName.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white leading-none">{contact.companyName}</p>
                        <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold">{contact.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <p className="text-sm font-bold text-slate-300 leading-none">{contact.contactName}</p>
                    <p className="text-[10px] text-slate-600 mt-1 uppercase font-bold">{contact.designation}</p>
                  </td>
                  <td className="p-5">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-slate-900 px-2 py-1 rounded text-slate-400 border border-slate-800">
                      {contact.industry}
                    </span>
                  </td>
                  <td className="p-5">
                    <p className="text-xs text-slate-400 leading-none">{contact.email}</p>
                    <p className="text-[10px] text-slate-600 mt-1">{contact.phone}</p>
                  </td>
                  <td className="p-5">
                    {contact.type === 'exclusive' ? (
                      <div className="flex items-center gap-1.5 text-blue-400">
                        <Zap size={12} fill="currentColor" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Premium</span>
                      </div>
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Standard</span>
                    )}
                  </td>
                  <td className="p-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white">
                        <Edit size={14} />
                      </button>
                      <button className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-red-500">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 border-t border-slate-900 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
          <p>Showing 1-10 of 542 Entries</p>
          <div className="flex gap-4">
             <button className="hover:text-white disabled:opacity-30" disabled>Previous Phase</button>
             <button className="hover:text-white">Forward Sequence</button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
