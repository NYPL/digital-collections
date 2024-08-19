import { useEffect } from "react";

const useStickyHeader = (headerId, offset = 0) => {
  useEffect(() => {
    const header = document.getElementById(headerId);

    if (!header || !window.visualViewport) return;

    const vv = window.visualViewport;

    const fixPosition = () => {
      header.style.top = `${vv.offsetTop}px`;
    };

    vv.addEventListener("resize", fixPosition);
    vv.addEventListener("scroll", fixPosition);

    fixPosition();

    return () => {
      vv.removeEventListener("resize", fixPosition);
      vv.removeEventListener("scroll", fixPosition);
    };
  }, [headerId, offset]);
};

export default useStickyHeader;
