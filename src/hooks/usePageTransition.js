import { useState } from "react";

export const usePageTransition = (duration = 300) => {
  const [isExiting, setIsExiting] = useState(false);

  const startTransition = (callback) => {
    setIsExiting(true);

    setTimeout(() => {
      callback();
      setIsExiting(false);
    }, duration);
  };

  return { isExiting, startTransition };
};
