export default function Box({ children }) {
  return (
    <div className='flex items-center justify-center w-16 h-16 text-2xl font-bold border-2 rounded-md border-emerald-200 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-emerald-600 lg:text-4xl text-emerald-200'>
      {children}
    </div>
  );
}