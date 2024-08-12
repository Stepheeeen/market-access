"use client"
import React, { useState, useEffect, useRef } from 'react';
import 'animate.css';

const FadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after the element is in view
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`animate__animated ${isVisible ? 'animate__fadeIn' : ''}`}
      style={{
        // animationDelay: isVisible ? '1.2s' : '0s',
        // animationDuration: '2s', // Adjust this value to control the speed
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
