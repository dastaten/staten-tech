export default function Footer() {
  return (
    <footer className='px-10 py-5 text-sm sm:text-base md:text-lg lg:text-xl text-default bg-[#1f2533]'>
      Copyright &copy; {new Date().getFullYear()} staten.tech. All rights reserved.
    </footer>
  );
}