import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div 
        className={styles.scrollProgress} 
        style={{ transform: `scaleX(${scrollProgress})` }}
      ></div>
      <div className={`container ${styles.container}`}>
        <a href="#inicio" className={styles.logo} onClick={closeMobileMenu}>
          <img src="/logo01.png" alt="Logo 1" className={styles.logoImg} />
          <img src="/logo02.png" alt="Logo 2" className={styles.logoImg} />
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#especialidades">Especialidades</a>
          <a href="#proposito">Propósito</a>
          <a href="#duvidas">Dúvidas</a>
          <a href="#localizacao">Localização</a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu} aria-label="Menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.mobileOverlayOpen : ''}`}
        onClick={closeMobileMenu}
      ></div>
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <div className={styles.mobileNavHeader}>
          <button className={styles.closeMenuBtn} onClick={closeMobileMenu} aria-label="Fechar">
            <X size={28} />
          </button>
        </div>
        <nav className={styles.mobileNavLinks}>
          <a href="#inicio" onClick={closeMobileMenu}>Início</a>
          <a href="#sobre" onClick={closeMobileMenu}>Sobre</a>
          <a href="#especialidades" onClick={closeMobileMenu}>Especialidades</a>
          <a href="#proposito" onClick={closeMobileMenu}>Propósito</a>
          <a href="#duvidas" onClick={closeMobileMenu}>Dúvidas</a>
          <a href="#localizacao" onClick={closeMobileMenu}>Localização</a>
        </nav>
      </div>
    </header>
  );
}
