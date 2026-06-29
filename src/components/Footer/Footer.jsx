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
          <img src="/logo-completa.png" alt="Dr. Lucas Lanzellotti Logo" className={styles.logoImg} />
          <p className={styles.crmv}>Médico Veterinário • CRMV-SP 75441</p>
          <p className={styles.bio}>
            Medicina veterinária de excelência para pequenos e grandes animais, unindo cuidado humanizado e rigor científico.
          </p>
        </div>
        
        <div className={styles.navLinks}>
          <h4>Navegação</h4>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#sobre">Sobre o Doutor</a></li>
            <li><a href="#especialidades">Especialidades</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
          </ul>
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
            <li>
              <Mail size={18} className={styles.icon} />
              <a href="mailto:contato@drlucasvet.com.br">
                contato@drlucasvet.com.br
              </a>
            </li>
          </ul>
        </div>
        
        <div className={styles.social}>
          <h4>Redes Sociais</h4>
          <p className={styles.socialText}>Acompanhe nosso dia a dia no Instagram:</p>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com/drlucasvet" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <AtSign size={24} />
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
