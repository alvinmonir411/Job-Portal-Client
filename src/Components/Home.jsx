import React from "react";
import Navber from "./Navber";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navber />

      {/* Main content area */}
      <div className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Home;
