import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div className="root-layout">
      <Nav></Nav>
      <main>
        <Outlet/>
      </main>
     <Footer></Footer>
    </div>

  );
}

export default RootLayout;