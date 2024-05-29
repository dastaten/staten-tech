export default function Section({ children }) {
  return (
    <section className='bg-background bg-cover bg-center px-10 text-base md:text-lg lg:text-xl text-default flex flex-col items-center justify-center w-full min-h-[93vh] md:h-[92vh] lg:h-[91vh]'>
      {children}
    </section>
  );
}