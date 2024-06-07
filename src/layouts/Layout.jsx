import Navbar from '../components/navigation/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children, error }) {
  return (
    <>
      <header>
        <Navbar error={error} />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}