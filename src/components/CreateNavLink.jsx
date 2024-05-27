import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

export default function CreateNavLink({ children, title, path, pageTitle, setPageTitle }) {

  useEffect(() => {
    document.title = `${pageTitle} | Dorian Staten's Front End Developer Portfolio`;
  }, [pageTitle]);

  return (
    <NavLink
      className={({ isActive }) =>
        `transition-all duration-300 text-[#a1ceff] p-2 rounded-md ${isActive
          ? 'bg-[#a1ceff] text-[#38435c]'
          : 'hover:bg-[#a1ceff] hover:text-[#38435c]'
        }`
      }
      to={path}
      onClick={() => setPageTitle(title)}
    >
      {children}
    </NavLink>
  );
}