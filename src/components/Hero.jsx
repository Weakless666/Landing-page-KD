import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import backgroundImage from '../assets/Images/kraskata-home.jpg';

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="section">
      <div className="hero-image-container">
        <img src={backgroundImage} alt={t('heroBackground')} className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="window-content">
            <div className="welcome-text">
              <span className="highlight">{t('joinBestCommunity')}</span>
              <div className="subtitle-container">
                <h2 className="subtitle">
                  {t('createInspiring')} <br/> {t('monetizeSkills')}
                </h2>
                <p className="welcome-text-paragraph">
                  {t('rediscoverWorld')}
                </p>
                <a href="#video" className="learn-more">{t('learnMore')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 