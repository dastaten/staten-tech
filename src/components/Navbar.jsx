import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='flex justify-between'>
      <div>Logo</div>
      <ul className='hidden space-x-4 md:flex'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}