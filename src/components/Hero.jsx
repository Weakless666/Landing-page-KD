import React from 'react';
import backgroundImage from '../assets/Images/kraskata-home.jpg';

function Hero() {
  return (
    <section id="home" className="section">
      <div className="hero-image-container">
        <img src={backgroundImage} alt="Hero background" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="window-content">
            <div className="welcome-text">
              <span className="highlight">Здравейте</span>
              <div className="subtitle-container">
                <h2 className="subtitle">
                  Отвори съзнанието си към света на <br/> видео обработката
                </h2>
                <p className="welcome-text-paragraph">
                  Преоткрийте един нов свят и развийте себе си
                </p>
                <a href="#video" className="learn-more">Научете повече</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 