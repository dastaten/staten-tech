import { Outlet } from "react-router-dom";

// UI
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className='root-layout'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}