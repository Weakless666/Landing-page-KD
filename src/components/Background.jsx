import React from 'react';
import '../styles/Background.css';

const Background = () => {
  return (
    <div className="animated-background">
      <div className="flag-background">
        <div className="flag flag-bg"></div>
        <div className="flag flag-us"></div>
        <div className="flag flag-bg"></div>
        <div className="flag flag-us"></div>
        <div className="flag flag-bg"></div>
        <div className="flag flag-us"></div>
      </div>
      <div className="floating-words">
        <span className="floating-word word-content">Content</span>
        <span className="floating-word word-editing">Video Editing</span>
        <span className="floating-word word-vlogs">Vlogs</span>
        <span className="floating-word word-viral">Viral</span>
        <span className="floating-word word-content-2">Content</span>
        <span className="floating-word word-editing-2">Video Editing</span>
        <span className="floating-word word-vlogs-2">Vlogs</span>
        <span className="floating-word word-viral-2">Viral</span>
      </div>
    </div>
  );
};

export default Background; 