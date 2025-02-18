import { forwardRef, useState, useEffect } from "react";
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
  onClose: () => void;
  selected: FilterOption | null;
  setSelected: React.Dispatch<React.SetStateAction<FilterOption | null>>;
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

    const handleClose = () => {
      modalOnClose();
      parentOnClose();
    };

    return (
      <>
        <Button
          buttonType="link"
          id="modal-btn"
          onClick={handleOpen}
          sx={{
            display: "none",
            textDecoration: "none",
            padding: 0,
            [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]:
              {
                display: "inline",
              },
          }}
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
                    const newSelectedOption = filter.options.find(
                      (option) => option.name === newValue
                    );
                    setSelected(newSelectedOption || null);
                  }}
                >
                  {radioFilterOptions(filter.name, currentOptions)}
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
                onClick={handleClose}
                id="close-button"
              >
                Close
              </Button>
              <Button
                id="confirm-button"
                isDisabled={!selected}
                onClick={() => {
                  setSelected(
                    filter.options.find(
                      (option) => option.name === selected?.name
                    ) || null
                  );
                  handleClose();
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
