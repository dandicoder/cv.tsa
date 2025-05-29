"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

function ReponsiveNavbar() {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(true);
  };

  const handleHideNav = () => {
    setShowNav(false);
  };

  return (
    <div>
      <Navbar openNav={handleShowNav} />
      <MobileNavbar showNav={showNav} handleHideNav={handleHideNav} />
    </div>
  );
}

export default ReponsiveNavbar;
