"use client";

import { useState } from "react";
import { MOCK_BRANDS, Brand } from "@/data/mock/brands";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { PremiumInput } from "@/components/ui/premium-input";
import { 
  Plus, 
  Trash2, 
  Italic,
  Eye,
  Globe,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

export default function ManageBrandsPage() {
  const [brands, setBrands] = useState<Brand[]>(MOCK_BRANDS);
  const [newBrand, setNewBrand] = useState({ name: "", logoText: "", italic: true });

  const addBrand = () => {
    if (newBrand.name && newBrand.logoText) {
      const brand: Brand = {
        id: (brands.length + 1).toString(),
        ...newBrand
      };
      setBrands([...brands, brand]);
      setNewBrand({ name: "", logoText: "", italic: true });
    }
  };

  const removeBrand = (id: string) => {
    setBrands(brands.filter(b => b.id !== id));
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
                <Globe size={12} className="text-orange-600" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600">Global Partner Visibility</span>
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-slate-950 leading-none">
                Brand <span className="text-orange-600 text-glow">Visuals.</span>
            </h1>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-2">
                Manage featured brand logos for homepage trust section
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Add Brand Form */}
        <GlassCard className="lg:col-span-1 p-10 border-slate-200 bg-white/70 space-y-8 self-start shadow-xl shadow-slate-200/40 transition-all hover:shadow-orange-500/5 hover:bg-white duration-500">
          <div className="space-y-1">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 flex items-center gap-3">
                <Plus size={16} /> Configuration Node
              </h2>
              <p className="text-xl font-black italic uppercase tracking-tight text-slate-900 leading-none mt-1">Add New Entity</p>
          </div>
          
          <div className="space-y-6">
            <PremiumInput 
                label="Display Name" 
                placeholder="e.g. Nike" 
                value={newBrand.name}
                onChange={(e) => setNewBrand({...newBrand, name: e.target.value})}
                className="bg-slate-50 focus:border-orange-500/50"
            />
            
            <PremiumInput 
                label="Logo Text (Uppercase)" 
                placeholder="e.g. NIKE" 
                value={newBrand.logoText}
                onChange={(e) => setNewBrand({...newBrand, logoText: e.target.value.toUpperCase()})}
                className="bg-slate-50 focus:border-orange-500/50"
            />

            <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm transition-all hover:border-orange-100 group">
                <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-400 group-hover:text-orange-600 group-hover:border-orange-200 transition-all">
                    <Italic size={14} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Italic Style</span>
                </div>
                <button 
                onClick={() => setNewBrand({...newBrand, italic: !newBrand.italic})}
                className={`w-12 h-7 rounded-full transition-all relative ${newBrand.italic ? 'bg-orange-600 shadow-lg shadow-orange-600/20' : 'bg-slate-200'}`}
                >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-all ${newBrand.italic ? 'left-6' : 'left-1'}`} />
                </button>
            </div>

            <div className="pt-4 space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-3">
                <Eye size={12} /> Render Preview
                </h3>
                <div className="p-12 rounded-[2rem] border border-dashed border-slate-200 bg-slate-50/50 flex items-center justify-center min-h-[140px] shadow-inner relative overflow-hidden group/prev">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover/prev:opacity-100 transition-opacity pointer-events-none" />
                    <div className={`text-4xl font-black uppercase tracking-tighter ${newBrand.italic ? 'italic' : ''} text-slate-200 group-hover/prev:text-orange-600/20 transition-all duration-1000 scale-90 group-hover/prev:scale-110 z-10`}>
                        {newBrand.logoText || "PREVIEW"}
                    </div>
                </div>
            </div>

            <CapsuleButton onClick={addBrand} className="w-full bg-orange-600 hover:bg-orange-700 py-6 text-white shadow-xl shadow-orange-600/20 active:scale-95 border-none">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] italic">Deploy to Network</span>
            </CapsuleButton>
          </div>
        </GlassCard>

        {/* Brand List */}
        <GlassCard className="lg:col-span-2 border-slate-200 bg-white/70 overflow-hidden shadow-xl shadow-slate-200/40 transition-all hover:bg-white duration-500">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 font-black">
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Brand Parameters</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Visual Output</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Node Controls</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {brands.map((brand) => (
                  <tr key={brand.id} className="hover:bg-orange-50/20 transition-all duration-300 group">
                    <td className="p-8">
                      <p className="text-base font-black text-slate-900 leading-none mb-2 uppercase italic tracking-tighter group-hover:text-orange-600 transition-colors">{brand.name}</p>
                      <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse outline outline-4 outline-emerald-500/10" />
                          <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest leading-none">Status: In Production</p>
                      </div>
                    </td>
                    <td className="p-8">
                      <div className={`text-3xl font-black uppercase tracking-tighter text-slate-200 group-hover:text-slate-400 transition-all duration-1000 group-hover:scale-105 origin-left ${brand.italic ? 'italic' : ''}`}>
                        {brand.logoText}
                      </div>
                    </td>
                    <td className="p-8 text-right">
                      <button 
                        onClick={() => removeBrand(brand.id)}
                        className="p-3.5 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-200 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all shadow-sm active:scale-95"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {brands.length === 0 && (
            <div className="py-40 text-center space-y-6">
              <div className="w-24 h-24 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto shadow-inner text-slate-200">
                <Zap size={32} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Trust sequence yields zero entities</p>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
