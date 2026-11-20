import React, { useState } from 'react';
import { SERVICES_DATA, SERVICE_AREAS, saveNewQuote } from '../data/mockDatabase';
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, Phone, Clock, FileCheck } from 'lucide-react';

export default function EstimateCalculator({ preselectedServiceId, setActivePage }) {
  const [selectedServiceId, setSelectedServiceId] = useState(preselectedServiceId || 'finish-carpentry');
  const [selectedScope, setSelectedScope] = useState('standard');
  const [selectedTown, setSelectedTown] = useState('Manchester');
  const [urgency, setUrgency] = useState('flexible');
  
  // Contact details
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const [step, setStep] = useState(1);
  const [submittedQuote, setSubmittedQuote] = useState(null);

  const currentService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

  // Dynamic estimate calculator logic
  const calculateEstimate = () => {
    let baseMin = 120;
    let baseMax = 350;

    if (currentService.id === 'finish-carpentry') { baseMin = 140; baseMax = 480; }
    else if (currentService.id === 'drywall-repair') { baseMin = 120; baseMax = 350; }
    else if (currentService.id === 'deck-repair') { baseMin = 220; baseMax = 850; }
    else if (currentService.id === 'fixture-installation') { baseMin = 95; baseMax = 290; }
    else if (currentService.id === 'interior-painting') { baseMin = 180; baseMax = 600; }
    else if (currentService.id === 'door-window-repairs') { baseMin = 85; baseMax = 210; }
    else if (currentService.id === 'home-entertainment-assembly') { baseMin = 90; baseMax = 195; }
    else if (currentService.id === 'small-odd-jobs') { baseMin = 280; baseMax = 490; }

    // Multipliers based on scope
    let multiplier = 1.0;
    if (selectedScope === 'small') multiplier = 0.8;
    if (selectedScope === 'large') multiplier = 1.6;

    if (urgency === 'emergency') multiplier += 0.25;

    return {
      min: Math.round(baseMin * multiplier),
      max: Math.round(baseMax * multiplier)
    };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number so we can reach you.');
      return;
    }

    const newQuoteRecord = saveNewQuote({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      town: selectedTown,
      service: currentService.title,
      details: formData.notes || `Scope: ${selectedScope}, Urgency: ${urgency}`,
      preferredTime: urgency === 'emergency' ? 'Same-Day Urgent' : 'Standard Booking',
      estimatedAmount: `$${estimate.min} – $${estimate.max}`
    });

    setSubmittedQuote(newQuoteRecord);
    setStep(3); // Confirmation step
  };

  return (
    <section className="py-10 sm:py-16 bg-brand-grayBg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy/10 text-brand-navy rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5 text-brand-orange" />
            Transparent Cost Estimator
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading text-brand-navy">
            Instant Handyman Estimate Builder
          </h2>
          <p className="text-xs sm:text-sm text-brand-textMuted mt-1">
            Build your estimate in 3 simple steps. No upfront credit card required.
          </p>

          {/* Step Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${step === 1 ? 'bg-brand-navy text-white' : 'bg-slate-200 text-slate-600'}`}>
              <span>1</span> <span>Scope</span>
            </div>
            <div className="w-6 h-0.5 bg-slate-300" />
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${step === 2 ? 'bg-brand-navy text-white' : 'bg-slate-200 text-slate-600'}`}>
              <span>2</span> <span>Details</span>
            </div>
            <div className="w-6 h-0.5 bg-slate-300" />
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${step === 3 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
              <span>3</span> <span>Confirmed</span>
            </div>
          </div>
        </div>

        {/* Wizard Container */}
        <div className="bg-white rounded-xl border border-brand-cardBorder shadow-md overflow-hidden text-left">
          
          {/* STEP 1: Select Service & Project Scale */}
          {step === 1 && (
            <div className="p-5 sm:p-8 space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">
                  1. Select Your Service Category:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES_DATA.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        selectedServiceId === s.id
                          ? 'border-brand-navy bg-brand-navy/5 ring-2 ring-brand-navy'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-heading font-bold text-xs sm:text-sm text-brand-navy">
                          {s.title}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                          {s.priceEstimate}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                        {s.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Scope Selection */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">
                  2. Select Project Scope / Size:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedScope('small')}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      selectedScope === 'small'
                        ? 'border-brand-orange bg-brand-orange/5 ring-2 ring-brand-orange font-bold text-brand-orange'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="block text-xs sm:text-sm">Minor Fix</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">1-2 hours</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedScope('standard')}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      selectedScope === 'standard'
                        ? 'border-brand-orange bg-brand-orange/5 ring-2 ring-brand-orange font-bold text-brand-orange'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="block text-xs sm:text-sm">Standard Room</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Half day</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedScope('large')}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      selectedScope === 'large'
                        ? 'border-brand-orange bg-brand-orange/5 ring-2 ring-brand-orange font-bold text-brand-orange'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="block text-xs sm:text-sm">Multi-Room / Full</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Full day+</span>
                  </button>
                </div>
              </div>

              {/* Estimated Live Box */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-slate-500 block">Calculated Upfront Range:</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                    ${estimate.min} – ${estimate.max}
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Includes labor, standard fasteners & 1-year guarantee.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full sm:w-auto px-6 py-3 bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow transition-colors flex items-center justify-center"
                >
                  Proceed to Schedule & Details
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Contact Information & Location */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-bold">Selected Service</span>
                  <div className="font-heading font-bold text-base text-brand-navy">
                    {currentService.title} ({selectedScope} scope)
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 uppercase font-bold">Est. Total</span>
                  <div className="font-heading font-bold text-lg text-emerald-700">
                    ${estimate.min} – ${estimate.max}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-brand-navy focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Phone Number (for quick SMS / Call) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(603) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-brand-navy focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-brand-navy focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Town / Service Location (NH)
                  </label>
                  <select
                    value={selectedTown}
                    onChange={(e) => setSelectedTown(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-brand-navy focus:outline-none"
                  >
                    {SERVICE_AREAS.map((a, idx) => (
                      <option key={idx} value={a.town}>
                        {a.town}, NH ({a.eta})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Brief Project Notes or Dimensions (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g., Door doesn't latch cleanly, 8ft baseboards in hallway, photo can be texted to phone."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-brand-navy focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 flex items-center"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                  Back
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 bg-brand-orange hover:bg-brand-orangeHover text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow transition-colors flex items-center"
                >
                  <FileCheck className="w-4 h-4 mr-1.5" />
                  Confirm & Lock Estimate
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Instant Confirmation & Lead Registered in Database */}
          {step === 3 && submittedQuote && (
            <div className="p-6 sm:p-10 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  Estimate Reference: {submittedQuote.id}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brand-navy mt-2">
                  Estimate Request Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-lg mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{submittedQuote.name}</span>. Your estimate of <span className="font-bold text-emerald-700">{submittedQuote.estimatedAmount}</span> for <span className="font-semibold text-slate-900">{submittedQuote.service}</span> in <span className="font-semibold text-slate-900">{submittedQuote.town}, NH</span> has been saved to our local database dispatch log.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact Phone:</span>
                  <span className="font-bold text-slate-800">{submittedQuote.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service Category:</span>
                  <span className="font-semibold text-slate-800">{submittedQuote.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Location:</span>
                  <span className="font-semibold text-slate-800">{submittedQuote.town}, NH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Estimated Dispatch:</span>
                  <span className="font-bold text-brand-navy">Next-Day Morning (8:00 AM)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3">
                <button
                  onClick={() => {
                    setActivePage('tracker');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-lg uppercase tracking-wide hover:bg-brand-navyDark transition-colors"
                >
                  View in Customer Leads Portal
                </button>

                <button
                  onClick={() => {
                    setStep(1);
                    setSubmittedQuote(null);
                  }}
                  className="px-5 py-2.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg border border-slate-300 hover:bg-slate-200 transition-colors"
                >
                  Calculate Another Project
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
