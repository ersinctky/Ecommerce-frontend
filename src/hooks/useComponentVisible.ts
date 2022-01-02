import { useEffect } from "react";

export const useComponentVisible = (
  el: HTMLElement | null | undefined | Element,
  open: boolean,
  closeFn: () => void
) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      console.log(el);
      if (e.currentTarget !== el && open) {
        closeFn();
      }
    };

    window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  }, [el, closeFn]); // eslint-disable-line
};
