"use client"
import React, { useState, useEffect } from 'react';
import 'animate.css';

const FadeOutBottomLeft: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const section = document.getElementById('fade-out-bottom-left');
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        setIsVisible(false);
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
      id="fade-out-bottom-left"
      className={`animate__animated ${isVisible ? 'animate__fadeInBottomLeft' : 'animate__fadeOutBottomLeft'}`}
    >
      {children}
    </div>
  );
};

export default FadeOutBottomLeft;