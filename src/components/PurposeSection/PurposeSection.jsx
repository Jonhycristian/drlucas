import React from 'react';
import styles from './PurposeSection.module.css';
import { Target, ShieldCheck, Microscope, Clock } from 'lucide-react';

export function PurposeSection() {
  return (
    <section className={styles.purpose} id="proposito">
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Compromisso com a Vida e com a Ciência
          </h2>
          <p className={styles.text}>
            Nosso propósito é promover saúde, bem-estar e qualidade de vida aos animais através de um atendimento ético e responsável.
          </p>
          <p className={styles.text}>
            Trabalhamos para ser uma referência técnica na região de Bragança Paulista, entregando resultados duradouros e orientação segura para que você tome decisões conscientes sobre a saúde do seu animal ou rebanho.
          </p>
          
          <div className={styles.stats}>
            <div className={styles.statBox}>
              <Target size={36} className={styles.icon} />
              <h4>Precisão</h4>
              <p>Diagnósticos assertivos baseados em evidências.</p>
            </div>
            <div className={styles.statBox}>
              <ShieldCheck size={36} className={styles.icon} />
              <h4>Segurança</h4>
              <p>Protocolos de excelência para todas as espécies.</p>
            </div>
            <div className={styles.statBox}>
              <Microscope size={36} className={styles.icon} />
              <h4>Tecnologia</h4>
              <p>Equipamentos modernos para suporte a campo.</p>
            </div>
            <div className={styles.statBox}>
              <Clock size={36} className={styles.icon} />
              <h4>Disponibilidade</h4>
              <p>Suporte ágil em momentos críticos.</p>
            </div>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <img 
            src="/atendimento.png" 
            alt="Atendimento Veterinário Premium - Gato" 
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
