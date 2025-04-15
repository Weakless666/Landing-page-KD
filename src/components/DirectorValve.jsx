import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import '../styles/DirectorValve.css';

const DirectorValve = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    // Show the valve after a short delay for the opening animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    setIsClosing(true);
    // Increased timeout to match the new animation duration
    setTimeout(() => {
      setIsVisible(false);
      navigate('/main');
    }, 2500);
  };

  if (!isVisible) return <div className="director-valve" />;

  return (
    <div className={`director-valve ${isClosing ? 'closing' : ''}`}>
      <div className="studio-setup">
        {/* Ceiling Structure */}
        <div className="ceiling-grid">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="grid-beam" />
          ))}
        </div>

        {/* Overhead Lights */}
        <div className="overhead-lights">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="overhead-light" />
          ))}
        </div>

        {/* Green Screen */}
        <div className="green-screen-wall">
          <div className="green-screen"></div>
        </div>

        {/* Floor Standing Lights */}
        <div className="floor-lights">
          <div className="floor-light left">
            <div className="light-head"></div>
            <div className="light-stand"></div>
            <div className="light-base"></div>
          </div>
          <div className="floor-light right">
            <div className="light-head"></div>
            <div className="light-stand"></div>
            <div className="light-base"></div>
          </div>
        </div>

        {/* Studio Chair */}
        <div className="studio-chair">
          <div className="chair-back"></div>
          <div className="chair-seat"></div>
        </div>

        {/* Floor Reflection */}
        <div className="floor-reflection"></div>
      </div>

      <div className="studio-name">
        <h1>Reel Vision Studio</h1>
      </div>

      <div className="clapperboard">
        <div className="clapper-top">
          <div className="clapper-bar black"></div>
          <div className="clapper-bar white"></div>
          <div className="clapper-bar black"></div>
          <div className="clapper-bar white"></div>
          <div className="clapper-bar black"></div>
          <div className="clapper-bar white"></div>
        </div>
        <div className="clapper-bottom">
          <div className="clapper-content">
            <div className="clapper-text">
              <div className="clapper-left">
                <div>{t('scene')}</div>
                <div>{t('date')}</div>
                <div>{t('prodCo')}</div>
                <div>{t('director')}</div>
              </div>
              <div className="clapper-center">
                <div>001</div>
                <div>{new Date().toLocaleDateString()}</div>
                <div>REEL VISION</div>
                <div>KRASKATA</div>
              </div>
              <div className="clapper-right">
                <div>{t('take')}</div>
                <div>{t('roll')}</div>
                <div>{t('sound')}</div>
              </div>
              <div className="clapper-far-right">
                <div>1A</div>
                <div>24FPS</div>
                <div>✓</div>
              </div>
            </div>
            <button onClick={handleContinue} className="continue-button">
              {t('continueToSite')}
            </button>
          </div>
        </div>
      </div>

      <div className="language-toggle-container">
        <LanguageToggle />
      </div>
    </div>
  );
};

export default DirectorValve; 