import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import NavbarWrapper from './NavbarWrapper';
import MainNav from './MainNav';
import HamburgerIcon from './HamburgerIcon';
import MobileNav from './MobileNav';

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
      <NavbarWrapper error={error} pageTitle={pageTitle}>
        <MainNav
          pageTitle={pageTitle}
          setPageTitle={setPageTitle}
        />
        <HamburgerIcon
          menuActive={menuActive}
          handleToggleMenu={handleToggleMenu}
          hamburgerRef={hamburgerRef}
        />
      </NavbarWrapper>

      <MobileNav
        menuActive={menuActive}
        menuRef={menuRef}
        pageTitle={pageTitle}
        setPageTitle={setPageTitle}
        handleToggleMenu={handleToggleMenu}
      />
    </>
  );
}