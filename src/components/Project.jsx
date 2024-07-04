import { Link } from 'react-router-dom';

export default function Project({ projectTitle, projectLink, ProjectPic, children }) {
  return (
    <div className='flex flex-col items-center gap-5 max-w-[665px] lg:text-lg h-fit p-5 mb-10 rounded-xl bg-slate-800 border-[1px] border-default'>
      <Link className='mt-3 mb-0 text-2xl font-bold text-center md:text-3xl text-alt' to={projectLink} target='_blank'><span>{projectTitle}</span></Link>
      <Link to={projectLink} target='_blank'><img src={ProjectPic} className='rounded-md my-0 w-[400px] sm:w-[450px] md:w-[500px]' alt={projectTitle} /></Link>
      <hr className='w-32 h-2 mt-2 mb-1 rounded-full bg-alt' />
      <div className='lg:text-lg'>
        {children}
      </div>
      <Link className='px-6 pb-2 pt-3 mb-2 lg:text-lg font-bold transition-all duration-300 rounded-full w-fit text-dark bg-alt hover:cursor-pointer hover:bg-[#5991ff] hover:text-[#1a1f2b]' to={projectLink} target='_blank'><span className='flex justify-center'>View Project</span></Link>
    </div>
  );
}