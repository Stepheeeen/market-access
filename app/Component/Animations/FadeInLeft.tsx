"use client"
import React, { useState, useEffect } from 'react';
import 'animate.css';

const FadeInLeft: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('fade-in-left');
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
      id="fade-in-left"
      className={`animate__animated ${isVisible ? 'animate__fadeInLeft' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInLeft;
