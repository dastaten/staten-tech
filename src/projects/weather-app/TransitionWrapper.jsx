import { useState, useEffect } from 'react';

export default function TransitionWrapper({ children, isLoading }) {
  const [isVisible, setIsVisible] = useState(true);
  const [content, setContent] = useState(children);

  useEffect(() => {
    let fadeOutTimer, contentTimer, fadeInTimer;

    if (isLoading) {
      setIsVisible(false);
      fadeOutTimer = setTimeout(() => {
        setContent(null);
      }, 350);
    } else {
      contentTimer = setTimeout(() => {
        setContent(children);
        fadeInTimer = setTimeout(() => {
          setIsVisible(true);
        }, 50);
      }, 350);
    }

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(contentTimer);
      clearTimeout(fadeInTimer);
    };
  }, [children, isLoading]);

  return (
    <div
      className={`transition-opacity duration-350 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} flex flex-col justify-between h-full w-full px-4 sm:px-0`}
    >
      {content}
    </div>
  );
}