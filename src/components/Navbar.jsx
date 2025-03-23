import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src="/src/assets/Images/RVS.png" alt="RVS Logo" className="brand-logo" />
      </div>
      
      <button 
        className={`burger-menu ${isMenuOpen ? 'active' : ''}`} 
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Начало</a></li>
          <li><a href="#video" onClick={() => setIsMenuOpen(false)}>Курс</a></li>
          <li><a href="#course-content" onClick={() => setIsMenuOpen(false)}>За нас</a></li>
        </ul>
        <a 
          href="https://whop.com/viral-video-social-media/" 
          className="nav-cta" 
          target="_blank"
          rel="noopener noreferrer"
        >
          ЗАПИШИ СЕ СЕГА
        </a>
      </div>
    </nav>
  );
}

export default Navbar; 