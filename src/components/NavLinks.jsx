/* eslint-disable react/prop-types */

import { navLinks } from "../constants";

const NavLinks = ({ toggleMenu, setToggleMenu }) => {
  return (
    <ul
      className="flex max-lg:flex-col flex-1 justify-end items-center gap-4 max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:w-full max-lg:bg-headerBgColor max-lg:border-t-2 max-lg:py-4 max-lg:padding-x max-lg:transition-all duration-300 ease-in-out lg:clippy"
      style={{
        clipPath: toggleMenu
          ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
          : "polygon(0 0, 100% 0, 100% 0, 0 0)",
      }}
    >
      {navLinks.map((navLink) => (
        <li key={navLink.label} className="max-lg:w-full">
          <a
            href={navLink.href}
            className="h-10 px-5 inline-block max-lg:w-full bg-white rounded-lg text-base leading-10 tracking-wider text-center text-inherit transition-all duration-200 hover:bg-grayColor"
            onClick={() => setToggleMenu(false)}
          >
            {navLink.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
