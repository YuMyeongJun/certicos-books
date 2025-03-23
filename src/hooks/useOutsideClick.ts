import { useEffect } from "react";

export function useOutsideClick(
  ref: any,
  action: (e?: Event) => void,
  mouseEvent: string = "click"
) {
  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener(
      mouseEvent,
      (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          action();
        }
      },
      { signal: controller.signal }
    );

    return () => {
      controller.abort();
    };
  }, [action, ref]);
}
