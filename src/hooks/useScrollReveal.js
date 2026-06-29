import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Desconecta após a primeira vez que fica visível, 
        // para que não fique animando toda vez que rolar
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, // 15% do elemento precisa estar visível
      ...options
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, isVisible };
}
