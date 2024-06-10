import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

export default function CreateNavLink({
  children,
  title,
  path,
  pageTitle,
  setPageTitle,
  handleToggleMenu,
  type,
}) {

  useEffect(() => {
    document.title = `${pageTitle} | Dorian Staten's Front End Developer Portfolio`;
  }, [pageTitle]);

  // Buiild mobile navigation links
  if (type === 'mobile') {
    return (
      <NavLink
        className='p-2 rounded-md text-alt'
        onClick={() => {
          handleToggleMenu();
          setPageTitle(title);
        }}
        to={path}
      >
        {children}
      </NavLink>
    );
  }

  // Buiild desktop navigation links
  return (
    <NavLink
      className={({ isActive }) =>
        `transition-all duration-300 ${isActive
          ? 'text-[#1a1f2b] bg-alt'
          : 'text-alt hover:bg-alt hover:text-[#1a1f2b]'
        } pt-[7px] pb-[4px] px-4 rounded-full`
      }
      to={path}
      onClick={() => setPageTitle(title)}
    >
      {children}
    </NavLink>
  );
}

