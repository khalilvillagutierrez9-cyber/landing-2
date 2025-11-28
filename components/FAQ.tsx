import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Necesito dejar mi medicación (Levotiroxina/Eutirox)?",
      a: "No. Este programa es complementario al tratamiento médico. De hecho, al bajar la inflamación, muchas alumnas descubren junto a sus médicos que necesitan ajustar sus dosis porque su cuerpo absorbe mejor la hormona. Nunca cambies tu medicación sin supervisión médica."
    },
    {
      q: "¿Es una dieta vegetariana/vegana?",
      a: "El programa es omnívoro flexible. Se basa en densidad nutricional. Si eres vegetariana, tenemos un módulo de adaptaciones, aunque recomendamos ciertas fuentes de proteína animal de alta calidad para la reparación intestinal."
    },
    {
      q: "¿Tengo que cocinar mucho?",
      a: "Sabemos que tienes fatiga, así que el plan está diseñado para 'cocinar una vez, comer dos veces'. Las recetas son sencillas y no requieren horas en la cocina."
    },
    {
      q: "¿Por cuánto tiempo tengo acceso al curso?",
      a: "El acceso es de por vida. Puedes hacerlo a tu propio ritmo y volver a consultar los materiales cuando lo necesites. Las actualizaciones futuras también están incluidas."
    },
    {
      q: "¿Qué pasa si no me funciona?",
      a: "Ofrecemos una garantía de satisfacción de 30 días. Si aplicas el método y no sientes ninguna mejora, te devolvemos el 100% de tu dinero. Sin preguntas incómodas."
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Preguntas Frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-800">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-teal-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;