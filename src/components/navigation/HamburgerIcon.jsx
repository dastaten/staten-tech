export default function HamburgerIcon({ menuActive, handleToggleMenu, hamburgerRef }) {
  return (
    <div
      className='m-0 overflow-visible transition-opacity duration-150 ease-linear bg-transparent border-0 cursor-pointer transition-filter font-inherit text-inherit sm:hidden'
      ref={hamburgerRef}
      onClick={handleToggleMenu}
    >

      <div>
        <span className={`${menuActive ? 'translate-y-[7px] rotate-45' : ''} bar block w-[25px] h-[2px] my-[5px] mx-auto transition duration-300 ease-in-out bg-alt`}></span>

        <span className={`${menuActive ? 'opacity-0' : ''} bar block w-[25px] h-[2px] my-[5px] mx-auto transition duration-300 ease-in-out bg-alt`}></span>

        <span className={`${menuActive ? '-translate-y-[7px] -rotate-45' : ''} bar block w-[25px] h-[2px] my-[5px] mx-auto transition duration-300 ease-in-out bg-alt`}></span>
      </div>

    </div>
  );
}