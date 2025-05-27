import React from "react";
import Navber from "./Navber";
import Footer from "./Footer";
import { Outlet } from "react-router";
const Home = () => {
  return (
    <div>
      <Navber />
      <div className="min-h-[60vh] container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
