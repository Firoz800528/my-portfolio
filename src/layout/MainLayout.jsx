import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  // Hide navbar on any route that starts with "/project"
  const hideNavbar = location.pathname.startsWith("/project");

  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
