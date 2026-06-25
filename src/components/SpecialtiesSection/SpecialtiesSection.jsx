import React from 'react';
import styles from './SpecialtiesSection.module.css';
import { Dog, Cat, Tractor, Tent } from 'lucide-react';

export function SpecialtiesSection() {
  return (
    <section className={styles.specialties} id="especialidades">
      <div className="container">
        <h2 className="section-title">Público-Alvo e Especialidades</h2>
        
        <div className={styles.cardsContainer}>
          {/* Card Pets */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconGroup}>
                <Dog size={32} />
                <Cat size={32} />
              </div>
              <h3>Para Pets (Cães e Gatos)</h3>
              <p className={styles.cardSubtitle}>Conforto e segurança para quem você ama.</p>
            </div>
            <ul className={styles.list}>
              <li>
                <span className={styles.check}>✓</span>
                Consultas domiciliares (menos estresse para o animal)
              </li>
              <li>
                <span className={styles.check}>✓</span>
                Esquema vacinal e medicina preventiva
              </li>
              <li>
                <span className={styles.check}>✓</span>
                Nutrição clínica especializada
              </li>
            </ul>
          </div>

          {/* Card Grandes Animais */}
          <div className={`${styles.card} ${styles.cardLarge}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconGroup}>
                <Tractor size={32} />
                <Tent size={32} />
              </div>
              <h3>Animais de Produção e Equinos</h3>
              <p className={styles.cardSubtitle}>Rendimento, saúde do rebanho e performance.</p>
            </div>
            <ul className={styles.list}>
              <li>
                <span className={styles.check}>✓</span>
                Assistência técnica a propriedades
              </li>
              <li>
                <span className={styles.check}>✓</span>
                Manejo reprodutivo e nutricional
              </li>
              <li>
                <span className={styles.check}>✓</span>
                Atendimento emergencial a campo
              </li>
              <li>
                <span className={styles.check}>✓</span>
                Necropsia veterinária
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
