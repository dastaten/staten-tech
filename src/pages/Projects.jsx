import { useState, useEffect } from 'react';

import Section from '../components/Section';
import ProjectFlexBoxPic from '/project-flex-box.jpg';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Section>
      <div className={`flex flex-col items-center justify-center w-full transition-opacity duration-500 ${isVisible ? ' opacity-100' : 'opacity-0'}`}>
        <div className='flex flex-col items-center gap-5 max-w-[665px] lg:text-lg h-fit p-5 rounded-xl bg-slate-800 border-[1px] border-default'>
          <Link className='mt-3 mb-0 text-2xl font-bold md:text-3xl text-alt' to='/flex-box' target='_blank'><span>Flex Box Playground</span></Link>
          <Link to='/flex-box' target='_blank'><img src={ProjectFlexBoxPic} className='border-[1px] rounded-md border-default my-0 w-[400px] sm:w-[450px] md:w-[500px]' alt='Flex Box Playground' /></Link>
          <hr className='w-32 h-2 mt-3 mb-1 rounded-full bg-alt' />
          <div>An interactive tool that allows developers to experiment with flexbox styles and generate custom Tailwind CSS classes. Key features include:
            <ul className='pt-3 pb-4 pl-4 ml-3 list-disc'>
              <li className='pl-1'>Customize the number of boxes</li>
              <li className='pl-1'>Explore various flexbox properties like direction, justification, and alignment</li>
              <li className='pl-1'>Live preview of style changes</li>
              <li className='pl-1'>Copy generated styles to clipboard for seamless integration</li>
            </ul>
            The Flex Box Playground streamlines the process of creating responsive layouts, making it an invaluable resource for both beginners learning flexbox and experienced developers seeking a quick styling solution.
          </div>
          <Link className='px-6 py-2 pt-3 mb-2 text-lg font-bold transition-all duration-300 rounded-full w-fit text-dark bg-alt hover:cursor-pointer hover:bg-[#5991ff] hover:text-[#1a1f2b]' to='/flex-box' target='_blank'><span className='flex justify-center'>View Project</span></Link>
        </div>
      </div>
    </Section>
  );
}