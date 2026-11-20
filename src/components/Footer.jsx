import React from 'react';
import { COMPANY_INFO, SERVICE_AREAS } from '../data/mockDatabase';
import { Phone, Mail, MapPin, Shield, Wrench, Clock, Heart } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-brand-navyDark text-slate-300 border-t border-slate-800 text-left">
      {/* Top Footer Banner */}
      <div className="bg-brand-navy/60 border-b border-white/10 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading font-bold text-lg sm:text-xl text-white uppercase tracking-wider">
              Ready to cross those repairs off your Honey-Do list?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Call our friendly team or build an upfront written estimate in 60 seconds.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-4 py-2.5 bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow transition-colors flex items-center"
            >
              <Phone className="w-4 h-4 mr-1.5" />
              {COMPANY_INFO.phone}
            </a>

            <button
              onClick={() => {
                setActivePage('calculator');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-white/20 transition-colors"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Col 1: About & Trust */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-brand-navy flex items-center justify-center text-white border border-brand-orange">
              <Wrench className="w-4 h-4 text-brand-orange" />
            </div>
            <span className="font-heading font-bold text-xl text-white uppercase tracking-tight">
              Apex<span className="text-brand-orange">Pro</span>
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Professional, fully licensed and $2M insured handyman and home improvement services based in Southern New Hampshire. Dedicated to craftsmanship, transparent upfront rates, and zero excuses.
          </p>

          <div className="text-xs text-slate-400 space-y-1 pt-1">
            <div className="flex items-center text-emerald-400 font-semibold">
              <Shield className="w-3.5 h-3.5 mr-1.5" />
              {COMPANY_INFO.license}
            </div>
            <div className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
              {COMPANY_INFO.hours}
            </div>
          </div>
        </div>

        {/* Col 2: Services Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-3 pb-1 border-b border-slate-700/60">
            Core Services
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-400">
            <li><button onClick={() => setActivePage('services')} className="hover:text-white transition-colors">Finish Carpentry & Interior Trim</button></li>
            <li><button onClick={() => setActivePage('services')} className="hover:text-white transition-colors">Drywall Hole & Water Damage Repair</button></li>
            <li><button onClick={() => setActivePage('services')} className="hover:text-white transition-colors">Deck Board & Stair Railing Rebuilds</button></li>
            <li><button onClick={() => setActivePage('services')} className="hover:text-white transition-colors">Vanity & Plumbing Fixture Swaps</button></li>
            <li><button onClick={() => setActivePage('services')} className="hover:text-white transition-colors">TV Wall Mounting & Heavy Mirror Anchors</button></li>
            <li><button onClick={() => setActivePage('services')} className="hover:text-white transition-colors">Half-Day Punch List Block (Best Value)</button></li>
          </ul>
        </div>

        {/* Col 3: Towns Served (Local SEO) */}
        <div>
          <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-3 pb-1 border-b border-slate-700/60">
            Towns We Service
          </h4>
          <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-400">
            {SERVICE_AREAS.slice(0, 10).map((a, i) => (
              <span key={i} className="hover:text-white cursor-pointer" onClick={() => setActivePage('areas')}>
                • {a.town}, NH
              </span>
            ))}
          </div>
          <button 
            onClick={() => setActivePage('areas')} 
            className="text-[11px] text-brand-orange hover:underline font-bold mt-2 block"
          >
            View full 35-mile radius map →
          </button>
        </div>

        {/* Col 4: Contact & Direct Dispatch */}
        <div>
          <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-3 pb-1 border-b border-slate-700/60">
            Contact & Estimates
          </h4>
          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-start">
              <MapPin className="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
              <span>Headquarters: Manchester, NH 03104 (Mobile Dispatch Across NH)</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 text-brand-orange mr-2 flex-shrink-0" />
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white font-bold hover:text-brand-orange">
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 text-brand-orange mr-2 flex-shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="p-2.5 bg-white/5 rounded-lg border border-white/10 mt-2 text-[11px]">
              <span className="text-amber-300 font-bold block">Need Emergency Assistance?</span>
              <span>Broken pipe, stuck exterior door, or urgent boarding available 24/7.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Sub-footer */}
      <div className="bg-[#00142A] py-4 px-4 sm:px-6 border-t border-white/5 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} Apex Pro Handyman Services LLC. All rights reserved. Licensed & Insured in the State of NH.
          </span>
          <div className="flex items-center space-x-3 text-[11px]">
            <span className="text-slate-400">Crafted with Precision</span>
            <span>•</span>
            <button onClick={() => setActivePage('tracker')} className="text-slate-400 hover:text-brand-orange">
              Leads Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
