import React from "react";
import { useToggle } from "react-use";
import { List, X } from "phosphor-react";

import { SideBar } from "../SideBar";

export const Navbar: React.FC = () => {
  const [isSideBarOpen, toggleSideBarOpen] = useToggle(false);

  return (
    <nav>
      <div className="fixed w-full h-8 bg-blue-400 text-gray-200 flex flex-row justify-between items-center md:justify-center">
        <div className="brand-logo font-roboto font-bold px-2  md:hidden">
          ERSİNSHOP
        </div>
        <ul className="hidden menu-list md:flex md:flex-row text-xs font-poppins font-bold md:justify-around">
          <li className="menu-list-item px-2 mx-2 ">
            <a href="/home">Home</a>
          </li>
          <li className="menu-list-item px-2 mx-2">
            <a href="/about">About</a>
          </li>
          <li className="menu-list-item px-2 mx-2">
            <a href="/contact">Contact</a>
          </li>
          <li className="menu-list-item px-2 mx-2">
            <a href="/profile">Profile</a>
          </li>
        </ul>
        <button
          onClick={() => toggleSideBarOpen()}
          className="md:hidden menu-button"
        >
          {isSideBarOpen ? <X size={24} /> : <List size={24} />}
        </button>
        <SideBar
          open={isSideBarOpen}
          closeFn={() => toggleSideBarOpen(false)}
        />
      </div>
    </nav>
  );
};
