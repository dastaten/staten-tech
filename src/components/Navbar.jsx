import { useState } from 'react';
import CreateNavLink from './CreateNavLink';

export default function Navbar() {
  const [pageTitle, setPageTitle] = useState('Welcome');

  return (
    <nav className='flex items-center justify-between py-5 bg-[#1f2533] px-7 text-default'>
      <div className='text-2xl font-bold md:text-3xl lg:text-4xl'>{pageTitle}</div>
      <ul className='hidden space-x-3 text-lg font-semibold sm:text-base md:text-lg lg:text-xl sm:flex '>
        <li>
          <CreateNavLink
            title="Welcome"
            path="/"
            pageTitle={pageTitle}
            setPageTitle={setPageTitle}>
            Home
          </CreateNavLink>
        </li>
        <li>
          <CreateNavLink
            title="About me"
            path="/about"
            pageTitle={pageTitle}
            setPageTitle={setPageTitle}>
            About
          </CreateNavLink>
        </li>
        <li>
          <CreateNavLink
            title="My skills"
            path="/skills"
            pageTitle={pageTitle}
            setPageTitle={setPageTitle}>
            Skills
          </CreateNavLink>
        </li>
        <li>
          <CreateNavLink
            title="My projects"
            path="/projects"
            pageTitle={pageTitle}
            setPageTitle={setPageTitle}>
            Projects
          </CreateNavLink>
        </li>
        <li>
          <CreateNavLink
            title="Contact me"
            path="/contact"
            pageTitle={pageTitle}
            setPageTitle={setPageTitle}>
            Contact
          </CreateNavLink>
        </li>
      </ul>
    </nav>
  );
}