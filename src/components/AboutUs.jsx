import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/AboutUs.css';

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section className="about-us-section" id="about">
      <div className="container">
        <h2>{t('aboutUsTitle')}</h2>
        <p className="about-description">
          {t('aboutUsDescription')}
        </p>
        <div className="mission-section">
          <h3>{t('ourMissionTitle')}</h3>
          <ul className="mission-list">
            <li>{t('contentCreation')}</li>
            <li>{t('skillsToIncome')}</li>
            <li>{t('buildPersonalBrand')}</li>
          </ul>
        </div>
        <div className="promise-section">
          <p>{t('noSevenDayPromise')}</p>
          <p>{t('supportPromise')}</p>
        </div>
        <div className="cta-section">
          <button className="primary-button">{t('signUpNowButton')}</button>
          <button className="secondary-button">{t('bookCallButton')}</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 