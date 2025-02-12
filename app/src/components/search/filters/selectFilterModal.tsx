import { forwardRef } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import type { FilterCategory } from "./selectFilter";
import { Button, Box, Heading } from "@nypl/design-system-react-components";
import DCSearchBar from "../dcSearchBar";

type SelectFilterModalProps = {
  filter: FilterCategory;
  onOpen: () => void;
  onClose: () => void;
};

type FocusableElement = HTMLElement & { focus: () => void };

const SelectFilterModal = forwardRef<
  HTMLHeadingElement,
  SelectFilterModalProps
>(({ filter, onOpen, onClose }, headingRef?) => {
  const {
    isOpen,
    onOpen: chakraOnOpen,
    onClose: chakraOnClose,
  } = useDisclosure();

  const handleOpen = () => {
    chakraOnOpen();
    onOpen();
  };

  const handleClose = () => {
    chakraOnClose();
    onClose();
  };

  return (
    <>
      <Button
        className="modal"
        buttonType="link"
        id="modal-btn"
        onClick={handleOpen}
      >{`View all ${filter.name.toLowerCase()}${
        filter.name === "Publishers" ? `` : `s`
      }`}</Button>

      <Modal
        finalFocusRef={headingRef as React.RefObject<FocusableElement>}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent sx={{ borderRadius: "4px" }}>
          <Box
            sx={{
              width: "100%",
              bg: "ui.bg.default",
              borderRadius: "4px",
              borderBottom: "1px solid var(--ui-border-default, #BDBDBD)",
              marginBottom: "s",
            }}
          >
            <Heading
              size="heading5"
              paddingTop="s"
              paddingLeft="s"
              marginBottom="xs"
            >
              {`${filter.name}${filter.name === "Publishers" ? `` : `s`}`}
            </Heading>
          </Box>
          <ModalBody>
            <DCSearchBar
              id={`search-${filter.name}-options`}
              labelText={`Search ${filter.name}${
                filter.name === "Publishers" ? `` : `s`
              }`}
              maxWrapperWidth="400px"
              textInputProps={{
                id: "filter-search-text",
                isClearable: true,
                labelText: `Search ${filter.name}${
                  filter.name === "Publishers" ? `` : `s`
                }`,
                name: "filter_keywords",
                placeholder: `Search ${filter.name.toLowerCase()}${
                  filter.name === "Publishers" ? `` : `s`
                }`,
              }}
              onSubmit={() => {}}
            />
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={handleClose} id="close">
              Close
            </Button>
            <Button id="secondary">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});

SelectFilterModal.displayName = "SelectFilterModal";
export default SelectFilterModal;
