import React from 'react';
import { Zap, Brain, Smile } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-5 max-w-md">
        <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">
          Lo que conseguirás en 12 semanas
        </h2>

        <div className="space-y-6">
            {/* Benefit 1 */}
            <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-xl text-teal-700 shrink-0">
                    <Zap size={28} />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-slate-900">Energía Real</h3>
                    <p className="text-slate-600 text-sm leading-snug">Deja de depender del café y las siestas para sobrevivir al día.</p>
                </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-xl text-teal-700 shrink-0">
                    <Brain size={28} />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-slate-900">Claridad Mental</h3>
                    <p className="text-slate-600 text-sm leading-snug">Vuelve a confiar en tu memoria y concéntrate en tu trabajo.</p>
                </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-xl text-teal-700 shrink-0">
                    <Smile size={28} />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-slate-900">Control de Peso</h3>
                    <p className="text-slate-600 text-sm leading-snug">Desinflama tu cuerpo para que tu metabolismo vuelva a funcionar.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;