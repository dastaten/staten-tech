import { useState, useEffect } from 'react';

import Section from '../components/Section';
import underConstruction from '/under-construction.png';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Section>
      <div className={`flex flex-col items-center justify-center w-full transition-opacity duration-300 ${isVisible ? ' opacity-100' : 'opacity-0'}`}>
        <img src={underConstruction} className='w-40 pb-5' alt='Under Construction' />
        <p className='max-w-[665px] lg:text-lg h-fit p-5 rounded-xl bg-slate-800 border-[1px] border-default'>
          In the Works: Stay tuned for a showcase of my latest creations!
        </p>
      </div>
    </Section>
  );
}