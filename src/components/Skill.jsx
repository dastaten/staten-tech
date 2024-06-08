export default function Skill({ skillIcon, skillText, skillExperience, children }) {
  return (
    <div className='flex flex-col items-center max-w-[665px] p-5 pb-5 rounded-xl bg-slate-800 border-[1px] border-default'>
      <div className='flex flex-col items-center justify-start w-full gap-4 pb-5 sm:gap-8 sm:flex-row'>
        <img src={skillIcon} className='w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20' />
        <p>
          {skillText}
        </p>
      </div>

      <p className='text-sm px-5 py-2 rounded-full bg-slate-900 border-[1px] border-alt'>
        {skillExperience}
      </p>
      <div className='w-32 h-2 mt-4 rounded-full bg-light'>
        {children}
      </div>
    </div>
  );
}