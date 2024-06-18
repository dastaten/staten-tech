export default function StyleDisplay({ currentStyles }) {
  return (
    <div className='flex border-2 rounded-md border-sky-700 min-h-[5vh] w-full text-sky-200 justify-center items-center text-lg lg:text-xl font-bold pt-1'>
      Current styles:&nbsp;<span className='text-sky-300'>{currentStyles.join(' ')}</span>
    </div>
  );
}