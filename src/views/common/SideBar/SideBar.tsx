import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";

interface SideBarProps {
  open: boolean;
}

export const SideBar: React.FC<SideBarProps> = ({ open }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const portalEl = document.createElement("div");
    portalEl.id = "side-bar";
    ref.current = portalEl;
    document.body.appendChild(ref.current);

    return () => {
      document.body.removeChild(ref.current!);
    };
  }, [ref]);

  if (ref.current === null) return null;

  return ReactDOM.createPortal(
    <div
      className={cx(
        "fixed h-screen w-1/2 sm:w-1/4 lg:hidden bg-white bg-opacity-60 top-0 transition-transform shadow-lg backdrop-blur p-4",
        {
          "-translate-x-full": !open,
        }
      )}
    >
      <ul className="menu-list flex flex-col text-xs font-poppins font-bold">
        <li className="menu-list-item py-2  hover:text-blue-700">
          <a href="/home">Home</a>
        </li>
        <li className="menu-list-item py-2  hover:text-blue-700 ">
          <a href="/about">About</a>
        </li>
        <li className="menu-list-item py-2  hover:text-blue-700">
          <a href="/contact">Contact</a>
        </li>
        <li className="menu-list-item py-2 hover:text-blue-700 ">
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </div>,
    ref.current
  );
};
