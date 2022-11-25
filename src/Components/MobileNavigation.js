import NavLinks from "./NavLinks";
import "./navbar.css";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <CgMenuRound
      onClick={() => setOpen(!open)}
      className="hamburger"
      size="40px"
    />
  );
  const closeIcon = (
    <CgCloseO
      onClick={() => setOpen(!open)}
      className="hamburger"
      size="40px"
    />
  );
  return (
    <>
      <nav className="mobile-navigation">
        <div className="logo">
          <h1>horatiu</h1>
        </div>
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks />}
      </nav>
    </>
  );
};

export default MobileNavigation;
