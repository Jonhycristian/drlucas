import React from 'react';
import styles from './LocationSection.module.css';
import { MapPin } from 'lucide-react';

export function LocationSection() {
  return (
    <section className={styles.location} id="localizacao">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <MapPin size={32} className={styles.icon} />
          <h2 className="section-title">Região de Atendimento</h2>
          <p className={styles.subtitle}>
            Atendemos <strong>Bragança Paulista e toda a região bragantina</strong>. Nosso formato é focado no atendimento domiciliar para Pets e assistência direta em propriedades rurais para Grandes Animais.
          </p>
        </div>
        
        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117565.65609406086!2d-46.61907664654536!3d-22.95103730249258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cecba95f8e6bc3%3A0x60c04f982d61994e!2sBragan%C3%A7a%20Paulista%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1705604123456!5m2!1spt-BR!2sbr" 
            className={styles.map}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da região de Bragança Paulista"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
