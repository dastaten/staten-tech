import { Link } from 'react-router-dom';

import Section from '../components/Section';

export default function About() {
  return (
    <Section>
      <div className='flex flex-col items-center justify-center w-full h-full gap-3 p-5 rounded-xl bg-slate-800 max-w-[665px] mx-auto my-10 text-sm md:text-base lg:text-lg border-[1px] border-[#d4ebff]'>
        <h2 className='mb-3 text-xl font-bold'>Over 20 Years of IT Experience – Passionate Web Developer</h2>

        <p>
          My career in IT spans over two decades, fostering a strong foundation in various technical areas. I honed my web development skills over a decade at the City of Baytown, starting as a PC technician and ultimately serving as the sole web developer. This experience allowed me to build a solid foundation in HTML, CSS, and JavaScript.
        </p>

        <p className='mb-6'>
          Following my time at the City of Baytown, I broadened my knowledge base by leading the customer support team at Paper.li. While this role primarily focused on user support, I still maintained opportunities to utilize my web development skills through HTML and CSS maintenance tasks.
        </p>

        <h2 className='mb-3 text-xl font-bold'>Revamped City of Baytown Website (3CMA Savvy Award Winner)</h2>

        <p className='mb-6'>
          During my tenure at the City of Baytown, I spearheaded the complete redesign of the {`city's`} website. This project not only garnered a prestigious 3CMA Savvy Award in 2010 but also resulted in significant cost savings for the city. By leveraging my web development skills, we were able to bring the project in-house, saving an estimated $50,000 in outsourcing fees.
        </p>

        <h2 className='mb-3 text-xl font-bold'>Rekindled Passion for Web Development</h2>

        <p>
          After Paper.li, I explored the world of game development, learning Godot and GDevelop to publish <Link className='text-[#a1ceff]' to='https://www.amazon.com/s?i=mobile-apps&rh=p_4%3ADorian+Staten&search-type=ss' target='_blank'> three games on the Amazon Store</Link>. However, my passion for web development ultimately prevailed, leading me to refocus my energy.
        </p>

        <p className='mb-6'>
          To ensure a smooth transition back into the field, I invested significant time in mastering contemporary JavaScript practices and a popular framework like React. This process reignited my enthusiasm for web development, and {`I'm`} eager to leverage my diverse skill set on new and challenging projects.
        </p>

        <h2 className='mb-3 text-xl font-bold'>Excited to Collaborate</h2>

        <p>
          With a blend of experience in development, technical support, and a renewed passion for web development, {`I'm`} confident I can contribute significantly to your team.  {`I'm`} always interested in hearing about exciting projects and opportunities – please feel free to <Link className='text-[#a1ceff]' to='/contact'>reach out to me</Link> if you have something in mind!
        </p>
      </div>
    </Section>
  );
}