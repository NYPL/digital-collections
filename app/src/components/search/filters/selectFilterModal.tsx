import { forwardRef, useState, useEffect, useRef, RefObject } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
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
  current: FilterOption | null;
  setSelected: React.Dispatch<React.SetStateAction<FilterOption | null>>;
  modalCurrent: FilterOption | null;
  setModalCurrent: React.Dispatch<React.SetStateAction<FilterOption | null>>;
};

type FocusableElement = HTMLElement & { focus: () => void };

const SelectFilterModal = forwardRef<HTMLButtonElement, SelectFilterModalProps>(
  (props, accordionButtonRef) => {
    const {
      filter,
      onOpen: parentOnOpen,
      onClose: parentOnClose,
      selected,
      setSelected,
      current,
      modalCurrent,
      setModalCurrent,
    } = props;
    const {
      isOpen,
      onOpen: modalOnOpen,
      onClose: modalOnClose,
    } = useDisclosure();
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const viewMoreButtonRef = useRef<HTMLButtonElement | null>(null);
    const liveRegionRef = useRef<HTMLDivElement | null>(null);

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

    useEffect(() => {
      if (liveRegionRef.current) {
        liveRegionRef.current.textContent = `${filteredOptions.length} options available`;
      }
    }, [filteredOptions.length]);

    const handleOpen = () => {
      modalOnOpen();
      parentOnOpen();
    };

    const handleClose = (closeDropdown: boolean) => {
      modalOnClose();
      parentOnClose(closeDropdown);
    };

    return (
      <>
        <Button
          buttonType="secondary"
          width="100%"
          id="modal-btn"
          onClick={handleOpen}
          ref={viewMoreButtonRef}
          sx={{
            display: "none",
            textDecoration: "none",
            height: "m",
            [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]:
              {
                display: "inline",
              },
          }}
        >{`View all ${filter.name.toLowerCase()}${
          filter.name === "Publishers" ? "" : "s"
        }`}</Button>

        <Modal
          finalFocusRef={
            modalCurrent === selected
              ? (accordionButtonRef as RefObject<FocusableElement>)
              : viewMoreButtonRef
          }
          isOpen={isOpen}
          onClose={() => {
            setSelected(selected);
            handleClose(false);
          }}
        >
          <ModalOverlay />
          <ModalContent sx={{ borderRadius: "4px" }}>
            <Box
              sx={{
                bg: "ui.bg.default",
                borderRadius: "4px 4px 0px 0px",
                borderBottom: "1px solid",
                borderColor: "ui.border.default",
                marginBottom: "s",
              }}
            >
              <ModalHeader padding="0">
                <Heading
                  size="heading5"
                  paddingTop="xs"
                  paddingLeft="s"
                  marginBottom="xs"
                >
                  {`${filter.name}${filter.name === "Publishers" ? "" : "s"}`}
                </Heading>
              </ModalHeader>
            </Box>
            <Box paddingLeft="m" paddingRight="m">
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
              <div
                id="search-live-region"
                ref={liveRegionRef}
                aria-live="polite"
                style={{
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  margin: "-1px",
                  padding: 0,
                  overflow: "hidden",
                  clip: "rect(0,0,0,0)",
                  border: 0,
                }}
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
                  sx={{ marginBottom: "-8px" }}
                  id={`${filter.name}-options`}
                  labelText={`${filter.name} filter options`}
                  showLabel={false}
                  name={filter.name}
                  defaultValue={current?.name}
                  showHelperInvalidText={false}
                  onChange={(newValue) => {
                    const newSelectedOption =
                      filter.options.find(
                        (option) => option.name === newValue
                      ) || null;
                    setModalCurrent(newSelectedOption);
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

              <ButtonGroup padding="m" marginX="auto">
                <Button
                  buttonType="secondary"
                  onClick={() => {
                    handleClose(false);
                  }}
                  id="close-button"
                >
                  Close
                </Button>
                <Button
                  id="confirm-button"
                  isDisabled={!modalCurrent}
                  onClick={() => {
                    setModalCurrent(modalCurrent);
                    setSelected(modalCurrent);
                    handleClose(true);
                  }}
                >
                  Confirm
                </Button>
              </ButtonGroup>
            </Box>
          </ModalContent>
        </Modal>
      </>
    );
  }
);

SelectFilterModal.displayName = "SelectFilterModal";
export default SelectFilterModal;
