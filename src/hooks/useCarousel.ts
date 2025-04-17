import { useState, useEffect, useCallback } from "react";

export function useCarousel(itemsCount: number, autoAdvanceDelay = 3500) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(true);

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsCount);
    setIsAutoAdvancing(false);
  }, [itemsCount]);

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemsCount) % itemsCount);
    setIsAutoAdvancing(false);
  }, [itemsCount]);

  useEffect(() => {
    if (isAutoAdvancing) {
      const timer = setTimeout(() => {
        next();
        setIsAutoAdvancing(true);
      }, autoAdvanceDelay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, isAutoAdvancing, next, autoAdvanceDelay]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAutoAdvancing(true);
    }, autoAdvanceDelay);

    return () => clearTimeout(timer);
  }, [currentIndex, autoAdvanceDelay]);

  return { currentIndex, next, prev };
}
