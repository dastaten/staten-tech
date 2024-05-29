import Navbar from '../components/navigation/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children, error }) {
  return (
    <>
      <Navbar error={error} />
      {children}
      <Footer />
    </>
  );
}