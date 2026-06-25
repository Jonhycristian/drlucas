import React from 'react';
import styles from './FloatingWhatsApp.module.css';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappNumber = "5535998483732";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.floatBtn}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} className={styles.icon} />
    </a>
  );
}
