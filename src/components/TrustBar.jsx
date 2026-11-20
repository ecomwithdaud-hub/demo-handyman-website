import React from 'react';
import { TRUST_PILLARS } from '../data/mockDatabase';
import { ShieldCheck, Award, Sparkles, CheckSquare } from 'lucide-react';

export default function TrustBar() {
  const getIcon = (title) => {
    if (title.includes('Pricing')) return CheckSquare;
    if (title.includes('Warranty')) return Award;
    if (title.includes('Insured')) return ShieldCheck;
    return Sparkles;
  };

  return (
    <section className="bg-white border-y border-brand-cardBorder py-6 sm:py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* On mobile: 2 columns; On tablet/desktop: 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_PILLARS.map((item, idx) => {
            const Icon = getIcon(item.title);
            return (
              <div 
                key={idx}
                className="flex flex-col sm:flex-row items-start sm:items-center text-left p-2.5 sm:p-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-brand-navy/10 flex items-center justify-center text-brand-navy mb-2 sm:mb-0 sm:mr-3 flex-shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-navy uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-brand-textMuted leading-tight mt-0.5 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
