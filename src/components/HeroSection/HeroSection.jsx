import React from 'react';
import { Phone } from 'lucide-react';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const whatsappNumber = "5535998483732"; // Formatado para o link do WhatsApp
  const whatsappMessage = "Olá, gostaria de agendar uma consulta.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>
          Medicina Veterinária de <br />
          <span className={styles.highlight}>Excelência</span> para Grandes e Pequenos Animais
        </h1>
        <p className={styles.subtitle}>
          Cuidado humanizado, ético e baseado em ciência, com atendimento domiciliar e emergencial em Bragança Paulista e região.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`btn ${styles.ctaBtn}`}>
          <Phone size={20} className={styles.icon} />
          Agendar Consulta via WhatsApp
        </a>
      </div>
    </section>
  );
}
