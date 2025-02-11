import { useEffect } from "react";
import { useOutsideClick } from "@chakra-ui/react";

/**
 * Close dropdowns when clicking outside of them, pressing the Escape key,
 * or when focus moves outside the referenced element.
 */
const useCloseDropDown = (
  actionCb: (val: boolean) => void,
  ref: React.RefObject<HTMLDivElement>
) => {
  // Listen for keydown events on the document for the escape key.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        actionCb(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [actionCb]);

  // Listen for click events on the document outside of the
  // element that the `ref` prop points to.
  useOutsideClick({
    ref,
    handler: () => actionCb(false),
  });

  // Listen for focus leaving the referenced element
  useEffect(() => {
    const handleFocusOut = (e: FocusEvent) => {
      const nextFocusedElement = e.relatedTarget as Node;
      if (ref.current && !ref.current.contains(nextFocusedElement)) {
        actionCb(false);
      }
    };

    const element = ref.current;
    element?.addEventListener("focusout", handleFocusOut);

    return () => element?.removeEventListener("focusout", handleFocusOut);
  }, [actionCb, ref]);
};

export default useCloseDropDown;
