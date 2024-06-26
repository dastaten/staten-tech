import { useState, useEffect } from 'react';

import Section from '../components/Section';

export default function Confirmation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Section>
      <div className={`flex items-center justify-center w-full transition-opacity duration-500 ${isVisible ? ' opacity-100' : 'opacity-0'}`}>
        <p className='h-vh lg:text-lg w-fit h-fit p-5 pb-5 rounded-xl bg-slate-800 border-[1px] border-default'>{`Thank you for your message! I'll get back to you as soon as possible.`}</p>
      </div>
    </Section>
  );
}