import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function ScrollReveal({ children, className = '', style = {}, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div 
      ref={ref} 
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
