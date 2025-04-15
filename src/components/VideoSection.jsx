import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/VideoSection.css';

const VideoSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="video-section" id="video">
      <h2>{t('welcomeToCommunity')}</h2>
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/x0MW7Fm_gP8?si=n3VxmJI-C_65lpnH"
          title={t('youtubeVideoTitle')}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <button className="cta-button">{t('signupNow')}</button>
    </section>
  );
};

export default VideoSection; 