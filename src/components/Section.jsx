import Particle from './Particle';

export default function Section({ children }) {
  return (
    <section>
      <div className='p-10 text-default flex items-center justify-center w-full min-h-[93dvh] md:min-h-[92dvh] lg:min-h-[91dvh]'>
        {children}
        <Particle />
      </div>
    </section>
  );
}