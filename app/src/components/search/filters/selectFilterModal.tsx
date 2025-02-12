import { forwardRef, useState, useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { radioFilterOptions, type FilterCategory } from "./selectFilter";
import {
  Button,
  Box,
  Heading,
  RadioGroup,
  Pagination,
  Flex,
  ButtonGroup,
} from "@nypl/design-system-react-components";
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

  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  const filteredOptions = filter.options.filter((option) =>
    option.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const pageCount = Math.ceil(filteredOptions.length / itemsPerPage);
  const currentOptions = filteredOptions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
        filter.name === "Publishers" ? "" : "s"
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
              {`${filter.name}${filter.name === "Publishers" ? "" : "s"}`}
            </Heading>
          </Box>
          <ModalBody>
            <DCSearchBar
              id={`search-${filter.name}-options`}
              labelText={`Search ${filter.name}${
                filter.name === "Publishers" ? "" : "s"
              }`}
              maxWrapperWidth="400px"
              textInputProps={{
                id: "filter-search-text",
                isClearable: true,
                labelText: `Search ${filter.name}${
                  filter.name === "Publishers" ? "" : "s"
                }`,
                name: "filter_keywords",
                placeholder: `Search ${filter.name.toLowerCase()}${
                  filter.name === "Publishers" ? "" : "s"
                }`,
                onChange: (e) => setSearchText(e.target.value),
              }}
              onSubmit={() => {}}
            />
            <Box
              sx={{
                marginTop: "s",
                border: "1px solid var(--ui-border-hover, #616161)",
                padding: "s",
              }}
            >
              <RadioGroup
                isFullWidth
                // Helper invalid text, even when false, creates a 8px margin.
                sx={{ marginBottom: "-8px" }}
                id={`${filter.name}-options`}
                labelText={`${filter.name} filter options`}
                showLabel={false}
                name={filter.name}
                defaultValue={undefined}
                showHelperInvalidText={false}
              >
                {radioFilterOptions(filter.name, currentOptions)}
              </RadioGroup>
            </Box>
            <Flex>
              <Pagination
                id="filter-pagination-id"
                currentPage={currentPage}
                initialPage={1}
                pageCount={pageCount || 1}
                onPageChange={(page) => setCurrentPage(page)}
                sx={{
                  paddingTop: "m",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </Flex>
          </ModalBody>

          <ButtonGroup padding="m" marginX="auto">
            <Button id="confirm-button" onClick={handleClose}>
              Confirm
            </Button>
            <Button
              buttonType="secondary"
              onClick={handleClose}
              id="close-button"
            >
              Close
            </Button>
          </ButtonGroup>
        </ModalContent>
      </Modal>
    </>
  );
});

SelectFilterModal.displayName = "SelectFilterModal";
export default SelectFilterModal;
