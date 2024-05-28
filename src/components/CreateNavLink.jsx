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

  if (type === 'hamburger') {
    return (
      <NavLink
        className='p-2 rounded-md text-[#a1ceff]'
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

  return (
    <NavLink
      className={({ isActive }) =>
        `transition-all duration-300 ${isActive
          ? 'text-[#38435c] bg-[#a1ceff]'
          : 'text-[#a1ceff] hover:bg-[#a1ceff] hover:text-[#38435c]'
        } p-2 rounded-md`
      }
      to={path}
      onClick={() => setPageTitle(title)}
    >
      {children}
    </NavLink>
  );
}

