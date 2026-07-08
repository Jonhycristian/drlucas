import React from 'react';
import styles from './AnimalsSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function AnimalsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollReveal();

  const animals = [
    {
      id: 'cachorro',
      name: 'Cachorro',
      image: '/cachorro_completo.png',
      description: 'O melhor amigo do homem. Lealdade e alegria incondicional, merecendo os melhores cuidados para uma vida longa e saudável.',
      color: '#FFF3E0'
    },
    {
      id: 'gato',
      name: 'Gato',
      image: '/gato_completo.png',
      description: 'Elegância e independência. Uma atenção especializada e um ambiente sem estresse para a saúde e o bem-estar do seu felino.',
      color: '#F3E5F5'
    },
    {
      id: 'cavalo',
      name: 'Cavalo',
      image: '/cavalo_completo.png',
      description: 'Força, beleza e liberdade. Medicina esportiva e preventiva focada no desempenho e na longevidade do seu cavalo.',
      color: '#EFEBE9'
    },
    {
      id: 'vaca',
      name: 'Vaca',
      image: '/vaca_completo.png',
      description: 'A doçura e a força do campo. Cuidado especializado voltado à saúde, reprodução e produtividade do rebanho.',
      color: '#E8F5E9'
    },
    {
      id: 'ovelha',
      name: 'Ovelha',
      image: '/ovelha_completo.png',
      description: 'Mansidão e cuidado. Acompanhamento veterinário dedicado para garantir a saúde e a tranquilidade do seu rebanho.',
      color: '#E3F2FD'
    },
    {
      id: 'cabra',
      name: 'Cabra',
      image: '/cabra_completo.png',
      description: 'Inteligência e energia contagiante. Manejo eficiente e medicina preventiva para uma vida ativa e produtiva.',
      color: '#FFFDE7'
    }
  ];

  return (
    <section className={styles.animalsSection} id="pacientes">
      <div className="container">
        
        {/* Main highlight area with face icons */}
        <div className={`${styles.highlightHeader} ${headerVisible ? styles.animateIn : ''}`} ref={headerRef}>
          <div className={styles.titleWrapper}>
            <h2 className="section-title">Nossos Pacientes</h2>
            <p className={styles.sectionSubtitle}>
              Amor, cuidado e tecnologia de ponta para todos os tamanhos e espécies.
            </p>
          </div>
          
          <div className={styles.facesContainer}>
            <div className={`${styles.faceIconWrapper} ${styles.faceCat}`}>
              <img src="/Gato_rosto.png" alt="Rosto de Gato" className={styles.faceImage} />
            </div>
            <div className={`${styles.faceIconWrapper} ${styles.faceDog} ${styles.centerFace}`}>
              <img src="/cachorro-rosto.png" alt="Rosto de Cachorro" className={styles.faceImage} />
            </div>
            <div className={`${styles.faceIconWrapper} ${styles.faceHorse}`}>
              <img src="/cavalo_rosto.png" alt="Rosto de Cavalo" className={styles.faceImage} />
            </div>
          </div>
        </div>

        {/* Full body animals gallery */}
        <div className={`${styles.galleryGrid} ${galleryVisible ? styles.animateIn : ''}`} ref={galleryRef}>
          {animals.map((animal, index) => (
            <div 
              key={animal.id} 
              className={styles.animalCard} 
              style={{ '--card-bg': animal.color, animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.blob}></div>
                <img src={animal.image} alt={animal.name} className={styles.fullAnimalImage} />
              </div>
              <div className={styles.cardContent}>
                <h3>{animal.name}</h3>
                <p>{animal.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
