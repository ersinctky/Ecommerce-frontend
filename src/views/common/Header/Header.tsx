import React from "react";
import {
  MagnifyingGlass,
  Heart,
  User,
  ShoppingCart,
  SignOut,
} from "phosphor-react";
import { useToggle } from "react-use";

import { Navbar } from "../Navbar";
import { Login } from "../Login";

export const Header: React.FC = () => {
  const [isLoginOpen, toggleLoginOpen] = useToggle(false);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center justify-around my-8 border-b-2 border-gray-300">
        <h1 className="font-roboto font-bold my-8">ERSİNSHOP</h1>
        <div className="flex flex-row items-center relative">
          <input
            className="border-2 border-gray-300 bg-white h-11 w-96 px-5 pr-16 rounded-lg font-poppins text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <MagnifyingGlass size={24} className=" absolute right-4" />
        </div>
        <div className="flex flex-row">
          <Heart size={24} />
          <User size={24} className="mx-8" onClick={() => toggleLoginOpen()} />
          <ShoppingCart size={24} />
          <SignOut
            size={24}
            className="mx-12"
            onClick={() => {
              localStorage.removeItem("userInfo");
            }}
          />
        </div>
      </div>
      <Navbar />
      <Login open={isLoginOpen} closeFn={() => toggleLoginOpen(false)} />
    </header>
  );
};
