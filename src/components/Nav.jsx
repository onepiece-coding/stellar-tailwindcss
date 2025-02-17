import { useState } from "react";
import { hamburgerMenu, closeMenu } from "../assets/icons";
import NavLinks from "./NavLinks";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="padding-x py-5 fixed top-0 left-0 z-10 w-full bg-headerBgColor">
      <nav className="flex justify-between items-center">
        <a
          href="/"
          className="text-2xl font-medium tracking-wider uppercase text-textColor"
        >
          Stellar
        </a>
        <NavLinks toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <img
            src={toggleMenu ? closeMenu : hamburgerMenu}
            alt={"Hamburger Menu"}
            width={50}
            height={50}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
