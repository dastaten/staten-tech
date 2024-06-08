export default function NavbarWrapper({ children, error, confirmEmail, pageTitle }) {

  return (
    <nav className='flex items-center justify-between pt-5 pb-4 bg-[#1f2533] px-7 text-alt h-[7vh] md:h-[8vh]'>
      <div className='text-3xl font-bold lg:text-4xl'>{error || confirmEmail || pageTitle}</div>
      {children}
    </nav>
  );
}