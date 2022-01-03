import React from "react";
import ReactDOM from "react-dom";
import cx from "classnames";

import { usePortalElement, useComponentVisible } from "../../../hooks";

interface ModalProps {
  open: boolean;
  closeFn: () => void;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  closeFn,
  className,
  children,
}) => {
  const ref = usePortalElement("div", "z-20");

  useComponentVisible(ref.current?.children[0]?.children?.[0], open, closeFn);
  console.log(ref.current?.children[0]?.children?.[0]);

  if (!ref.current) return null;

  return ReactDOM.createPortal(
    <>
      {open && (
        <div
          className={cx(
            "bg-black bg-opacity-50 absolute top-0 bottom-0 left-0 right-0",
            className,
            {
              "z-30": !className?.includes("z-"),
            }
          )}
        >
          {children}
        </div>
      )}
    </>,
    ref.current
  );
};
