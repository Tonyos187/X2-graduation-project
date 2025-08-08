import { Outlet } from "react-router-dom";
import Navbar from "../sections/sharedSections/Navbar";
import Footer from "../sections/sharedSections/Footer";
const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;