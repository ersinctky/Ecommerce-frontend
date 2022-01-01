import { useRef, useEffect } from "react";

export const usePortalElement = (el: keyof HTMLElementTagNameMap) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const portalEl = document.createElement(el);
    ref.current = portalEl;
    document.body.appendChild(ref.current);

    return () => {
      document.body.removeChild(ref.current!);
    };
  }, [ref, el]);

  return ref;
};
