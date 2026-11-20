import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockDatabase';
import { Phone, Clock, MapPin, Shield, Menu, X, Calculator, Wrench, Image, Star, ClipboardList } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Wrench },
    { id: 'services', label: 'Services & Pricing', icon: Wrench },
    { id: 'gallery', label: 'Before & After', icon: Image },
    { id: 'calculator', label: 'Instant Estimate', icon: Calculator },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'areas', label: 'Service Areas', icon: MapPin },
    { id: 'tracker', label: 'Leads Portal', icon: ClipboardList, badge: 'Live DB' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-cardBorder shadow-sm">
      {/* Top Utility Header (Corporate Trust Bar) */}
      <div className="bg-brand-navyDark text-slate-200 text-xs py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-3 text-[11px] sm:text-xs">
            <span className="flex items-center text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-orange mr-1" />
              Serving Manchester, Concord, Nashua & Southern NH
            </span>
            <span className="hidden md:inline-flex items-center text-slate-400">
              <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
              {COMPANY_INFO.hours}
            </span>
          </div>
          
          <div className="flex items-center space-x-3 text-[11px] sm:text-xs">
            <span className="hidden sm:inline-flex items-center font-medium text-emerald-400">
              <Shield className="w-3.5 h-3.5 mr-1" />
              {COMPANY_INFO.license}
            </span>
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center font-bold text-white hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange mr-1" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="cursor-pointer flex items-center space-x-2.5"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-brand-navy flex items-center justify-center text-white shadow-md border-2 border-brand-orange">
            <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />
          </div>
          <div>
            <div className="font-heading font-bold text-lg sm:text-2xl text-brand-navy tracking-tight leading-none uppercase">
              Apex<span className="text-brand-orange">Pro</span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-brand-textMuted font-medium tracking-wide">
              Handyman & Home Solutions
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-md transition-all relative ${
                activePage === item.id
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-brand-textDark hover:text-brand-navy hover:bg-slate-100'
              }`}
            >
              {item.label}
              {item.badge && (
                <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold bg-amber-500 text-slate-900 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Header Right CTA Buttons */}
        <div className="hidden sm:flex items-center space-x-2.5">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center px-3 py-2 text-xs font-bold text-brand-navy bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-orange" />
            <span className="hidden xl:inline">Direct Line:</span> {COMPANY_INFO.phone}
          </a>

          <button
            onClick={() => handleNavClick('calculator')}
            className="flex items-center px-3.5 py-2 text-xs font-bold text-white bg-brand-orange hover:bg-brand-orangeHover rounded-lg shadow-sm transition-all transform active:scale-95 uppercase tracking-wider"
          >
            <Calculator className="w-3.5 h-3.5 mr-1.5" />
            Get Free Quote
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 rounded-lg text-brand-navy hover:bg-slate-100 border border-slate-200"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center p-2.5 rounded-lg text-xs font-bold text-left transition-colors ${
                    activePage === item.id
                      ? 'bg-brand-navy text-white shadow-sm'
                      : 'bg-slate-50 text-slate-800 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 mr-2 ${activePage === item.id ? 'text-brand-orange' : 'text-brand-slate'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center py-2.5 bg-brand-navy text-white text-xs font-bold rounded-lg shadow-sm"
            >
              <Phone className="w-4 h-4 text-brand-orange mr-2" />
              Call Now: {COMPANY_INFO.phone}
            </a>
            <button
              onClick={() => handleNavClick('calculator')}
              className="w-full flex items-center justify-center py-2.5 bg-brand-orange text-white text-xs font-bold rounded-lg shadow-sm uppercase tracking-wider"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Instant Estimate Builder
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
