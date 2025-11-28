import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const Differentiator: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-5 max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8 text-slate-900">
          ¿Por qué nada te ha funcionado hasta ahora?
        </h2>

        {/* The Old Way Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6 relative">
          <div className="absolute -top-3 left-6 bg-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
            Lo Tradicional
          </div>
          <ul className="space-y-4 mt-2">
            <li className="flex items-start gap-3">
              <XCircle className="text-red-400 shrink-0 mt-1" size={24} />
              <p className="text-slate-600 text-sm">Te dicen que "todo está en tu cabeza" y te recetan antidepresivos.</p>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="text-red-400 shrink-0 mt-1" size={24} />
              <p className="text-slate-600 text-sm">Solo ajustan la dosis de T4 (Levotiroxina) sin mirar la inflamación.</p>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="text-red-400 shrink-0 mt-1" size={24} />
              <p className="text-slate-600 text-sm">Te mandan a "comer menos y ejercitar más", lo que destroza más tu metabolismo.</p>
            </li>
          </ul>
        </div>

        {/* The New Way Card */}
        <div className="bg-teal-50 border-2 border-teal-500 rounded-2xl p-6 shadow-lg relative transform scale-105">
           <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
            Hashimoto Vitality
          </div>
          <ul className="space-y-4 mt-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-teal-600 shrink-0 mt-1 fill-teal-100" size={24} />
              <p className="text-slate-800 font-medium text-sm">Nos enfocamos en <span className="underline decoration-teal-400 decoration-2">apagar el ataque autoinmune</span>.</p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-teal-600 shrink-0 mt-1 fill-teal-100" size={24} />
              <p className="text-slate-800 font-medium text-sm">Nutrición densa que repara tu intestino (donde nace el 70% de tu inmunidad).</p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-teal-600 shrink-0 mt-1 fill-teal-100" size={24} />
              <p className="text-slate-800 font-medium text-sm">Ejercicios específicos que NO elevan tu cortisol.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;