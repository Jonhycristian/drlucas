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
          </div>

          <div className={styles.animalCard}>
            <div className={styles.imageContainer}>
              <img src="/cachorro.png" alt="Cachorro" className={styles.animalImage} />
            </div>
            <h3 className={styles.animalName}>Caninos</h3>
          </div>

          <div className={styles.animalCard}>
            <div className={styles.imageContainer}>
              <img src="/cavalo.png" alt="Cavalo" className={styles.animalImage} />
            </div>
            <h3 className={styles.animalName}>Equinos</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
