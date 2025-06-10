'use client';

import { useState, useEffect } from 'react';

interface UseLoadingOptions {
  delay?: number;
  minLoadingTime?: number;
}

export function useLoading({ delay = 0, minLoadingTime = 1000 }: UseLoadingOptions = {}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    
    const timer = setTimeout(() => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsed);
      
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, minLoadingTime]);

  return isLoading;
}

export function useStaggeredLoading(count: number, baseDelay: number = 200) {
  const [loadedItems, setLoadedItems] = useState<boolean[]>(new Array(count).fill(false));

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    for (let i = 0; i < count; i++) {
      const timer = setTimeout(() => {
        setLoadedItems(prev => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, baseDelay * (i + 1));
      
      timers.push(timer);
    }

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [count, baseDelay]);

  return loadedItems;
}