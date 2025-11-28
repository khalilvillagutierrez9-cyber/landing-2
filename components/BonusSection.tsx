import React from 'react';
import { BookOpen, Users, Video } from 'lucide-react';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      icon: <BookOpen size={24} />,
      title: "BONUS #1: Recetario 'Hashimoto Sin Culpa'",
      value: "Valor: $47",
      desc: "Más de 50 recetas deliciosas sin gluten, lácteos ni soja. Desde desayunos energéticos hasta postres que no inflaman."
    },
    {
      icon: <Video size={24} />,
      title: "BONUS #2: Masterclass 'Suplementación Inteligente'",
      value: "Valor: $97",
      desc: "Aprende qué suplementos realmente funcionan (Selenio, Zinc, Magnesio) y cuáles son una pérdida de dinero."
    },
    {
      icon: <Users size={24} />,
      title: "BONUS #3: Comunidad Privada de Soporte",
      value: "Valor: Incalculable",
      desc: "Acceso exclusivo a nuestro grupo de alumnas. Comparte logros, resuelve dudas y siéntete acompañada en el proceso."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Regalos Exclusivos si Te Unes Hoy</h2>
          <p className="text-slate-300">Hemos incluido estas herramientas adicionales para asegurar tu éxito.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 relative overflow-hidden group hover:border-teal-500 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-teal-500/20 transition-all"></div>
              
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                {bonus.icon}
              </div>
              
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2">{bonus.value}</div>
              <h3 className="text-lg font-bold mb-3">{bonus.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{bonus.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-teal-900 to-slate-800 rounded-2xl border border-teal-700/50 text-center">
            <p className="text-lg font-medium text-teal-50">
                Valor Total de los Bonus: <span className="font-bold text-white text-2xl ml-2 strike-through decoration-rose-500">$144+</span> <span className="text-sm font-normal ml-2">(GRATIS con tu inscripción)</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;