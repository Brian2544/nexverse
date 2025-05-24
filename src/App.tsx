import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import WhyNexverse from './components/sections/WhyNexverse';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Features from './components/sections/Features';
import FAQ from './components/sections/FAQ';
import About from './components/sections/About';
import Impact from './components/sections/Impact';
import CaseStudies from './components/sections/CaseStudies';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ChatWidget from './components/common/ChatWidget';
import ContactModal from './components/modals/ContactModal';
import ScrollToHashElement from './components/common/ScrollToHashElement';
// Import all generated pages
import StrategyConsulting from './components/sections/pages/StrategyConsulting';
import TechnologyConsulting from './components/sections/pages/TechnologyConsulting';
import BusinessConsulting from './components/sections/pages/BusinessConsulting';
import ITInfrastructure from './components/sections/pages/ITInfrastructure';
import WebDevelopment from './components/sections/pages/WebDevelopment';
import InformationSecurity from './components/sections/pages/InformationSecurity';
import BusinessApplications from './components/sections/pages/BusinessApplications';
import ITServiceManagement from './components/sections/pages/ITServiceManagement';
import StrategyPlanning from './components/sections/pages/StrategyPlanning';
import GovernanceEnterpriseIT from './components/sections/pages/GovernanceEnterpriseIT';
import DigitalTransformation from './components/sections/pages/DigitalTransformation';
import ProjectManagement from './components/sections/pages/ProjectManagement';
import DataProtection from './components/sections/pages/DataProtection';
import OurVision from './components/sections/pages/OurVision';
import OurMission from './components/sections/pages/OurMission';
import OurCoreValues from './components/sections/pages/OurCoreValues';


const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
  const getInTouchBtnRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const openContactModal = useCallback((anchorRect?: DOMRect | null) => {
    if (anchorRect) setButtonRect(anchorRect);
    else setButtonRect(null);
    setIsContactModalOpen(true);
  }, []);

  // Handle scrollTo state when navigating from other pages
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Add a small delay to ensure the element is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen relative">
      <ScrollToHashElement />
      <Navbar 
        openContactModal={openContactModal}
        getInTouchBtnRef={getInTouchBtnRef}
      />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero openContactModal={openContactModal} />
              <WhyNexverse />
              <Impact />
              <About />
              <Services />
              <Process />
              <Features />
              <FAQ />
              <Contact />
            </>
          } />
          {/* Consulting Services */}
          <Route path="/services/strategy-consulting" element={<StrategyConsulting />} />
          <Route path="/services/technology-consulting" element={<TechnologyConsulting />} />
          <Route path="/services/business-consulting" element={<BusinessConsulting />} />
          {/* Corporate Solutions */}
          <Route path="/solutions/it-infrastructure" element={<ITInfrastructure />} />
          <Route path="/solutions/web-development" element={<WebDevelopment />} />
          <Route path="/solutions/information-security" element={<InformationSecurity />} />
          <Route path="/solutions/business-applications" element={<BusinessApplications />} />
          <Route path="/solutions/it-service-management" element={<ITServiceManagement />} />
          {/* Corporate Training & Coaching */}
          <Route path="/training/strategy-planning" element={<StrategyPlanning />} />
          <Route path="/training/governance-enterprise-it" element={<GovernanceEnterpriseIT />} />
          <Route path="/training/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/training/project-management" element={<ProjectManagement />} />
          <Route path="/training/data-protection" element={<DataProtection />} />
          {/* About Us */}
          <Route path="/about/our-vision" element={<OurVision />} />
          <Route path="/about/our-mission" element={<OurMission />} />
          <Route path="/about/our-core-values" element={<OurCoreValues />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        anchorRect={buttonRect}
        source="process"
      />
    </div>
  );
};

export default App;