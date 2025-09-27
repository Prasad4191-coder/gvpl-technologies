import { useEffect, useState } from 'react';

export const usePerformance = () => {
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check connection speed
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      setIsSlowConnection(connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
    }

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return { isSlowConnection, prefersReducedMotion };
};

export const useLazyLoading = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isIntersecting, hasLoaded]);

  return { isIntersecting, hasLoaded, setIsIntersecting };
};
