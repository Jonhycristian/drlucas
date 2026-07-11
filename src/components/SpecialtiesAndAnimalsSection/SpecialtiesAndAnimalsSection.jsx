import React from 'react';
import styles from './SpecialtiesAndAnimalsSection.module.css';
import { Dog, Cat, Tractor, Tent, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function SpecialtiesAndAnimalsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollReveal();

  const animals = [
    {
      id: 'cachorro',
      name: 'Cachorro',
      specialty: 'Caninos',
      image: '/cachorro_completo.png',
      description: 'O melhor amigo do homem. Lealdade e alegria incondicional. Oferecemos acompanhamento completo, desde vacinação e nutrição até tratamentos complexos, garantindo a vitalidade e a alegria do seu cãozinho.',
      color: '#FFF3E0',
      badgeColor: '#FFB74D'
    },
    {
      id: 'gato',
      name: 'Gato',
      specialty: 'Felinos',
      image: '/gato_completo.png',
      description: 'Elegância e independência. Atenção especializada aos detalhes sutis da saúde felina. Cuidado focado em minimizar o estresse e proporcionar um ambiente seguro para o seu gato, com medicina preventiva e tratamentos modernos.',
      color: '#F3E5F5',
      badgeColor: '#BA68C8'
    },
    {
      id: 'cavalo',
      name: 'Cavalo',
      specialty: 'Equinos',
      image: '/cavalo_completo.png',
      description: 'Força, beleza e liberdade. Medicina esportiva e preventiva para grandes animais. Foco no desempenho, bem-estar e longevidade do seu cavalo, com atendimento a campo e diagnósticos precisos para garantir a máxima performance.',
      color: '#EFEBE9',
      badgeColor: '#A1887F'
    },
    {
      id: 'vaca',
      name: 'Vaca',
      specialty: 'Bovinos',
      image: '/vaca_completo.png',
      description: 'A doçura e a força do campo. Cuidado especializado voltado à saúde, reprodução e produtividade do rebanho, com foco em alta performance.',
      color: '#E8F5E9',
      badgeColor: '#81C784'
    },
    {
      id: 'ovelha',
      name: 'Ovelha',
      specialty: 'Ovinos',
      image: '/ovelha_completo.png',
      description: 'Mansidão e cuidado. Acompanhamento veterinário dedicado para garantir a saúde e a tranquilidade do seu rebanho.',
      color: '#E3F2FD',
      badgeColor: '#64B5F6'
    },
    {
      id: 'cabra',
      name: 'Cabra',
      specialty: 'Caprinos',
      image: '/cabra_completo.png',
      description: 'Inteligência e energia contagiante. Manejo eficiente e medicina preventiva para uma vida ativa e produtiva.',
      color: '#FFFDE7',
      badgeColor: '#FFF176'
    }
  ];

  return (
    <section className={styles.section} id="especialidades-pacientes">
      <div className="container">
        {/* Main highlight area with face icons */}
        <div className={`${styles.highlightHeader} ${headerVisible ? styles.animateIn : ''}`} ref={headerRef}>
          <div className={styles.titleWrapper}>
            <h2 className="section-title">Público-Alvo, Especialidades e Nossos Pacientes</h2>
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

        <div className={styles.categoriesContainer}>
           <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.iconGroup}>
                  <Dog size={32} />
                  <Cat size={32} />
                </div>
                <h3>Para Pets (Cães e Gatos)</h3>
              </div>
              <p className={styles.categorySubtitle}>Conforto e segurança para quem você ama, no aconchego do seu lar.</p>
              <ul className={styles.featureList}>
                <li><CheckCircle2 size={18} className={styles.checkIcon}/> Consultas domiciliares sem estresse</li>
                <li><CheckCircle2 size={18} className={styles.checkIcon}/> Vacinação e check-up preventivo</li>
                <li><CheckCircle2 size={18} className={styles.checkIcon}/> Nutrição clínica especializada</li>
              </ul>
           </div>

           <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.iconGroup}>
                  <Tractor size={32} />
                  <Tent size={32} />
                </div>
                <h3>Produção e Equinos</h3>
              </div>
              <p className={styles.categorySubtitle}>Manejo eficiente e alta performance a campo com tecnologia de ponta.</p>
              <ul className={styles.featureList}>
                <li><CheckCircle2 size={18} className={styles.checkIcon}/> Bovinos: Foco em produtividade</li>
                <li><CheckCircle2 size={18} className={styles.checkIcon}/> Equinos: Medicina esportiva</li>
                <li><CheckCircle2 size={18} className={styles.checkIcon}/> Manejo reprodutivo e nutricional</li>
                <li><CheckCircle2 size={18} className={styles.checkIcon}/> Atendimento emergencial a campo</li>
              </ul>
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
                <div className={styles.animalFloatWrapper}>
                  <img src={animal.image} alt={animal.name} className={styles.fullAnimalImage} />
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTitleRow}>
                  <h3>{animal.name}</h3>
                  <span className={styles.badge} style={{ backgroundColor: animal.badgeColor, color: '#fff' }}>{animal.specialty}</span>
                </div>
                <p>{animal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
