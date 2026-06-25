import React from 'react';
import styles from './AboutSection.module.css';
import { Award, Heart, Stethoscope } from 'lucide-react';

export function AboutSection() {
  return (
    <section className={styles.about} id="sobre">
      <div className={`container ${styles.container}`}>
        <div className={styles.imageWrapper}>
          {/* Espaço para a foto real do Dr. Lucas. Usando um placeholder estiloso por enquanto. */}
          <img 
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" 
            alt="Dr. Lucas Lanzellotti" 
            className={styles.image}
          />
          <div className={styles.badge}>
            <Award size={24} className={styles.badgeIcon} />
            <div>
              <strong>Graduado UFLA</strong>
              <span>Excelência Comprovada</span>
            </div>
          </div>
        </div>
        
        <div className={styles.content}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
            Conheça o Dr. Lucas Lanzellotti
          </h2>
          <span className={styles.crmv}>Médico Veterinário • CRMV-SP 75441</span>
          
          <p className={styles.text}>
            Sou graduado pela renomada <strong>Universidade Federal de Lavras (UFLA)</strong>. Minha atuação é pautada na medicina preventiva e em diagnósticos precisos, sempre com o objetivo de construir relações de confiança com tutores e produtores.
          </p>
          <p className={styles.text}>
            Acredito que cada animal é único, e por isso ofereço um cuidado individualizado, unindo excelência técnica ao respeito pela vida animal.
          </p>
          
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.iconBox}>
                <Heart size={20} />
              </div>
              <div>
                <h4>Cuidado Humanizado</h4>
                <p>Respeito e empatia em cada atendimento.</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.iconBox}>
                <Stethoscope size={20} />
              </div>
              <div>
                <h4>Técnica Baseada em Ciência</h4>
                <p>Decisões clínicas com fundamentação sólida.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
