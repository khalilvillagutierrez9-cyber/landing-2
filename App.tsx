import React from 'react';
import Hero from './components/Hero';
import Differentiator from './components/Differentiator';
import ProblemSection from './components/ProblemSection';
import BenefitsSection from './components/BenefitsSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import AIConsultant from './components/AIConsultant';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Simple Mobile Nav */}
      <nav className="bg-white border-b border-slate-100 py-3 sticky top-0 z-30">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="font-bold text-lg text-teal-700 flex items-center gap-1">
            <span className="bg-teal-600 text-white rounded px-1.5 py-0.5 text-sm">H</span>
            Vitality
          </div>
        </div>
      </nav>

      <main>
        {/* Mobile First Structure: Hook -> Fail vs Success -> Pain -> Solution -> Proof -> Offer */}
        <Hero />
        <Differentiator />
        <ProblemSection />
        <BenefitsSection />
        <Testimonials />
        <Pricing />
        <FAQ />
        
        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 text-sm text-center mb-16">
          <div className="container mx-auto px-6 max-w-md">
            <p className="mb-4 text-slate-500">
              Hashimoto Vitality &copy; {new Date().getFullYear()}
            </p>
            <p className="text-[10px] leading-relaxed text-slate-600">
              Este sitio no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio no está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
            </p>
            <p className="text-[10px] leading-relaxed text-slate-600 mt-4">
               La información aquí presentada no sustituye consejo médico. Consulta a tu endocrinólogo.
            </p>
          </div>
        </footer>
      </main>

      {/* Conversion Elements */}
      <AIConsultant />
      <StickyCTA />
    </div>
  );
};

export default App;