'use client';
import * as React from "react";
import { Footer } from 'flowbite-react';

const BottomFooter = () => {
  return (
    <Footer container className="mt-4 text-white" style={{backgroundColor: "#E2593C"}}>
      <Footer.Copyright href="#" by="Chaparty" year={2024} className="text-white" />
      <Footer.LinkGroup>
        <Footer.Link href="#" className="text-white">About</Footer.Link>
        <Footer.Link href="https://www.instagram.com/chapartylondon" className="text-white">Instagram</Footer.Link>
        <Footer.Link href="#" className="text-white">Licensing</Footer.Link>
        <Footer.Link href="#" className="text-white">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default BottomFooter

