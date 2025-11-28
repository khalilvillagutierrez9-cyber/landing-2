import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-5 max-w-md md:max-w-2xl text-center">
        
        {/* Eyebrow */}
        <div className="inline-block bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-6">
          Para mujeres con Hashimoto
        </div>

        {/* H1 Headline - Mobile Optimized */}
        <h1 className="text-[2.5rem] leading-[1.1] font-extrabold text-slate-900 mb-6">
          ¿Tus análisis dicen "Normal" pero tú te sientes <span className="text-teal-600 underline decoration-teal-300 decoration-4">Fatal</span>?
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Descubre el método de 3 pasos para apagar la inflamación, recuperar tu pelo y despertar con energía en 12 semanas.
        </p>

        {/* Mobile Optimized Visual */}
        <div className="relative mb-8 mx-auto w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2">
            <img 
              src="https://picsum.photos/seed/happywoman/600/600" 
              alt="Mujer con energía" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <span className="text-white font-bold text-lg">Sin dietas extremas</span>
                <div className="flex text-yellow-400 gap-1 text-sm">
                    ★★★★★ <span>(4.9/5)</span>
                </div>
            </div>
        </div>

        {/* Primary CTA */}
        <a 
            href="https://sistematiroidessana.online/cart"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xl py-4 rounded-xl shadow-xl shadow-teal-200 transition-all active:scale-95 mb-4"
        >
            VER LA OFERTA
        </a>
        
        <p className="text-xs text-slate-400 flex justify-center items-center gap-1">
            <ArrowDown size={14} className="animate-bounce" />
            Sigue leyendo para entender por qué
        </p>
      </div>
    </section>
  );
};

export default Hero;