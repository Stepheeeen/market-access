"use client"
import React, { useState, useEffect } from 'react';
import 'animate.css';

const FadeOutRight: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const section = document.getElementById('fade-out-right');
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
      id="fade-out-right"
      className={`animate__animated ${isVisible ? 'animate__fadeInRight' : 'animate__fadeOutRight'}`}
    >
      {children}
    </div>
  );
};

export default FadeOutRight;
