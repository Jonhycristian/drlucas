import React from 'react';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { AnimalsSection } from './components/AnimalsSection/AnimalsSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { SpecialtiesSection } from './components/SpecialtiesSection/SpecialtiesSection';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { PurposeSection } from './components/PurposeSection/PurposeSection';
import { TestimonialsSection } from './components/TestimonialsSection/TestimonialsSection';
import { GallerySection } from './components/GallerySection/GallerySection';
import { FAQSection } from './components/FAQSection/FAQSection';
import { LocationSection } from './components/LocationSection/LocationSection';
import { Footer } from './components/Footer/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp/FloatingWhatsApp';
import { ScrollReveal } from './components/ScrollReveal/ScrollReveal';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ScrollReveal><AboutSection /></ScrollReveal>
        <ScrollReveal><SpecialtiesSection /></ScrollReveal>
        <ScrollReveal><AnimalsSection /></ScrollReveal>
        <ScrollReveal><ServicesSection /></ScrollReveal>
        <ScrollReveal><PurposeSection /></ScrollReveal>
        <ScrollReveal><TestimonialsSection /></ScrollReveal>
        <ScrollReveal><GallerySection /></ScrollReveal>
        <ScrollReveal><FAQSection /></ScrollReveal>
        <ScrollReveal><LocationSection /></ScrollReveal>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
