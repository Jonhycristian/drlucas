import React from 'react';
import styles from './ServicesSection.module.css';
import { Home, AlertCircle, TestTube, Apple, Briefcase, Syringe } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: <Home size={32} />,
      title: 'Atendimento Domiciliar e a Campo',
      description: 'Levamos a estrutura da clínica até você, garantindo conforto e praticidade para o animal e para o tutor/produtor.'
    },
    {
      icon: <AlertCircle size={32} />,
      title: 'Urgência e Emergência',
      description: 'Suporte rápido para situações críticas, visando a estabilização e saúde do paciente.'
    },
    {
      icon: <TestTube size={32} />,
      title: 'Exames Complementares',
      description: 'Solicitação e encaminhamento para exames laboratoriais e de imagem de forma ágil e segura.'
    },
    {
      icon: <Apple size={32} />,
      title: 'Reprodução e Nutrição',
      description: 'Planejamento nutricional e reprodutivo focado em qualidade de vida e produtividade do rebanho.'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Assistência Técnica',
      description: 'Consultoria especializada para produtores rurais, otimizando resultados na fazenda.'
    },
    {
      icon: <Syringe size={32} />,
      title: 'Vacinação e Profilaxia',
      description: 'Protocolos vacinais e controle de parasitas personalizados para manter seu animal sempre protegido e saudável.'
    }
  ];

  return (
    <section className={styles.services} id="servicos">
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--bg-white)' }}>Nossos Serviços</h2>
        <p className={styles.subtitle}>Soluções completas para a saúde e bem-estar do seu animal.</p>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
