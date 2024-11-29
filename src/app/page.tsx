'use client';

import { useState } from "react";
import SideBar from "./components/SideMenu";
import Main from "./components/Main";
import ResponsiveSideMenu from "./components/ResponsiveSideMenu";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="d-flex align-item-center justify-content-center justify-sm-content-end justify-content-md-end justify-content-lg-end">
      <SideBar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Main />
      <ResponsiveSideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}
