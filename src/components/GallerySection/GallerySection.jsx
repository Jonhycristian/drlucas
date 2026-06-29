import React from 'react';
import styles from './GallerySection.module.css';

export function GallerySection() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1599422204732-73a7638d15a5?q=80&w=800&auto=format&fit=crop",
      alt: "Atendimento a Campo"
    },
    {
      src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
      alt: "Cuidados Veterinários"
    },
    {
      src: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?q=80&w=800&auto=format&fit=crop",
      alt: "Pet"
    },
    {
      src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
      alt: "Consultório"
    },
    {
      src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop",
      alt: "Carinho com Pets"
    },
    {
      src: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=800&auto=format&fit=crop",
      alt: "Equinos"
    }
  ];

  return (
    <section className={styles.gallery} id="galeria">
      <div className="container">
        <h2 className="section-title">O Dia a Dia</h2>
        <p className={styles.subtitle}>Um pouco da nossa rotina clínica e a campo</p>
        
        <div className={styles.grid}>
          {images.map((img, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={img.src} alt={img.alt} className={styles.image} loading="lazy" />
              <div className={styles.overlay}>
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
