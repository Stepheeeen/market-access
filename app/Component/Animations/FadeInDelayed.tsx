"use client"
import React, { useState, useEffect } from 'react';
import 'animate.css';

const FadeInDelayed: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('fade-in');
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="fade-in"
      className={`animate__animated ${isVisible ? 'animate__fadeIn fadeInDelayedExtended' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInDelayed;
