import React from "react";
import Hero from "../views/hero/Hero";
import Navbar from "../views/navbar/Navbar";

function Header() {
  return (
    <>
      <div className="d-flex flex-column mb-3">
        <div className="p-2" >
          <Navbar/>
        </div>
        <div className="p-2">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default Header;
