"use client";
import * as React from "react";
import { Navbar } from "flowbite-react";

import Image from 'next/image';
import instagram from "../../public/instagram.svg";
const NavBar = () => {
  return (
    <Navbar 
    fluid={true} className="p-6 sm:px-4 w-full" style={{backgroundColor: "#E2593C"}}>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link  href="/" className="text-white">
        Home
      </Navbar.Link> 
      <Navbar.Link href="https://www.instagram.com/chapartylondon" className="text-white">
      <Image
      height={20}
      width={20}
      priority
      src={instagram}
      alt="Follow us on Instagram"
    />
      </Navbar.Link> 
    </Navbar.Collapse>
  </Navbar>
  );
};

export default NavBar


//E2593C