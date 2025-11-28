import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 500px (approx past Hero)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto max-w-md">
        <a 
          href="https://sistematiroidessana.online/cart"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg py-3 rounded-xl shadow-lg transition-all active:scale-95"
        >
          QUIERO MI PLAN AHORA
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;