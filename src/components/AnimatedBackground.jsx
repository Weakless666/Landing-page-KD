import React, { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create initial stars
    const initialStars = Array.from({ length: 50 }, () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      moveX: (Math.random() - 0.5) * 100,
      moveY: (Math.random() - 0.5) * 100,
      delay: Math.random() * 5,
    }));

    setStars(initialStars);

    // Periodically update star positions
    const interval = setInterval(() => {
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
    }, 8000); // Update every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stars-container">
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
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
