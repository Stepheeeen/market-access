"use client"
import React from 'react';
import { useEffect, useState } from 'react';

export const useInView = (options: IntersectionObserverInit = {}): [boolean, React.RefObject<HTMLDivElement>] => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [isInView, ref];
};
