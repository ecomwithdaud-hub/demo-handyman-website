import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/mockDatabase';
import { Phone, ArrowRight, ShieldCheck, Star, Award, CheckCircle2, Calculator } from 'lucide-react';

export default function Hero({ setActivePage, onQuickStart }) {
  const [quickService, setQuickService] = useState('finish-carpentry');
  const [quickTown, setQuickTown] = useState('Manchester');

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (onQuickStart) {
      onQuickStart({ serviceId: quickService, town: quickTown });
    } else {
      setActivePage('calculator');
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-brand-navyDark via-brand-navy to-[#0F2846] text-white pt-8 pb-14 sm:pt-14 sm:pb-20 overflow-hidden">
      {/* Subtle geometric grid background pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Proof */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            {/* Top Pill / Trust Notice */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold text-amber-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Prompt Dispatch Available This Week in Southern NH</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.08] text-white font-heading">
              Done Right <span className="text-brand-orange underline decoration-brand-orange/60 underline-offset-4">The First Time.</span>
              <br />
              <span className="text-slate-200 text-2xl sm:text-4xl lg:text-5xl font-normal block mt-1">
                Zero Excuses. Zero Hidden Fees.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl font-normal leading-relaxed">
              We specialize in finish carpentry, seamless drywall repairs, bathroom fixture upgrades, deck restorations, and running punch lists across New Hampshire.
            </p>

            {/* Trust Points (Mobile friendly 2-col grid) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 py-1 sm:py-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                <span>Upfront Written Pricing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                <span>1-Year Workmanship Warranty</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                <span>Fully Licensed & $2M Insured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                <span>Background-Checked Pros</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => setActivePage('calculator')}
                className="px-6 py-3.5 bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-base uppercase tracking-wider rounded-lg shadow-lg flex items-center justify-center transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Build Instant Estimate
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm rounded-lg flex items-center justify-center transition-all"
              >
                <Phone className="w-4 h-4 text-brand-orange mr-2" />
                Call: {COMPANY_INFO.phone}
              </a>
            </div>

            {/* Social Proof Stats Strip */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white text-sm">4.9 / 5.0</span>
                <span className="text-slate-400">({COMPANY_INFO.reviewCount} local reviews)</span>
              </div>

              <div className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-brand-orange" />
                <span className="font-bold text-white">{COMPANY_INFO.jobsCompleted}+</span>
                <span>Repairs Finished</span>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Quick Estimate Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl shadow-2xl p-5 sm:p-7 text-brand-textDark border-2 border-brand-cardBorder relative">
              <div className="absolute -top-3 right-5 bg-brand-navy text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-brand-orange">
                Instant 60-Sec Quote
              </div>

              <div className="mb-4 text-left">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
                  Need a Handyman Fast?
                </h3>
                <p className="text-xs text-brand-textMuted mt-0.5">
                  Select your project to see approximate pricing and dispatch schedule.
                </p>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-3.5 text-left text-xs sm:text-sm">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    What project do you need help with?
                  </label>
                  <select
                    value={quickService}
                    onChange={(e) => setQuickService(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 text-xs sm:text-sm focus:ring-2 focus:ring-brand-navy focus:outline-none"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} ({s.priceEstimate})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Town / City (Southern NH)
                  </label>
                  <select
                    value={quickTown}
                    onChange={(e) => setQuickTown(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 text-xs sm:text-sm focus:ring-2 focus:ring-brand-navy focus:outline-none"
                  >
                    <option value="Manchester">Manchester, NH (Same-Day)</option>
                    <option value="Bedford">Bedford, NH (Same-Day)</option>
                    <option value="Concord">Concord, NH</option>
                    <option value="Nashua">Nashua, NH (Same-Day)</option>
                    <option value="Derry">Derry, NH</option>
                    <option value="Londonderry">Londonderry, NH</option>
                    <option value="Salem">Salem, NH</option>
                    <option value="Hooksett">Hooksett, NH</option>
                    <option value="Other">Other NH Town</option>
                  </select>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-500 block">Typical Estimate Range:</span>
                    <span className="font-extrabold text-brand-navy text-sm sm:text-base">
                      {SERVICES_DATA.find(s => s.id === quickService)?.priceEstimate || '$120 - $350'}
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-800 font-bold text-[10px] rounded">
                    Guaranteed Rate
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-sm uppercase tracking-wider rounded-lg shadow transition-colors flex items-center justify-center"
                >
                  Continue to Estimate Builder
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  🔒 No obligation. Direct local craftsman response within 1 hour.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
