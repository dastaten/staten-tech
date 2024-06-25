import { useState, useEffect } from 'react';

const TransitionWrapper = ({ children, isLoading }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [content, setContent] = useState(children);

  useEffect(() => {
    let fadeOutTimer, contentTimer, fadeInTimer;

    if (isLoading) {
      setIsVisible(false);
      fadeOutTimer = setTimeout(() => {
        setContent(null);
      }, 450);
    } else {
      contentTimer = setTimeout(() => {
        setContent(children);
        fadeInTimer = setTimeout(() => {
          setIsVisible(true);
        }, 50);
      }, 450);
    }

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(contentTimer);
      clearTimeout(fadeInTimer);
    };
  }, [children, isLoading]);

  return (
    <div
      className={`transition-opacity duration-450 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} flex flex-col justify-between h-full w-full px-5 sm:px-0`}
    >
      {content}
    </div>
  );
};

export default TransitionWrapper;