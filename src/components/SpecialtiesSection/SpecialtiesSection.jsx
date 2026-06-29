import React from 'react';
import styles from './SpecialtiesSection.module.css';
import { Dog, Cat, Tractor, Tent, CheckCircle2 } from 'lucide-react';

export function SpecialtiesSection() {
  return (
    <section className={styles.specialties} id="especialidades">
      <div className="container">
        <h2 className="section-title">Público-Alvo e Especialidades</h2>
        
        <div className={styles.cardsContainer}>
          {/* Card Pets */}
          <div className={styles.card}>
            <div className={`${styles.cardBackground} ${styles.cardPets}`}></div>
            <div className={styles.cardOverlay}></div>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconGroup}>
                  <Dog size={36} />
                  <Cat size={36} />
                </div>
                <h3>Para Pets (Cães e Gatos)</h3>
                <p className={styles.cardSubtitle}>Conforto e segurança para quem você ama, no aconchego do seu lar.</p>
              </div>
              <ul className={styles.list}>
                <li>
                  <CheckCircle2 className={styles.check} size={20} />
                  <span>Consultas domiciliares (menos estresse para o animal)</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.check} size={20} />
                  <span>Esquema vacinal e medicina preventiva</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.check} size={20} />
                  <span>Nutrição clínica especializada</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card Grandes Animais */}
          <div className={styles.card}>
            <div className={`${styles.cardBackground} ${styles.cardLarge}`}></div>
            <div className={styles.cardOverlay}></div>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconGroup}>
                  <Tractor size={36} />
                  <Tent size={36} />
                </div>
                <h3>Animais de Produção e Equinos</h3>
                <p className={styles.cardSubtitle}>Foco em saúde do rebanho, manejo eficiente e alta performance a campo.</p>
              </div>
              <ul className={styles.list}>
                <li>
                  <CheckCircle2 className={styles.check} size={20} />
                  <span><strong>Bovinos de Leite e Corte:</strong> Assistência técnica focada em produtividade.</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.check} size={20} />
                  <span><strong>Equinos:</strong> Atendimento especializado para animais de esporte, trabalho ou lazer.</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.check} size={20} />
                  <span>Manejo reprodutivo, nutricional e sanitário.</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.check} size={20} />
                  <span>Atendimento emergencial a campo e necropsia veterinária.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
