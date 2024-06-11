import { Link } from 'react-router-dom';

import { dGithub, dLinkedIn } from '../utilities/Constants';

export default function Footer() {
  return (
    <div className=' border-t-2 border-t-[#2f415c] px-10 py-5 text-sm text-center lg:text-base text-default bg-dark'>
      <div className='flex items-center justify-center w-64 gap-4 pt-1 pb-4 mx-auto md:gap-5 lg:gap-6'>
        <span>
          <Link to='https://github.com/dastaten' target="_blank">
            <svg
              className='transition-colors duration-300 w-8 md:w-10 fill-[#3F5785] hover:fill-[#5991ff]'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512">
              <path d={dGithub} />
            </svg>
          </Link>
        </span>

        <span>
          <Link to='https://www.linkedin.com/in/dorian-staten/' target='_blank'>
            <svg
              className='transition-colors duration-300 w-8 md:w-10 fill-[#3F5785] hover:fill-[#5991ff]'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path d={dLinkedIn} /></svg>
          </Link>
        </span>

        <span className='transition-colors duration-300 text-lg md:text-xl h-8 md:h-10 px-4 pt-1 flex items-center lg:text-2xl bg-[#3F5785] hover:bg-[#5991ff] lg:px-5 rounded-full text-[#1E293B] font-bold hover:cursor-pointer'>
          Resumé
        </span>
      </div>

      <p className='mb-2'>
        Built with <span className='font-bold'>React</span> and <span className='font-bold'>Tailwind CSS</span>.
      </p>

      <p>
        Copyright &copy; {new Date().getFullYear()} staten.tech. All rights reserved.
      </p>
    </div>
  );
}