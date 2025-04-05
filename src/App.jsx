import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import CourseContent from "./components/CourseContent";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <>
      <AnimatedBackground />
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
