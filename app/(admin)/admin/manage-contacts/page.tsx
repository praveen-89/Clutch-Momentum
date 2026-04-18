"use client";

import { useState } from "react";
import { MOCK_CONTACTS, Contact } from "@/data/mock/contacts";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Filter,
  Zap,
  Globe,
  Database
} from "lucide-react";
import { motion } from "framer-motion";

export default function ManageContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>(MOCK_CONTACTS);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contacts.filter(contact => 
    contact.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600">Decision Maker Inventory</span>
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
                Identity <span className="text-orange-600 text-glow">Control.</span>
            </h1>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-2">
                Manage and audit verified brand decision maker nodes
            </p>
        </div>
        
        <CapsuleButton className="bg-orange-600 hover:bg-orange-700 text-white shadow-xl shadow-orange-600/20 group py-5 px-10 border-none relative overflow-hidden active:scale-95 transition-all">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <Plus size={18} className="group-hover:rotate-90 transition-transform duration-500 relative z-10" />
          <span className="text-[11px] font-black uppercase tracking-widest relative z-10">New Contact Node</span>
        </CapsuleButton>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-3 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/40 relative group">
        <div className="relative flex-grow group">
          <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search database by company, identity, or industry niche..." 
            className="w-full bg-slate-50 border border-transparent rounded-[2rem] py-6 pl-16 pr-8 text-sm font-bold uppercase tracking-tight text-slate-900 outline-none focus:bg-white focus:border-orange-500/30 transition-all placeholder:text-slate-300 placeholder:italic transition-all duration-300 shadow-inner focus:shadow-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-4 pr-3">
          <button className="bg-slate-50 border border-slate-200 p-5 rounded-[1.5rem] text-slate-400 hover:text-orange-600 hover:bg-white hover:border-orange-200 transition-all shadow-sm active:scale-95">
            <Filter size={20} />
          </button>
          <button className="bg-orange-600/5 border border-orange-600/10 px-10 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 hover:bg-orange-600 hover:text-white transition-all shadow-sm active:scale-95 italic">
            Export Node JSON
          </button>
        </div>
      </div>

      <GlassCard className="bg-white/70 border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/40 transition-all hover:bg-white duration-500">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 font-black">
                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Company / Entity</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Subject Identity</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Niche Vector</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Network Intel</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Node Status</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 text-right">Overrides</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredContacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-orange-50/20 transition-all duration-300 group">
                  <td className="p-8">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 font-black text-sm shadow-sm group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-400 transition-all duration-700">
                        {contact.companyName.charAt(0)}
                      </div>
                      <div>
                        <p className="text-base font-black text-slate-900 leading-none mb-2 group-hover:text-orange-600 transition-colors uppercase italic tracking-tighter">{contact.companyName}</p>
                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest flex items-center gap-2">
                            <Globe size={12} className="text-slate-300" />
                            {contact.location}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-8">
                    <p className="text-sm font-black text-slate-900 leading-none mb-1.5 uppercase tracking-tight italic">{contact.contactName}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em]">{contact.designation}</p>
                  </td>
                  <td className="p-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-white px-4 py-2 rounded-xl text-slate-500 border border-slate-200 group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-100 transition-all">
                      {contact.industry}
                    </span>
                  </td>
                  <td className="p-8">
                    <p className="text-[11px] font-black text-slate-500 leading-none mb-2 tracking-tight uppercase group-hover:text-slate-900 transition-colors">{contact.email}</p>
                    <p className="text-[10px] text-slate-400 font-black tracking-widest italic">{contact.phone}</p>
                  </td>
                  <td className="p-8">
                    {contact.type === 'exclusive' ? (
                      <div className="flex items-center gap-2 text-orange-600">
                        <Zap size={14} fill="currentColor" className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] italic">Elite Priority</span>
                      </div>
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Standard Access</span>
                    )}
                  </td>
                  <td className="p-8 text-right">
                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <button className="p-3.5 rounded-2xl bg-white border border-slate-200 text-slate-300 hover:text-orange-600 hover:border-orange-200 shadow-sm transition-all hover:scale-110 active:scale-95">
                        <Edit size={18} />
                      </button>
                      <button className="p-3.5 rounded-2xl bg-white border border-slate-200 text-slate-300 hover:text-red-500 hover:border-red-200 shadow-sm transition-all hover:scale-110 active:scale-95">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-10 border-t border-slate-100 bg-slate-50/30 flex flex-col sm:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 italic">
            Operational Node Scan: <span className="text-slate-950 font-black">{filteredContacts.length} Entities</span> Captured
          </p>
          <div className="flex gap-4">
             <button className="px-8 py-4 rounded-[1.5rem] bg-white border border-slate-200 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 hover:border-orange-200 disabled:opacity-30 transition-all shadow-sm active:scale-95" disabled>Previous Sequence</button>
             <button className="px-8 py-4 rounded-[1.5rem] bg-orange-600 text-[11px] font-black uppercase tracking-widest text-white hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 active:scale-95 border-none italic">Advance Protocol</button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
