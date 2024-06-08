import { useState, useEffect } from 'react';
import Particle from './Particle';

export default function Section({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section>
        <div className={`px-10 text-base md:text-lg lg:text-xl text-default flex w-full min-h-[93vh] md:min-h-[92vh] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {children}
          <Particle />
        </div>
      </section>
    </>
  );
}