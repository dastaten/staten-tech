import Navbar from '../components/navigation/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children, error, confirmEmail }) {
  return (
    <>
      <div className='flex-grow'>
        <header>
          <Navbar error={error} confirmEmail={confirmEmail} />
        </header>
        <main>
          {children}
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}