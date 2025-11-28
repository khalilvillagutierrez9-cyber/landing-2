import React from 'react';
import { AlertTriangle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const pains = [
    "Te levantas más cansada de lo que te acostaste.",
    "Tu pelo se queda en el cepillo y tus uñas se rompen.",
    "Haces dieta estricta pero la balanza sigue subiendo.",
    "Tienes 'niebla mental' y olvidas palabras simples."
  ];

  return (
    <section className="py-12 bg-rose-50 border-y border-rose-100">
      <div className="container mx-auto px-5 max-w-md">
        <div className="flex items-center gap-2 mb-6 justify-center text-rose-600 font-bold uppercase tracking-widest text-sm">
            <AlertTriangle size={18} />
            Identifícate
        </div>
        
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">
          Si sientes esto, no es tu culpa:
        </h2>

        <div className="space-y-4">
          {pains.map((pain, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-rose-400 flex items-start gap-3">
              <div className="min-w-[8px] h-[8px] mt-2 rounded-full bg-rose-400" />
              <p className="text-slate-700 font-medium leading-snug">{pain}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;