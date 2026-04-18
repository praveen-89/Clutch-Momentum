"use client";

import { useState } from "react";
import { MOCK_BRANDS, Brand } from "@/data/mock/brands";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { PremiumInput } from "@/components/ui/premium-input";
import { 
  ShieldAlert, 
  Plus, 
  Trash2, 
  Save,
  Italic,
  Eye
} from "lucide-react";

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
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">Brand Visuals</h1>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Manage featured brand logos for homepage trust section</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add Brand Form */}
        <GlassCard className="lg:col-span-1 p-8 border-slate-800 bg-slate-950/50 space-y-6 self-start">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 mb-6 flex items-center gap-2">
            <Plus size={14} /> Add New Brand
          </h2>
          
          <PremiumInput 
            label="Display Name" 
            placeholder="e.g. Nike" 
            value={newBrand.name}
            onChange={(e) => setNewBrand({...newBrand, name: e.target.value})}
          />
          
          <PremiumInput 
            label="Logo Text (Uppercase)" 
            placeholder="e.g. NIKE" 
            value={newBrand.logoText}
            onChange={(e) => setNewBrand({...newBrand, logoText: e.target.value.toUpperCase()})}
          />

          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <div className="flex items-center gap-2">
              <Italic size={14} className="text-slate-500" />
              <span className="text-[10px] font-black uppercase tracking-widest">Italic Style</span>
            </div>
            <button 
              onClick={() => setNewBrand({...newBrand, italic: !newBrand.italic})}
              className={`w-10 h-6 rounded-full transition-colors relative ${newBrand.italic ? 'bg-blue-600' : 'bg-slate-800'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${newBrand.italic ? 'left-5' : 'left-1'}`} />
            </button>
          </div>

          <div className="pt-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
              <Eye size={12} /> Live Preview
            </h3>
            <div className="p-8 rounded-xl border border-dashed border-slate-800 bg-slate-900/20 flex items-center justify-center">
              <div className={`text-3xl font-black uppercase tracking-tight ${newBrand.italic ? 'italic' : ''} text-white/40`}>
                {newBrand.logoText || "PREVIEW"}
              </div>
            </div>
          </div>

          <CapsuleButton onClick={addBrand} className="w-full bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
            Deploy to Homepage
          </CapsuleButton>
        </GlassCard>

        {/* Brand List */}
        <GlassCard className="lg:col-span-2 border-slate-800 bg-slate-950/50 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/50 border-b border-slate-800">
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Brand Name</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Logo Representation</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900">
              {brands.map((brand) => (
                <tr key={brand.id} className="hover:bg-blue-600/[0.02] transition-colors group">
                  <td className="p-5">
                    <p className="text-sm font-bold text-white leading-none">{brand.name}</p>
                    <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold">Active Deployment</p>
                  </td>
                  <td className="p-5">
                    <div className={`text-xl font-black uppercase tracking-tight opacity-40 ${brand.italic ? 'italic' : ''}`}>
                      {brand.logoText}
                    </div>
                  </td>
                  <td className="p-5 text-right">
                    <button 
                      onClick={() => removeBrand(brand.id)}
                      className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {brands.length === 0 && (
            <div className="p-20 text-center space-y-4">
              <ShieldAlert size={48} className="mx-auto text-slate-800" />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">The trust sequence is currently empty</p>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
