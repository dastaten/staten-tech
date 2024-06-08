import CreateNavLink from './CreateNavLink';

export default function MobileNav({ menuActive, menuRef, pageTitle, setPageTitle, handleToggleMenu }) {
  return (
    <nav
      className={`rounded-bl-xl fixed right-0 z-10 transition-all duration-300 ease-in-out bg-dark ${menuActive ? 'translate-x-0' : 'translate-x-full'}`}
      ref={menuRef}
    >
      <ul className='flex flex-col items-center gap-5 text-xl p-7'>
        <li>
          <CreateNavLink
            title="Welcome!"
            path="/"
            pageTitle={pageTitle}
            setPageTitle={setPageTitle}
            handleToggleMenu={handleToggleMenu}
            type='mobile'>
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
            type='mobile'>
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
            type='mobile'>
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
            type='mobile'>
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
            type='mobile'>
            Contact
          </CreateNavLink>
        </li>
      </ul>
    </nav>
  );
}