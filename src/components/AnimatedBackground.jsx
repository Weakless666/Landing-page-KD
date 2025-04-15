import React, { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteorites, setMeteorites] = useState([]);

  useEffect(() => {
    // Create initial stars
    const initialStars = Array.from({ length: 100 }, () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      moveX: (Math.random() - 0.5) * 100,
      moveY: (Math.random() - 0.5) * 100,
      delay: Math.random() * 5,
      size: Math.random() * 3 + 1, // Random size between 1 and 4
      opacity: Math.random() * 0.5 + 0.3, // Random opacity between 0.3 and 0.8
    }));

    // Create initial meteorites
    const initialMeteorites = Array.from({ length: 3 }, () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 5,
      size: Math.random() * 2 + 1,
    }));

    setStars(initialStars);
    setMeteorites(initialMeteorites);

    // Periodically update star positions
    const starInterval = setInterval(() => {
      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          x: Math.random() * 100,
          y: Math.random() * 100,
          moveX: (Math.random() - 0.5) * 100,
          moveY: (Math.random() - 0.5) * 100,
          delay: Math.random() * 5,
        }))
      );
    }, 8000);

    // Periodically update meteorite positions
    const meteoriteInterval = setInterval(() => {
      setMeteorites((prevMeteorites) =>
        prevMeteorites.map((meteorite) => ({
          ...meteorite,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
        }))
      );
    }, 10000);

    return () => {
      clearInterval(starInterval);
      clearInterval(meteoriteInterval);
    };
  }, []);

  return (
    <div className="stars-container">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            "--duration": `${star.duration}s`,
            "--moveX": `${star.moveX}px`,
            "--moveY": `${star.moveY}px`,
            animationDelay: `${star.delay}s`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Planet */}
      <div className="planet" />

      {/* Moon */}
      <div className="moon" />

      {/* Meteorites */}
      {meteorites.map((meteorite) => (
        <div
          key={meteorite.id}
          className="meteorite"
          style={{
            left: `${meteorite.x}%`,
            top: `${meteorite.y}%`,
            "--duration": `${meteorite.duration}s`,
            animationDelay: `${meteorite.delay}s`,
            width: `${meteorite.size}px`,
            height: `${meteorite.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
