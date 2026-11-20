import React, { useState } from 'react';
import { SERVICES_DATA, SERVICE_CATEGORIES } from '../data/mockDatabase';
import { Check, Clock, Tag, ArrowRight, Wrench, Sparkles } from 'lucide-react';

export default function ServicesSection({ setActivePage, onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const handleBookService = (service) => {
    if (onSelectService) {
      onSelectService(service);
    } else {
      setActivePage('calculator');
    }
  };

  return (
    <section id="services-section" className="py-10 sm:py-16 bg-brand-grayBg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy/10 text-brand-navy rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Wrench className="w-3.5 h-3.5 text-brand-orange" />
            Clear Upfront Pricing
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading text-brand-navy tracking-tight">
            Our Core Handyman Services
          </h2>
          <p className="text-xs sm:text-sm text-brand-textMuted mt-1.5">
            Transparent estimated rates for the most common home repairs in Southern New Hampshire.
          </p>
        </div>

        {/* Category Filter Pills (Horizontal scrollable on mobile) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 mb-6 sm:mb-8 pb-2">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid: 2 columns on mobile, 3 on tablet, 4 columns on large screens! */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-brand-cardBorder hover:border-brand-slate hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden group text-left"
            >
              {/* Card Header & Badge */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2 gap-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-navy/10 text-brand-navy uppercase tracking-wider">
                    {service.badge}
                  </span>
                  <div className="flex items-center text-[10px] sm:text-xs text-slate-500">
                    <Clock className="w-3 h-3 mr-1 text-slate-400" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xs sm:text-base text-brand-navy group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 line-clamp-2 sm:line-clamp-3">
                  {service.description}
                </p>

                {/* Common Checklist (Compact for mobile) */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Typical Tasks:
                  </span>
                  {service.commonJobs.slice(0, 3).map((job, idx) => (
                    <div key={idx} className="flex items-start text-[10px] sm:text-[11px] text-slate-700">
                      <Check className="w-3 h-3 text-emerald-600 mr-1 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{job}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Pricing & Action */}
              <div className="bg-slate-50 p-2.5 sm:p-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-slate-500 block leading-tight">Estimate</span>
                  <span className="font-heading font-bold text-xs sm:text-sm text-brand-navy">
                    {service.priceEstimate}
                  </span>
                </div>

                <button
                  onClick={() => handleBookService(service)}
                  className="px-2.5 sm:px-3 py-1.5 bg-brand-orange hover:bg-brand-orangeHover text-white text-[11px] sm:text-xs font-bold rounded-lg shadow-sm transition-all flex items-center flex-shrink-0"
                >
                  <span>Select</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Running Punchlist Banner */}
        <div className="mt-8 sm:mt-12 bg-brand-navy text-white rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          <div className="text-center md:text-left">
            <h4 className="font-heading font-bold text-lg sm:text-xl uppercase tracking-wide flex items-center justify-center md:justify-start">
              <Sparkles className="w-5 h-5 text-brand-orange mr-2" />
              Have Multiple Small Fixes? Book a 4-Hour Punch List!
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Save up to 25% by grouping 4 to 8 small honey-do repairs into a single flat-rate afternoon block ($280 – $490).
            </p>
          </div>
          <button
            onClick={() => setActivePage('calculator')}
            className="px-5 py-2.5 bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-lg flex-shrink-0 transition-colors"
          >
            Book Half-Day Block
          </button>
        </div>

      </div>
    </section>
  );
}
