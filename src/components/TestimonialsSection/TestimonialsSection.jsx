import React from 'react';
import styles from './TestimonialsSection.module.css';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "João Silva",
      role: "Tutor de Pet",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      text: "O Dr. Lucas foi excepcional no atendimento do meu cachorro. Muito atencioso e resolveu o problema rapidamente. Recomendo de olhos fechados!"
    },
    {
      name: "Mariana Costa",
      role: "Produtora Rural",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      text: "A assistência técnica prestada pelo Dr. Lucas mudou a produtividade da nossa fazenda. Profissionalismo impecável no manejo reprodutivo."
    },
    {
      name: "Carlos Ferreira",
      role: "Proprietário de Equinos",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      text: "Sempre chamo o Dr. Lucas para avaliar meus cavalos antes das provas. A medicina esportiva dele é de altíssimo nível, me sinto muito seguro."
    }
  ];

  return (
    <section className={styles.testimonials} id="depoimentos">
      <div className="container">
        <h2 className="section-title">O que dizem nossos clientes</h2>
        <p className={styles.subtitle}>A confiança construída em cada atendimento</p>
        
        <div className={styles.grid}>
          {testimonials.map((testi, index) => (
            <div key={index} className={styles.card}>
              <Quote className={styles.quoteIcon} size={40} />
              <p className={styles.text}>"{testi.text}"</p>
              
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
                ))}
              </div>
              
              <div className={styles.author}>
                <img src={testi.image} alt={testi.name} className={styles.avatar} />
                <div className={styles.authorInfo}>
                  <h4>{testi.name}</h4>
                  <span>{testi.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
