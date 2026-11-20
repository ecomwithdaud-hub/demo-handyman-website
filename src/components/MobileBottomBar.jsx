import React from 'react';
import { COMPANY_INFO } from '../data/mockDatabase';
import { Phone, Calculator } from 'lucide-react';

export default function MobileBottomBar({ setActivePage }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-300 p-2 shadow-2xl flex items-center gap-2">
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className="flex-1 flex items-center justify-center py-2.5 px-2 bg-brand-navy text-white text-xs font-bold rounded-lg shadow-sm active:bg-brand-navyDark"
      >
        <Phone className="w-4 h-4 text-brand-orange mr-1.5 animate-pulse" />
        <span>Call Now</span>
      </a>

      <button
        onClick={() => {
          setActivePage('calculator');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex-1 flex items-center justify-center py-2.5 px-2 bg-brand-orange text-white text-xs font-bold rounded-lg shadow-sm uppercase tracking-wide active:bg-brand-orangeHover"
      >
        <Calculator className="w-4 h-4 mr-1.5" />
        <span>Get Estimate</span>
      </button>
    </div>
  );
}
