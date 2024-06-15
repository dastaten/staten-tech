import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { dGithub, dLinkedIn } from '../utilities/Constants';

import Section from '../components/Section';
import ProfilePic from '/profile.jpg';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Section>
      <div className={`flex items-center justify-center w-full h-full transition-opacity duration-500 ${isVisible ? ' opacity-100' : 'opacity-0'}`}>
        <div className={'flex flex-col items-center justify-center p-10 md:p-12 lg:p-16 rounded-xl w-fit h-fit md:flex-row gap-8 md:gap-10 lg:gap-14 bg-slate-800 border-[1px] border-default bg-cover bg-profile bg-opacity-10 bg-center'}>

          <div>
            <img src={ProfilePic} alt={`Dorian Staten's profile picture`} className='w-64 mx-auto rounded-full lg:w-80 border-default border-[1px]' />
          </div>

          <div>
            <p className='text-lg text-center lg:text-xl'>Hi, {`I'm`}</p>
            <p className='pt-1 text-2xl font-bold text-center text-[#73a2ff] lg:text-3xl'>Dorian Staten</p>
            <p className='pt-2 text-xl font-bold text-center pb-7 lg:text-2xl'>Front End Developer</p>

            <div className='flex items-center justify-center w-64 gap-5'>
              <span>
                <Link to='https://github.com/dastaten' target="_blank">
                  <svg
                    className='transition-colors duration-300 w-10 md:w-12 fill-[#73a2ff] hover:fill-[#3d7bff]'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512">
                    <path d={dGithub} />
                  </svg>
                </Link>
              </span>

              <span>
                <Link to='https://www.linkedin.com/in/dorian-staten/' target='_blank'>
                  <svg
                    className='transition-colors duration-300 w-10 md:w-12 fill-[#73a2ff] hover:fill-[#3d7bff]'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path d={dLinkedIn} /></svg>
                </Link>
              </span>

              <Link to='/Dorian_Staten_-_Front-End_Developer.pdf' target='_blank'>
                <span className='transition-colors duration-300 flex items-center h-10 px-4 pt-1 text-xl font-bold rounded-full md:h-12 lg:text-2xl lg:px-5 text-[#010202] hover:cursor-pointer bg-[#73a2ff] hover:bg-[#3d7bff]'>
                  Resumé
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
}