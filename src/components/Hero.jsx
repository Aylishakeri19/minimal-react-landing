import React from 'react';

export default function Hero() {
  const particles = Array.from({ length: 22 }); // 20 particle

  return (
    <section className="hero">
      <div className="particles">
        {particles.map((_, i) => (
          <span key={i} style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 5 + 3}px`,
            height: `${Math.random() * 5 + 3}px`,
            animationDuration: `${Math.random() * 8 + 5}s`,
            animationDelay: `${Math.random() * 5}s`
          }}></span>
        ))}
      </div>
      <h1>Minimal app for time</h1>
      <p>Simple, fast and no fuss – exactly what you need</p>
      <button>Download app</button>
    </section>
  );
}