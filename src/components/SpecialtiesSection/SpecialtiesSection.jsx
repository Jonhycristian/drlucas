import React from 'react';
import styles from './SpecialtiesSection.module.css';
import { Dog, Cat, Tractor, Tent, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function SpecialtiesSection() {
  const { ref: petsRef, isVisible: petsVisible } = useScrollReveal();
  const { ref: horseRef, isVisible: horseVisible } = useScrollReveal();
  return (
    <section className={styles.specialties} id="especialidades">
      <div className="container">
        <h2 className="section-title">Público-Alvo e Especialidades</h2>
        
        <div className={styles.cardsContainer}>
          {/* Card Pets */}
          <div className={`${styles.card} ${styles.cardRow}`}>

            
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconGroup}>
                  <Dog size={36} />
                  <Cat size={36} />
                </div>
                <h3>Para Pets (Cães e Gatos)</h3>
                <p className={styles.cardSubtitle}>Conforto e segurança para quem você ama, no aconchego do seu lar.</p>
              </div>
              <div className={styles.featuresGrid}>
                <div className={styles.featureChip}>
                  <CheckCircle2 className={styles.check} size={18} />
                  <span>Consultas domiciliares sem estresse</span>
                </div>
                <div className={styles.featureChip}>
                  <CheckCircle2 className={styles.check} size={18} />
                  <span>Vacinação e check-up preventivo</span>
                </div>
                <div className={styles.featureChip}>
                  <CheckCircle2 className={styles.check} size={18} />
                  <span>Nutrição clínica especializada</span>
                </div>
              </div>

              <div className={styles.animalDescriptions}>
                <div className={styles.descBlock}>
                  <h4>Felinos</h4>
                  <p>Atenção especializada aos detalhes sutis da saúde felina. Cuidado focado em minimizar o estresse e proporcionar um ambiente seguro para o seu gato, com medicina preventiva e tratamentos modernos.</p>
                </div>
                <div className={styles.descBlock}>
                  <h4>Caninos</h4>
                  <p>Companheiros leais merecem a melhor qualidade de vida. Oferecemos acompanhamento completo, desde vacinação e nutrição até tratamentos complexos, garantindo a vitalidade e a alegria do seu cãozinho.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Grandes Animais */}
          <div className={`${styles.card} ${styles.cardRowReverse}`}>


            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconGroup}>
                  <Tractor size={36} />
                  <Tent size={36} />
                </div>
                <h3>Produção e Equinos</h3>
                <p className={styles.cardSubtitle}>Manejo eficiente e alta performance a campo com tecnologia de ponta.</p>
              </div>
              
              <div className={styles.featuresGrid}>
                <div className={styles.featureChip}>
                  <CheckCircle2 className={styles.check} size={18} />
                  <span>Bovinos: Foco em produtividade</span>
                </div>
                <div className={styles.featureChip}>
                  <CheckCircle2 className={styles.check} size={18} />
                  <span>Equinos: Medicina esportiva</span>
                </div>
                <div className={styles.featureChip}>
                  <CheckCircle2 className={styles.check} size={18} />
                  <span>Manejo reprodutivo e nutricional</span>
                </div>
                <div className={styles.featureChip}>
                  <CheckCircle2 className={styles.check} size={18} />
                  <span>Atendimento emergencial a campo</span>
                </div>
              </div>

              <div className={styles.animalDescriptions}>
                <div className={styles.descBlock}>
                  <h4>Equinos</h4>
                  <p>Medicina esportiva e preventiva para grandes animais. Foco no desempenho, bem-estar e longevidade do seu cavalo, com atendimento a campo e diagnósticos precisos para garantir a máxima performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
