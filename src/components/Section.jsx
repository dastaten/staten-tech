import Particle from './Particle';

export default function Section({ children }) {
  return (
    <section>
      <div className='p-10 text-default flex items-center justify-center w-full min-h-[93vh] md:min-h-[92vh] lg:min-h-[91vh]'>
        {children}
        <Particle />
      </div>
    </section>
  );
}