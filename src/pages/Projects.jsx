import Section from '../components/Section';
import underConstruction from '../assets/under-construction.png';

export default function Projects() {
  return (
    <Section>
      <div className='flex flex-col items-center justify-center w-full h-[85vh]'>
        <img src={underConstruction} className='w-40 pb-5' alt='Under Construction' />
        <p className='max-w-[665px] md:text-lg h-fit p-5 rounded-xl bg-slate-800 border-[1px] border-[#a1ceff]'>
          In the Works: Stay tuned for a showcase of my latest creations!
        </p>
      </div>
    </Section>
  );
}