import React from 'react';
import { Check, Lock, Gift } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-12 bg-white" id="oferta">
      <div className="container mx-auto px-4 max-w-md">
        
        {/* Offer Container */}
        <div className="bg-white border-2 border-teal-500 rounded-3xl shadow-2xl overflow-hidden relative">
          
          {/* Header */}
          <div className="bg-teal-600 p-6 text-center text-white">
            <h2 className="text-2xl font-bold uppercase tracking-wide">Oferta Limitada</h2>
            <p className="text-teal-100 text-sm mt-1">Acceso inmediato y de por vida</p>
          </div>

          {/* Pricing Main */}
          <div className="p-6 text-center bg-teal-50/50">
             <div className="text-slate-400 line-through text-lg font-medium">Precio Regular: $297</div>
             <div className="text-5xl font-extrabold text-teal-700 my-2">$97<span className="text-xl font-normal text-slate-500">usd</span></div>
             <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold border border-yellow-200 mb-4">
                AHORRAS 70% HOY
             </div>
          </div>

          {/* The Stack */}
          <div className="px-6 pb-6 space-y-4">
             <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Lo que recibes:</div>
             
             <ul className="space-y-3">
                <li className="flex gap-3 text-left">
                   <Check className="text-teal-500 shrink-0" size={20} />
                   <span className="text-slate-700 font-medium">Programa Completo 12 Semanas <span className="text-slate-400 text-xs block">Valor $197</span></span>
                </li>
                <li className="flex gap-3 text-left">
                   <Check className="text-teal-500 shrink-0" size={20} />
                   <span className="text-slate-700 font-medium">Plan de Comidas Antiinflamatorio <span className="text-slate-400 text-xs block">Valor $47</span></span>
                </li>
                <li className="flex gap-3 text-left">
                   <Check className="text-teal-500 shrink-0" size={20} />
                   <span className="text-slate-700 font-medium">Guía de Suplementos <span className="text-slate-400 text-xs block">Valor $27</span></span>
                </li>
             </ul>

             {/* Bonuses */}
             <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mt-4">
                <div className="flex items-center gap-2 mb-3 text-rose-500 font-bold">
                    <Gift size={18} />
                    <span>TUS BONUS GRATIS:</span>
                </div>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                        Recetario de Postres Sanos
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                        Masterclass de Estrés
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                        Comunidad Privada
                    </li>
                </ul>
             </div>

             {/* Button */}
             <a 
                href="https://sistematiroidessana.online/cart"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-bold text-xl py-4 rounded-xl shadow-lg mt-4 animate-pulse transition-all"
             >
                DESCARGAR AHORA
             </a>

             {/* Security */}
             <div className="flex justify-center items-center gap-2 mt-4 text-[10px] text-slate-400">
                <Lock size={12} />
                Pago Seguro 256-bit SSL
             </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-8 flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <img src="https://cdn-icons-png.flaticon.com/512/929/929440.png" alt="Garantia" className="w-12 h-12 grayscale opacity-70" />
            <div>
                <h4 className="font-bold text-slate-900 text-sm">Garantía de 30 Días</h4>
                <p className="text-xs text-slate-500 leading-tight">Si no sientes cambios, te devolvemos el 100% de tu dinero. Sin preguntas.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;