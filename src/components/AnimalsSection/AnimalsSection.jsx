import React from 'react';
import styles from './AnimalsSection.module.css';

export function AnimalsSection() {
  return (
    <section className={styles.animalsSection} id="animais">
      <div className={`container ${styles.container}`}>
        <h2 className="section-title">Nossos Pacientes</h2>
        <p className="section-subtitle">
          Atendimento especializado para todas as espécies, com amor e dedicação.
        </p>

        <div className={styles.animalsGrid}>
          <div className={styles.animalCard}>
            <div className={styles.imageContainer}>
              <img src="/Gato.png" alt="Gato" className={styles.animalImage} />
            </div>
            <h3 className={styles.animalName}>Felinos</h3>
            <p className={styles.animalDesc}>
              Atenção especializada aos detalhes sutis da saúde felina. Cuidado focado em minimizar o estresse e proporcionar um ambiente seguro para o seu gato, com medicina preventiva e tratamentos modernos.
            </p>
          </div>

          <div className={styles.animalCard}>
            <div className={styles.imageContainer}>
              <img src="/cachorro.png" alt="Cachorro" className={styles.animalImage} />
            </div>
            <h3 className={styles.animalName}>Caninos</h3>
            <p className={styles.animalDesc}>
              Companheiros leais merecem a melhor qualidade de vida. Oferecemos acompanhamento completo, desde vacinação e nutrição até tratamentos complexos, garantindo a vitalidade e a alegria do seu cãozinho.
            </p>
          </div>

          <div className={styles.animalCard}>
            <div className={styles.imageContainer}>
              <img src="/cavalo.png" alt="Cavalo" className={styles.animalImage} />
            </div>
            <h3 className={styles.animalName}>Equinos</h3>
            <p className={styles.animalDesc}>
              Medicina esportiva e preventiva para grandes animais. Foco no desempenho, bem-estar e longevidade do seu cavalo, com atendimento a campo e diagnósticos precisos para garantir a máxima performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
