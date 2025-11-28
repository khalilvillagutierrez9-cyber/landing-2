import React from 'react';
import { Activity, AlertCircle, Shield } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section className="py-20 bg-lavender-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-teal-200 rounded-3xl transform rotate-3 scale-105 opacity-30"></div>
            <img 
              src="https://picsum.photos/seed/medical/600/500" 
              alt="Ilustración sistema inmune" 
              className="relative rounded-3xl shadow-xl w-full object-cover z-10"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-100 text-lavender-800 text-xs font-bold uppercase">
              <Activity size={14} />
              Entendiendo tu cuerpo
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              No es tu tiroides,<br />
              <span className="text-teal-600">es tu sistema inmune.</span>
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed">
              La mayoría de los tratamientos se enfocan solo en reemplazar la hormona que falta (T4). Pero en Hashimoto, el problema real es que <strong>tu sistema inmune está atacando tu propio tejido</strong>.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-rose-500">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">El error común</h4>
                  <p className="text-sm text-slate-600">Tratar solo el síntoma (hormonas bajas) sin apagar el incendio (inflamación).</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-teal-600">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">La solución real</h4>
                  <p className="text-sm text-slate-600">Calmar al sistema inmune eliminando detonantes dietéticos, ambientales y de estrés.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;