import { useEffect } from "react";

export const useComponentVisible = (
  el: HTMLElement | null | undefined | Element,
  open: boolean,
  closeFn: () => void
) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (e.target !== el && open) {
        closeFn();
      }
    };

    window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  }, [el, closeFn]); // eslint-disable-line
};
