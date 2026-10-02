import { useEffect, useRef } from "react";

function CustomCursor() {
  const cursor = useRef(null);

  useEffect(() => {
    const element = cursor.current;

    if (!element || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const move = (event) => {
      element.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <span ref={cursor} className="custom-cursor" aria-hidden="true" />;
}

export default CustomCursor;
