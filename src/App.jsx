import React from 'react';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { AnimalsSection } from './components/AnimalsSection/AnimalsSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { SpecialtiesSection } from './components/SpecialtiesSection/SpecialtiesSection';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { PurposeSection } from './components/PurposeSection/PurposeSection';
import { FAQSection } from './components/FAQSection/FAQSection';
import { LocationSection } from './components/LocationSection/LocationSection';
import { Footer } from './components/Footer/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp/FloatingWhatsApp';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AnimalsSection />
        <AboutSection />
        <SpecialtiesSection />
        <ServicesSection />
        <PurposeSection />
        <FAQSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
