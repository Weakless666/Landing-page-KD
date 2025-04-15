import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageToggle.css';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bg' : 'en');
  };

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'en' ? 'Bulgarian' : 'English'}`}
    >
      <div className="language-toggle-inner">
        <span className={`language-option ${language === 'en' ? 'active' : ''}`}>EN</span>
        <span className="language-separator">|</span>
        <span className={`language-option ${language === 'bg' ? 'active' : ''}`}>BG</span>
      </div>
    </button>
  );
};

export default LanguageToggle; 