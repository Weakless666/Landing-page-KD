import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import '../styles/Navbar.css';
import rvsLogo from '../assets/Images/RVS.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const { t } = useLanguage();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <a 
        href="https://calendly.com/veselinovkrasen/30min" 
        className="nav-brand"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={rvsLogo} alt="RVS Logo" className="brand-logo" />
        <span>{t('bookCall')}</span>
      </a>
      
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>{t('home')}</a></li>
          <li><a href="#video" onClick={() => setIsMenuOpen(false)}>{t('community')}</a></li>
          <li><a href="#footer" onClick={() => setIsMenuOpen(false)}>{t('aboutUs')}</a></li>
          {currentUser ? (
            <>
              <li className="user-email">{currentUser.email}</li>
              <li>
                <button onClick={handleLogout} className="logout-button">
                  {t('logout')}
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="login-button">{t('login')}</Link>
              </li>
              <li>
                <Link to="/signup" className="nav-cta">{t('signup')}</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <button 
        className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label={t('toggleMenu')}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="user-section">
        <LanguageToggle />
      </div>
    </nav>
  );
};

export default Navbar; 