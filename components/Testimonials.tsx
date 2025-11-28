import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-slate-100 overflow-hidden">
      <div className="container mx-auto px-5 max-w-md">
        <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">
          Ellas ya recuperaron su vida
        </h2>

        <div className="space-y-6">
          {/* Review 1 - WhatsApp Style */}
          <div className="flex flex-col gap-1">
            <span className="text-xs text-slate-500 ml-2">María F.</span>
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm relative border border-slate-200">
               <p className="text-slate-800 text-sm leading-relaxed">
                 "No puedo creer que en solo 3 semanas mi hinchazón haya bajado tanto. ¡Por fin me cierran mis jeans favoritos! 😭❤️"
               </p>
               <span className="text-[10px] text-slate-400 absolute bottom-1 right-3">10:42 AM</span>
            </div>
          </div>

          {/* Review 2 - WhatsApp Style */}
          <div className="flex flex-col gap-1 items-end">
            <span className="text-xs text-slate-500 mr-2">Carmen R.</span>
            <div className="bg-green-100 p-4 rounded-2xl rounded-tr-none shadow-sm relative border border-green-200 max-w-[90%]">
               <p className="text-slate-800 text-sm leading-relaxed">
                 "Chicas, mis anticuerpos bajaron a la mitad. Mi endocrino me preguntó qué estaba haciendo. ¡Este programa es oro!"
               </p>
               <span className="text-[10px] text-green-700/60 absolute bottom-1 right-3">14:15 PM</span>
            </div>
          </div>

          {/* Review 3 - WhatsApp Style */}
          <div className="flex flex-col gap-1">
             <span className="text-xs text-slate-500 ml-2">Sofía L.</span>
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm relative border border-slate-200">
               <p className="text-slate-800 text-sm leading-relaxed">
                 "Lo mejor es entender por fin qué comer. Ya no tengo miedo a la comida ni me siento pesada después de almorzar."
               </p>
               <span className="text-[10px] text-slate-400 absolute bottom-1 right-3">18:30 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;