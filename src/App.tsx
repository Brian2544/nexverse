import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import CaseStudies from './components/sections/CaseStudies';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
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
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <About />
              <CaseStudies />
              <Testimonials />
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
    </div>
  );
};

export default App; 