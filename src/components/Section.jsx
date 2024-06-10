import Particle from './Particle';

export default function Section({ children }) {
  return (
    <section>
      <div className='p-10 text-default flex items-center justify-center w-full min-h-[calc(100vh-7vh)] md:min-h-[calc(100vh-8vh)] lg:min-h-[calc(100vh-9vh)]'>
        {children}
        <Particle />
      </div>
    </section>
  );
}