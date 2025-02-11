import { forwardRef, RefObject } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import type { FilterCategory } from "./selectFilter";
import { Button } from "@nypl/design-system-react-components";

type SelectFilterModalProps = {
  filter: FilterCategory;
};

type FocusableElement = HTMLElement & { focus: () => void };

const SelectFilterModal = forwardRef<
  HTMLHeadingElement,
  SelectFilterModalProps
>(({ filter }, headingRef?) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        className="modal"
        buttonType="link"
        id="modal-btn"
        onClick={onOpen}
      >{`View all ${filter.name.toLowerCase()}${
        filter.name === "Publishers" ? `` : `s`
      }`}</Button>
      <Modal
        finalFocusRef={headingRef as RefObject<FocusableElement>}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`${filter.name}${
            filter.name === "Publishers" ? `` : `s`
          }`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose} id={"close"}>
              Close
            </Button>
            <Button id={"secondary"}>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});

SelectFilterModal.displayName = "SelectFilterModal";
export default SelectFilterModal;
