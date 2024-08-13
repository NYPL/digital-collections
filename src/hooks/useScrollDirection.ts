import { throttle } from "lodash";
import { useState, useEffect } from "react";

// function useScrollDirection() {
//   const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
//     "up"
//   );

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const updateScrollDirection = () => {
//       const scrollY = window.scrollY;
//       let direction: "up" | "down" | null =
//         scrollY > lastScrollY ? "down" : "up";

//       if (
//         direction !== scrollDirection &&
//         Math.abs(scrollY - lastScrollY) > 10
//       ) {
//         setScrollDirection(direction);
//       }

//       lastScrollY = scrollY > 0 ? scrollY : 0;
//     };

//     window.addEventListener("scroll", updateScrollDirection);

//     return () => {
//       window.removeEventListener("scroll", updateScrollDirection);
//     };
//   }, [scrollDirection]);

//   return scrollDirection === "up";
// }

function useScrollDirection() {
  const [direction, setDirection] = useState("up");

  let lastScrollY = 0;

  useEffect(() => {
    window.onscroll = throttle(() => {
      const { scrollY } = window;
      const direction = lastScrollY < scrollY ? "down" : "up";
      lastScrollY = scrollY;
      setDirection(direction);
    }, 300);

    return () => {
      window.onscroll = null;
    };
  }, []);

  return direction === "up";
}

export default useScrollDirection;
