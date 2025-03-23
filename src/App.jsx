import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import CourseContent from './components/CourseContent';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize VANTA background
    window.VANTA.WAVES({
      el: document.body,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0077ff,
      shininess: 35.00,
      waveHeight: 15.00,
      waveSpeed: 0.75,
      zoom: 0.65,
      backgroundColor: 0x0055cc
    });
  }, []);

  return (
    <>
      <div className="side-decoration left"></div>
      <div className="side-decoration right"></div>
      <Navbar />
      <Hero />
      <VideoSection />
      <CourseContent />
      <Footer />
    </>
  );
}

export default App; 