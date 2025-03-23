import React from 'react';

function VideoSection() {
  return (
    <section id="video" className="section">
      <div className="container">
        <h2>Заповядайте в моя курс</h2>
        <div className="video-container">
          <iframe
            className="youtube-video"
            width="840"
            height="472.5"
            src="https://www.youtube.com/embed/x0MW7Fm_gP8?si=n3VxmJI-C_65lpnH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="signup-container">
          <a 
            href="https://whop.com/viral-video-social-media/" 
            className="signup-button" 
            target="_blank"
            rel="noopener noreferrer"
          >
            ЗАПИШИ СЕ СЕГА
          </a>
        </div>
      </div>
    </section>
  );
}

export default VideoSection; 