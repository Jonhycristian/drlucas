import React, { useState, useEffect } from 'react';
import styles from './FloatingWhatsApp.module.css';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "5535998483732";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar botão após rolar 500px (passando a Hero Section)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`${styles.floatBtn} ${isVisible ? styles.visible : styles.hidden}`}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} className={styles.icon} />
    </a>
  );
}
