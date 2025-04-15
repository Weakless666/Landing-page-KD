import React from "react";
import { useLanguage } from "../context/LanguageContext";
import '../styles/Footer.css';

function Footer() {
  const { t } = useLanguage();

  return (
    <section className="footer-section" id="footer">
      <div className="flag-background">
        <div className="flag flag-bg"></div>
        <div className="flag flag-us"></div>
        <div className="flag flag-bg"></div>
        <div className="flag flag-us"></div>
      </div>
      <div className="floating-words">
      </div>
      <div className="footer-content">
        <h2>{t('aboutUsTitle')}</h2>
        <p>
          {t('reelVisionDescription')}
        </p>

        <div className="mission-section">
          <p>{t('ourMission')}</p>
          <div className="mission-list">
            <p>{t('createEngagingContent')}</p>
            <p>{t('turnSkillsIntoIncome')}</p>
            <p>{t('buildTrustedBrand')}</p>
          </div>
        </div>

        <div className="promise-section">
          <p>{t('noQuickSuccess')}</p>
          <p>{t('promiseSupport')}</p>
        </div>

        <div className="social-section">
          <p>{t('connectWithMe')}</p>
          <div className="social-icons">
            <a
              href="https://www.tiktok.com/@krasenusa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/src/assets/Icons/TikTok.png" alt="TikTok" />
            </a>
            <a
              href="https://www.facebook.com/krasen.diqnov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/src/assets/Icons/Facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/krasenveselinov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/src/assets/Icons/Instagram.png" alt="Instagram" />
            </a>
            <a
              href="https://youtube.com/@kraskatamomche"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/src/assets/Icons/YouTube.png" alt="YouTube" />
            </a>
            <a
              href="https://discord.gg/dxbFjTA9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/src/assets/Icons/discord.png" alt="Discord" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
