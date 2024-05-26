import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between p-4 bg-gray-900 text-slate-200'>
      <div className='text-2xl font-bold'>Logo</div>
      <ul className='hidden space-x-4 font-semibold md:flex '>
        <li>
          <NavLink className='hover:text-slate-100' to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='hover:text-slate-100' to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className='hover:text-slate-100' to="/skills">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink className='hover:text-slate-100' to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className='hover:text-slate-100' to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}