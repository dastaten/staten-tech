import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import CreateNavLink from './CreateNavLink';

export default function Navbar({ error }) {
  const [pageTitle, setPageTitle] = useState('Welcome');
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleToggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className='flex items-center justify-between py-5 bg-[#1f2533] px-7 text-default'>
        <div className='text-2xl font-bold md:text-3xl lg:text-4xl'>{error || pageTitle}</div>
        <ul className='hidden space-x-3 text-lg font-semibold sm:text-base md:text-lg lg:text-xl sm:flex'>
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
        <div
          className='m-0 overflow-visible transition-opacity duration-150 ease-linear bg-transparent border-0 cursor-pointer transition-filter font-inherit text-inherit sm:hidden'
          ref={hamburgerRef}
          onClick={handleToggleMenu}>
          <div>
            <span className={`${menuActive ? 'translate-y-[7px] rotate-45' : ''} bar block w-[25px] h-[2px] my-[5px] mx-auto transition duration-300 ease-in-out bg-[#a1ceff]`}></span>
            <span className={`${menuActive ? 'opacity-0' : ''} bar block w-[25px] h-[2px] my-[5px] mx-auto transition duration-300 ease-in-out bg-[#a1ceff]`}></span>
            <span className={`${menuActive ? '-translate-y-[7px] -rotate-45' : ''} bar block w-[25px] h-[2px] my-[5px] mx-auto transition duration-300 ease-in-out bg-[#a1ceff]`}></span>
          </div>
        </div>
      </nav>
      <nav
        className={`rounded-b-lg fixed right-0 z-10 transition-all duration-300 ease-in-out bg-[#1f2533] ${menuActive ? 'translate-x-0' : 'translate-x-full'}`}
        ref={menuRef}
      >
        <ul className='flex flex-col items-center gap-5 text-xl p-7'>
          <li>
            <CreateNavLink
              title="Welcome"
              path="/"
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              handleToggleMenu={handleToggleMenu}
              type='hamburger'>
              Home
            </CreateNavLink>
          </li>
          <li>
            <CreateNavLink
              title="About me"
              path="/about"
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              handleToggleMenu={handleToggleMenu}
              type='hamburger'>
              About
            </CreateNavLink>
          </li>
          <li>
            <CreateNavLink
              title="My skills"
              path="/skills"
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              handleToggleMenu={handleToggleMenu}
              type='hamburger'>
              Skills
            </CreateNavLink>
          </li>
          <li>
            <CreateNavLink
              title="My projects"
              path="/projects"
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              handleToggleMenu={handleToggleMenu}
              type='hamburger'>
              Projects
            </CreateNavLink>
          </li>
          <li>
            <CreateNavLink
              title="Contact me"
              path="/contact"
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              handleToggleMenu={handleToggleMenu}
              type='hamburger'>
              Contact
            </CreateNavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}