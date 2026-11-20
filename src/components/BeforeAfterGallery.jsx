import React, { useState } from 'react';
import { GALLERY_PROJECTS } from '../data/mockDatabase';
import { ArrowLeftRight, Check, MapPin, DollarSign, Clock, Image as ImageIcon } from 'lucide-react';

export default function BeforeAfterGallery({ setActivePage }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sliderPositions, setSliderPositions] = useState({
    'proj-1': 50,
    'proj-2': 50,
    'proj-3': 50,
    'proj-4': 50
  });

  const filteredProjects = selectedFilter === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(p => p.category === selectedFilter);

  const handleSliderChange = (id, val) => {
    setSliderPositions(prev => ({ ...prev, [id]: val }));
  };

  return (
    <section className="py-10 sm:py-16 bg-white border-t border-brand-cardBorder">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy/10 text-brand-navy rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <ImageIcon className="w-3.5 h-3.5 text-brand-orange" />
            Verified Local Transformations
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading text-brand-navy tracking-tight">
            Before & After Project Gallery
          </h2>
          <p className="text-xs sm:text-sm text-brand-textMuted mt-1">
            Drag the interactive slider on each project to inspect the exact before & after craftsmanship.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
              selectedFilter === 'all'
                ? 'bg-brand-navy text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Recent Work
          </button>
          <button
            onClick={() => setSelectedFilter('carpentry')}
            className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
              selectedFilter === 'carpentry'
                ? 'bg-brand-navy text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Trim & Carpentry
          </button>
          <button
            onClick={() => setSelectedFilter('drywall-paint')}
            className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
              selectedFilter === 'drywall-paint'
                ? 'bg-brand-navy text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Drywall Repairs
          </button>
          <button
            onClick={() => setSelectedFilter('exterior-decks')}
            className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
              selectedFilter === 'exterior-decks'
                ? 'bg-brand-navy text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Decks & Railings
          </button>
          <button
            onClick={() => setSelectedFilter('fixtures')}
            className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
              selectedFilter === 'fixtures'
                ? 'bg-brand-navy text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Vanities & Fixtures
          </button>
        </div>

        {/* 2-Column Responsive Grid on Desktop; 1-Column on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((proj) => {
            const pos = sliderPositions[proj.id] ?? 50;

            return (
              <div 
                key={proj.id}
                className="bg-brand-grayBg rounded-xl border border-brand-cardBorder overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Interactive Slider Container */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden select-none bg-slate-800">
                  {/* AFTER Image (Background) */}
                  <img
                    src={proj.afterImg}
                    alt={`${proj.title} After`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-emerald-600/90 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded shadow z-10 uppercase tracking-wider">
                    After
                  </div>

                  {/* BEFORE Image (Clipped Overlay) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${pos}%` }}
                  >
                    <img
                      src={proj.beforeImg}
                      alt={`${proj.title} Before`}
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{ width: '100%', minWidth: '100%', objectFit: 'cover' }}
                    />
                    <div className="absolute top-2 left-2 bg-slate-900/90 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded shadow z-10 uppercase tracking-wider">
                      Before
                    </div>
                  </div>

                  {/* Divider Line & Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                    style={{ left: `${pos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg border-2 border-white">
                      <ArrowLeftRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Range Input for Touch/Mouse Drag */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={pos}
                    onChange={(e) => handleSliderChange(proj.id, Number(e.target.value))}
                    aria-label={`Slide before and after for ${proj.title}`}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  />
                </div>

                {/* Slider Instruction Helper */}
                <div className="bg-slate-100 text-slate-500 text-[11px] py-1 px-3 text-center border-b border-slate-200 flex items-center justify-center gap-1">
                  <ArrowLeftRight className="w-3 h-3 text-brand-orange" />
                  <span>Drag left or right to compare</span>
                </div>

                {/* Details Breakdown */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy">
                        {proj.title}
                      </h3>
                      <span className="text-xs font-bold text-slate-600 flex items-center bg-white px-2 py-0.5 rounded border border-slate-200">
                        <MapPin className="w-3 h-3 mr-1 text-brand-orange" />
                        {proj.location}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-3 bg-white p-2.5 rounded-lg border border-slate-200">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Job Time</span>
                        <span className="font-semibold text-slate-800 flex items-center">
                          <Clock className="w-3 h-3 mr-1 text-slate-500" />
                          {proj.duration}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Final Invoiced</span>
                        <span className="font-semibold text-emerald-700 flex items-center font-heading">
                          <DollarSign className="w-3 h-3 text-emerald-600" />
                          {proj.cost}
                        </span>
                      </div>
                    </div>

                    {/* Scope Checklist */}
                    <div className="space-y-1 mb-4">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block">
                        Work Performed:
                      </span>
                      <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700">
                        {proj.scope.map((item, idx) => (
                          <div key={idx} className="flex items-center">
                            <Check className="w-3 h-3 text-emerald-600 mr-1 flex-shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActivePage('calculator')}
                    className="w-full py-2 bg-brand-navy hover:bg-brand-navyDark text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center uppercase tracking-wider"
                  >
                    Request Similar Project Estimate
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
