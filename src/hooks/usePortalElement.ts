import { useRef, useEffect } from "react";
import cx from "classnames";

export const usePortalElement = (
  el: keyof HTMLElementTagNameMap,
  className?: string
) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const portalEl = document.createElement(el);
    portalEl.className = cx(className);
    ref.current = portalEl;
    document.body.appendChild(ref.current);

    return () => {
      document.body.removeChild(ref.current!);
    };
  }, [ref, el, className]);

  return ref;
};
