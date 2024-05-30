import { Link } from 'react-router-dom';

import { dGithub, dLinkedIn } from '../utilities/constants.js';

import Section from '../components/Section';
import ProfilePic from '../assets/profile.jpg';

export default function Home() {
  return (
    <Section>
      <div className='flex flex-col items-center justify-center w-full md:flex-row gap-14'>
        <div><img src={ProfilePic} alt={`Dorian Staten's profile picture`} className='w-64 mx-auto my-0 rounded-full lg:w-80' /></div>
        <div>
          <p className='text-base text-center md:text-lg'>{`Hi, I'm`}</p>
          <p className='pt-1 text-2xl font-bold text-center md:text-3xl'>Dorian Staten</p>
          <h2 className='pt-2 pb-5 text-xl text-center md:text-2xl'>Front End Developer</h2>
          <div className='flex items-center justify-between w-64'>

            <span>
              <Link to='https://github.com/dastaten' target="_blank">
                <svg
                  className='w-[45px]'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512">
                  <path fill="#a1ceff" d={dGithub} />
                </svg>
              </Link>
            </span>

            <span>
              <Link to='https://www.linkedin.com/in/dorian-staten/' target='_blank'>
                <svg
                  className='w-[45px]'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512">
                  <path fill="#a1ceff" d={dLinkedIn} /></svg>
              </Link>
            </span>

            <span className='text-xl bg-[#a1ceff] pt-[9px] pb-[7px] px-4 rounded-full text-[#10131a] font-bold'>
              Resume
            </span>

          </div>
        </div>
      </div>
    </Section>
  );
}