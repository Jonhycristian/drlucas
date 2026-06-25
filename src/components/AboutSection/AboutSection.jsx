import React from 'react';
import styles from './AboutSection.module.css';
import { Award, Heart, Stethoscope, ChevronRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section className={styles.about} id="sobre">
      <div className={`container ${styles.container}`}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <div className={styles.backdropDecoration}></div>
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" 
              alt="Dr. Lucas Lanzellotti" 
              className={styles.image}
            />
            <div className={styles.floatingBadge}>
              <div className={styles.badgeIconWrapper}>
                <Award size={28} className={styles.badgeIcon} />
              </div>
              <div className={styles.badgeText}>
                <strong>Graduado UFLA</strong>
                <span>Excelência Comprovada</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.contentColumn}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              Conheça o Dr. Lucas Lanzellotti
            </h2>
            <div className={styles.crmvTag}>
              CRMV-SP 75441
            </div>
          </div>
          
          <div className={styles.textContent}>
            <p className={styles.leadText}>
              Sou graduado pela renomada <strong>Universidade Federal de Lavras (UFLA)</strong>. Minha atuação é pautada na medicina preventiva e em diagnósticos precisos.
            </p>
            <p className={styles.text}>
              Acredito que cada animal é único. Meu objetivo é construir relações de confiança com tutores e produtores rurais, oferecendo um cuidado altamente individualizado que une a excelência técnica mais atualizada ao respeito pela vida animal.
            </p>
          </div>
          
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <Heart size={24} />
              </div>
              <div className={styles.featureInfo}>
                <h4>Cuidado Humanizado</h4>
                <p>Respeito e empatia genuína em cada atendimento.</p>
              </div>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <Stethoscope size={24} />
              </div>
              <div className={styles.featureInfo}>
                <h4>Técnica e Ciência</h4>
                <p>Decisões clínicas com sólida fundamentação.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.actionArea}>
             <a href="#especialidades" className={styles.linkAction}>
               Conheça minhas especialidades <ChevronRight size={18} />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
