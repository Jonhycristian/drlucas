import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      <div className={`container ${styles.container}`}>
        <a href="#inicio" className={styles.logo} onClick={closeMobileMenu}>
          <img src="/logo01-semfundo.png" alt="Dr. Lucas Logo" className={styles.logoImg} />
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
      {isMobileMenuOpen && (
        <div className={styles.mobileNav}>
          <nav className={styles.mobileNavLinks}>
            <a href="#inicio" onClick={closeMobileMenu}>Início</a>
            <a href="#sobre" onClick={closeMobileMenu}>Sobre</a>
            <a href="#especialidades" onClick={closeMobileMenu}>Especialidades</a>
            <a href="#proposito" onClick={closeMobileMenu}>Propósito</a>
            <a href="#duvidas" onClick={closeMobileMenu}>Dúvidas</a>
            <a href="#localizacao" onClick={closeMobileMenu}>Localização</a>
          </nav>
        </div>
      )}
    </header>
  );
}
