export default function Section({ children }) {
  return (
    <section className='p-10 text-base md:text-lg lg:text-xl text-default bg-[#10131a] h-dvh'>
      {children}
    </section>
  );
}