import React from 'react';
import { Utensils, HeartPulse, ShieldCheck } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-teal-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">El Método Hashimoto Vitality</h2>
            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
              No se trata de tapar síntomas con pastillas. Se trata de abordar la raíz autoinmune. Hemos diseñado un protocolo de 3 fases para calmar tu sistema inmune.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-800 flex items-center justify-center border border-teal-700">
                  <Utensils size={24} className="text-teal-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Fase 1: Desinflamación Nutricional</h3>
                  <p className="text-teal-200 text-sm">Eliminamos reactivos comunes (gluten, lácteos, soja) y nutrimos con alimentos densos para sanar el intestino permeable.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-800 flex items-center justify-center border border-teal-700">
                  <HeartPulse size={24} className="text-teal-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Fase 2: Gestión de Estrés y Cortisol</h3>
                  <p className="text-teal-200 text-sm">El estrés dispara tu tiroides. Aprenderás técnicas simples pero potentes para regular tu sistema nervioso.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-800 flex items-center justify-center border border-teal-700">
                  <ShieldCheck size={24} className="text-teal-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Fase 3: Reintroducción y Mantenimiento</h3>
                  <p className="text-teal-200 text-sm">Identifica tus propios disparadores y crea un estilo de vida sostenible, sin vivir a dieta para siempre.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-teal-800">
             <img 
               src="https://picsum.photos/seed/food/600/800" 
               alt="Comida saludable antiinflamatoria" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-2xl font-bold text-white">"La comida es información para tus genes."</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;