import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MobileBottomBar from './components/MobileBottomBar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesSection from './components/ServicesSection';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import EstimateCalculator from './components/EstimateCalculator';
import TestimonialsSection from './components/TestimonialsSection';
import ServiceAreaChecker from './components/ServiceAreaChecker';
import AdminQuotesTracker from './components/AdminQuotesTracker';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [preselectedServiceId, setPreselectedServiceId] = useState(null);

  const handleSelectService = (service) => {
    setPreselectedServiceId(service.id);
    setActivePage('calculator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickStart = ({ serviceId }) => {
    setPreselectedServiceId(serviceId);
    setActivePage('calculator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-grayBg text-brand-textDark font-sans pb-16 md:pb-0">
      {/* Sticky Navigation & Top Utility Bar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <Hero setActivePage={setActivePage} onQuickStart={handleQuickStart} />
            <TrustBar />
            <ServicesSection setActivePage={setActivePage} onSelectService={handleSelectService} />
            <BeforeAfterGallery setActivePage={setActivePage} />
            <TestimonialsSection />
            <ServiceAreaChecker setActivePage={setActivePage} />
          </>
        )}

        {activePage === 'services' && (
          <>
            <div className="bg-brand-navyDark text-white py-8 sm:py-12 px-4 text-center">
              <h1 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading">
                All Handyman Services & Pricing
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
                No guessing games. Transparent hourly and project estimates for standard home repairs.
              </p>
            </div>
            <TrustBar />
            <ServicesSection setActivePage={setActivePage} onSelectService={handleSelectService} />
            <ServiceAreaChecker setActivePage={setActivePage} />
          </>
        )}

        {activePage === 'gallery' && (
          <>
            <div className="bg-brand-navyDark text-white py-8 sm:py-12 px-4 text-center">
              <h1 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading">
                Before & After Transformations
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
                Real craftsmanship from homes across Manchester, Bedford, Concord, and Southern NH.
              </p>
            </div>
            <BeforeAfterGallery setActivePage={setActivePage} />
          </>
        )}

        {activePage === 'calculator' && (
          <>
            <EstimateCalculator 
              preselectedServiceId={preselectedServiceId} 
              setActivePage={setActivePage} 
            />
          </>
        )}

        {activePage === 'reviews' && (
          <>
            <div className="bg-brand-navyDark text-white py-8 sm:py-12 px-4 text-center">
              <h1 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading">
                Customer Reviews & Reputation
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
                Over 380+ five-star verified ratings across Google and local community groups.
              </p>
            </div>
            <TestimonialsSection />
          </>
        )}

        {activePage === 'areas' && (
          <>
            <div className="bg-brand-navyDark text-white py-8 sm:py-12 px-4 text-center">
              <h1 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading">
                Service Radius & Coverage
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
                Providing prompt, same-day and scheduled repairs throughout Southern New Hampshire.
              </p>
            </div>
            <ServiceAreaChecker setActivePage={setActivePage} />
          </>
        )}

        {activePage === 'tracker' && (
          <>
            <div className="bg-brand-navyDark text-white py-8 sm:py-12 px-4 text-center">
              <h1 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading">
                Internal Contractor Dispatch & Leads Portal
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
                Review and update active estimate requests stored in your local browser database.
              </p>
            </div>
            <AdminQuotesTracker />
          </>
        )}
      </main>

      {/* Corporate SEO Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Floating Sticky Mobile Bottom Bar (Hidden on desktop, prominent on phone) */}
      <MobileBottomBar setActivePage={setActivePage} />
    </div>
  );
}
