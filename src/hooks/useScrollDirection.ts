import { useState, useEffect } from "react";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < 10)
      ) {
        setScrollDirection(direction);
      }
      //console.log(lastScrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    console.log("remove event listener");
    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      console.log("remove event listener");
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection === "up";
}

export default useScrollDirection;
