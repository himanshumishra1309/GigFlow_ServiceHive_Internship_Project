import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";

function Layout(){
  return (
    <>
    <ScrollToTop />
    <Navbar/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout;