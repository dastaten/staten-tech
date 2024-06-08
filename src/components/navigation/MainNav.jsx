import CreateNavLink from './CreateNavLink';

export default function MainNav({ pageTitle, setPageTitle }) {
  return (
    <ul className='hidden space-x-1 text-lg font-semibold sm:text-base md:text-lg lg:text-xl sm:flex'>
      <li>
        <CreateNavLink
          title="Welcome!"
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
  );
}