import Navbar from '../components/navigation/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children, error, confirmEmail }) {
  return (
    <>
      <header>
        <Navbar error={error} confirmEmail={confirmEmail} />
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