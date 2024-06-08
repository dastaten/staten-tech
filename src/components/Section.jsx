import Particle from './Particle';

export default function Section({ children }) {
  return (
    <section>
      <div className={`px-10 text-base md:text-lg lg:text-xl text-default flex w-full min-h-[93vh] md:min-h-[92vh]`}>
        {children}
        <Particle />
      </div>
    </section>
  );
}