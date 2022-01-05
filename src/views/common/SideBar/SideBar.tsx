import React, { useRef } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";

import { usePortalElement, useComponentVisible } from "../../../hooks";

interface SideBarProps {
  open: boolean;
  closeFn: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ open, closeFn }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const portalRef = usePortalElement("div", "z-50");

  useComponentVisible(ref.current, open, closeFn);

  if (!portalRef.current) return null;

  return ReactDOM.createPortal(
    <div
      ref={ref}
      className={cx(
        "absolute h-screen w-1/2 sm:w-1/4 lg:hidden bg-white bg-opacity-60 top-0 transition-transform shadow-lg backdrop-blur p-4",
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
    portalRef.current
  );
};
