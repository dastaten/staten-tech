import { useState, useEffect } from 'react';

import Section from '../components/Section';

export default function PageNotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (

    <Section>
      <div className={`flex items-center justify-center w-full transition-opacity duration-500 ${isVisible ? ' opacity-100' : 'opacity-0'}`}>
        <p className='lg:text-lg p-5 pb-5 rounded-xl bg-slate-800 border-[1px] border-default'>{`Looks like that page doesn't exist. 🤔`}</p>
      </div>
    </Section>

  );
}