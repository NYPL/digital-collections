import { forwardRef, useState, useEffect, useRef } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FilterOption,
  radioFilterOptions,
  type FilterCategory,
} from "./selectFilter";
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
import { headerBreakpoints } from "@/src/utils/breakpoints";

type SelectFilterModalProps = {
  filter: FilterCategory;
  onOpen: () => void;
  onClose: (closeDropdown) => void;
  selected: FilterOption | null;
  setSelected: React.Dispatch<React.SetStateAction<FilterOption | null>>;
  modalSelected: FilterOption | null;
  setModalSelected: React.Dispatch<React.SetStateAction<FilterOption | null>>;
};

type FocusableElement = HTMLElement & { focus: () => void };

const SelectFilterModal = forwardRef<
  HTMLHeadingElement,
  SelectFilterModalProps
>(
  (
    {
      filter,
      onOpen: parentOnOpen,
      onClose: parentOnClose,
      selected,
      setSelected,
      modalSelected,
      setModalSelected,
    },
    headingRef?
  ) => {
    const {
      isOpen,
      onOpen: modalOnOpen,
      onClose: modalOnClose,
    } = useDisclosure();

    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const buttonRef = useRef<HTMLButtonElement | null>(null);

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
      modalOnOpen();
      parentOnOpen();
    };

    const handleClose = (closeFilter: boolean) => {
      modalOnClose();
      parentOnClose(closeFilter);
    };

    return (
      <>
        <Button
          buttonType="link"
          id="modal-btn"
          onClick={handleOpen}
          ref={buttonRef}
          sx={{
            display: "none",
            textDecoration: "none",
            padding: 0,
            marginTop: "-xxs",
            marginBottom: "-xs",
            [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]:
              {
                display: "inline",
              },
          }}
        >{`View all ${filter.name.toLowerCase()}${
          filter.name === "Publishers" ? "" : "s"
        }`}</Button>
        <Modal
          /** Return to dropdown if the final selection 
           has not been updated to what was selected in the modal. */
          finalFocusRef={
            selected === modalSelected
              ? (headingRef as React.RefObject<FocusableElement>)
              : buttonRef
          }
          isOpen={isOpen}
          onClose={() => {
            setSelected(selected);
            handleClose(false);
          }}
        >
          <ModalOverlay />
          <ModalContent sx={{ borderRadius: "xxs" }}>
            <Box
              sx={{
                bg: "ui.bg.default",
                borderRadius: "4px 4px 0px 0px",
                borderBottom: "1px solid",
                borderColor: "ui.border.default",
                marginBottom: "s",
              }}
            >
              <Heading
                size="heading5"
                paddingTop="xs"
                paddingLeft="s"
                marginBottom="xs"
              >
                {`${filter.name}${filter.name === "Publishers" ? "" : "s"}`}
              </Heading>
            </Box>
            <ModalBody>
              <DCSearchBar
                showButton={false}
                id={`search-${filter.name}-options`}
                labelText={`Search ${filter.name}${
                  filter.name === "Publishers" ? "" : "s"
                }`}
                maxWrapperWidth="400px"
                textInputProps={{
                  id: "filter-search-text",
                  isClearable: true,
                  labelText: `${filter.name} search`,
                  isClearableCallback: () => setSearchText(""),
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
                  border: "1px solid",
                  borderColor: "ui.border.hover",
                  padding: "s",
                  height: "394px",
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
                  defaultValue={selected?.name ?? ""}
                  showHelperInvalidText={false}
                  onChange={(newValue) => {
                    const newSelectedOption =
                      filter.options.find(
                        (option) => option.name === newValue
                      ) || null;
                    setModalSelected(newSelectedOption);
                  }}
                >
                  {radioFilterOptions(currentOptions)}
                </RadioGroup>
              </Box>
              <Flex>
                <Pagination
                  id="filter-pagination-id"
                  currentPage={currentPage}
                  initialPage={1}
                  pageCount={pageCount}
                  onPageChange={(page) => {
                    setCurrentPage(page);
                  }}
                  sx={{
                    paddingTop: "m",
                    justifyContent: "center",
                    svg: {
                      _visited: {
                        _disabled: { fill: "ui.disabled.primary !important" },
                      },
                    },

                    a: {
                      _disabled: {
                        color: "ui.disabled.primary",
                        pointerEvents: "none",
                        svg: { fill: "ui.disabled.primary !important" },
                      },
                    },
                  }}
                />
              </Flex>
            </ModalBody>

            <ButtonGroup padding="m" marginX="auto">
              <Button
                buttonType="secondary"
                onClick={() => {
                  // Return to previous selection and keep the dropdown open.
                  setSelected(selected);
                  handleClose(false);
                }}
                id="close-button"
              >
                Close
              </Button>
              <Button
                id="confirm-button"
                isDisabled={!modalSelected}
                onClick={() => {
                  // Confirm selection and close dropdown.
                  setModalSelected(modalSelected);
                  setSelected(modalSelected);
                  handleClose(true);
                }}
              >
                Confirm
              </Button>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      </>
    );
  }
);

SelectFilterModal.displayName = "SelectFilterModal";
export default SelectFilterModal;
