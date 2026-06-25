import React from 'react';
import { Phone } from 'lucide-react';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const whatsappNumber = "5535998483732";
  const whatsappMessage = "Olá, gostaria de agendar uma consulta com o Dr. Lucas.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <div className={`${styles.glassCard} fade-in-up`}>
          <div className={styles.badge}>Atendimento Veterinário Premium</div>
          
          <h1 className={styles.title}>
            Dr. Lucas Lanzellotti
          </h1>
          <h2 className={styles.subtitle}>
            Excelência para <span className={styles.highlight}>Grandes e Pequenos Animais</span>
          </h2>
          
          <p className={styles.description}>
            Cuidado humanizado, ético e baseado em ciência. Atendimento domiciliar e emergencial em Bragança Paulista e região, unindo tecnologia à paixão pelos animais.
          </p>
          
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            <Phone size={22} className={styles.icon} />
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
