import { useEffect, useState } from 'react';

export const useLoadingProgress = (isLoading: boolean) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return Math.min(prev + 10, 100);
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  return progress;
};
