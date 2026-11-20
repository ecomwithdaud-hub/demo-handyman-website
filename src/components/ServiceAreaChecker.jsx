import React, { useState } from 'react';
import { SERVICE_AREAS } from '../data/mockDatabase';
import { MapPin, Search, CheckCircle2, Clock, Truck } from 'lucide-react';

export default function ServiceAreaChecker({ setActivePage }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = SERVICE_AREAS.filter(area => 
    area.town.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.zip.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-10 sm:py-16 bg-brand-grayBg border-t border-brand-cardBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy/10 text-brand-navy rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Truck className="w-3.5 h-3.5 text-brand-orange" />
            Local New Hampshire Radius
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading text-brand-navy">
            Service Areas & Dispatch Radius
          </h2>
          <p className="text-xs sm:text-sm text-brand-textMuted mt-1">
            Our vans are stocked and strategically routed across Southern New Hampshire daily.
          </p>

          {/* Quick Search Input */}
          <div className="mt-5 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by town name or ZIP code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm shadow-sm focus:ring-2 focus:ring-brand-navy focus:outline-none"
            />
          </div>
        </div>

        {/* Areas Cards Grid (4 columns on desktop, 2 on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 hover:border-brand-slate shadow-sm hover:shadow transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-brand-navy flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange mr-1" />
                    {area.town}, NH
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" title="Active Route" />
                </div>
                <div className="text-[11px] text-slate-500">
                  ZIP: <span className="font-mono text-slate-700">{area.zip}</span>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="flex items-center text-slate-600">
                  <Clock className="w-3 h-3 mr-1 text-brand-slate" />
                  {area.eta}
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                  Covered
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredAreas.length === 0 && (
          <div className="p-8 bg-white rounded-xl border border-dashed border-slate-300 text-center max-w-md mx-auto">
            <p className="text-sm font-semibold text-slate-700">
              Don't see your town listed?
            </p>
            <p className="text-xs text-slate-500 mt-1">
              We frequently service bordering towns within a 35-mile radius of Manchester/Concord.
            </p>
            <button
              onClick={() => setActivePage('calculator')}
              className="mt-3 px-4 py-2 bg-brand-navy text-white text-xs font-bold rounded-lg"
            >
              Inquire About Custom Dispatch
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
