import React from 'react';
import styles from './Footer.module.css';
import { Phone, MapPin, AtSign, Mail } from 'lucide-react';

export function Footer() {
  const whatsappNumber = "5535998483732";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <h3 className={styles.logo}>Dr. Lucas Lanzellotti</h3>
          <p className={styles.crmv}>Médico Veterinário • CRMV-SP 75441</p>
          <p className={styles.bio}>
            Medicina veterinária de excelência para pequenos e grandes animais, unindo cuidado humanizado e rigor científico.
          </p>
        </div>
        
        <div className={styles.links}>
          <h4>Atendimento</h4>
          <ul>
            <li>
              <MapPin size={18} className={styles.icon} />
              Bragança Paulista e Região
            </li>
            <li>
              <Phone size={18} className={styles.icon} />
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                (35) 99848-3732
              </a>
            </li>
          </ul>
        </div>
        
        <div className={styles.social}>
          <h4>Redes Sociais</h4>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <AtSign size={24} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Dr. Lucas Lanzellotti. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
