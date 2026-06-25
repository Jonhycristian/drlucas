import React from 'react';
import { HeroSection } from './components/HeroSection/HeroSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { SpecialtiesSection } from './components/SpecialtiesSection/SpecialtiesSection';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { PurposeSection } from './components/PurposeSection/PurposeSection';
import { FAQSection } from './components/FAQSection/FAQSection';
import { Footer } from './components/Footer/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp/FloatingWhatsApp';

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <SpecialtiesSection />
        <ServicesSection />
        <PurposeSection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
