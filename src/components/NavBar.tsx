"use client";
import * as React from "react";
import { Navbar } from "flowbite-react";
const NavBar = () => {
  return (
    <Navbar 
    fluid={true} className="px-2 py-2.5 sm:px-4 w-full" style={{backgroundColor: "#E2593C"}}>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link  href="/" className="text-white">
        Home
      </Navbar.Link> 
    </Navbar.Collapse>
  </Navbar>
  );
};

export default NavBar


//E2593C