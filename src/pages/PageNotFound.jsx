import Section from '../components/Section';

export default function PageNotFound() {
  return (

    <Section>
      <div className='flex items-center justify-center w-full h-[85vh]'>
        <p className='h-vh sm:text-lg md:text-xl lg:text-2xl w-fit h-fit p-5 pb-5 rounded-xl bg-slate-800 border-[1px] border-[#a1ceff]'>{`Whoops! Looks like that page doesn't exist. 🤔`}</p>
      </div>
    </Section>

  );
}