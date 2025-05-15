import { forwardRef, useState, useEffect, useRef, RefObject } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { availableFilterOptions } from "./selectFilter";
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
import { usePathname, useRouter } from "next/navigation";
import { SearchManager } from "@/src/utils/searchManager";
import {
  AvailableFilter,
  AvailableFilterOption,
} from "@/src/types/AvailableFilterType";
import { capitalize } from "@/src/utils/utils";
import { useSearchContext } from "@/src/context/SearchProvider";

type SelectFilterModalProps = {
  filter: AvailableFilter;
  onOpen: () => void;
  onClose: (closeDropdown) => void;
  selected: AvailableFilterOption | null;
  current: AvailableFilterOption | null;
  modalCurrent: AvailableFilterOption | null;
  setModalCurrent: React.Dispatch<
    React.SetStateAction<AvailableFilterOption | null>
  >;
  searchManager: SearchManager;
};

export type FocusableElement = HTMLElement & { focus: () => void };

const SelectFilterModal = forwardRef<HTMLButtonElement, SelectFilterModalProps>(
  (props, accordionButtonRef) => {
    let {
      filter,
      onOpen: parentOnOpen,
      onClose: parentOnClose,
      selected,
      current,
      modalCurrent,
      setModalCurrent,
      searchManager,
    } = props;
    const {
      isOpen,
      onOpen: modalOnOpen,
      onClose: modalOnClose,
    } = useDisclosure();
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Whether modal closing should focus on open or closed dropdown.
    const [focusOutside, setFocusOutside] = useState(false);

    // Ref for programmatic focus.
    const viewMoreButtonRef = useRef<HTMLButtonElement | null>(null);

    // Ref for accessible announcements of search results.
    const liveRegionRef = useRef<HTMLDivElement | null>(null);

    const { push } = useRouter();
    const pathname = usePathname();
    const updateURL = async (queryString) => {
      push(`${pathname}?${queryString}`);
    };

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

    useEffect(() => {
      setCurrentPage(1);
    }, [searchText]);

    const handleOpen = () => {
      modalOnOpen();
      parentOnOpen();
    };

    const handleClose = (closeDropdown: boolean) => {
      setFocusOutside(closeDropdown);
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
            focusOutside
              ? (accordionButtonRef as RefObject<FocusableElement>)
              : viewMoreButtonRef
          }
          isOpen={isOpen}
          onClose={() => {
            if (modalCurrent && focusOutside) {
              searchManager.setLastFilter(
                `accordion-button-select-${filter.name}`
              );
              updateURL(
                searchManager.handleAddFilter([
                  {
                    filter: filter.name,
                    value: modalCurrent?.name!,
                  },
                ])
              );
            }
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
                  {`${capitalize(filter.name)}s`}
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
                  minHeight: "394px",
                }}
              >
                <RadioGroup
                  isFullWidth
                  sx={{ marginBottom: "-8px" }}
                  id={`${filter.name}-options`}
                  labelText={`${filter.name} filter options`}
                  showLabel={false}
                  name={filter.name}
                  defaultValue={modalCurrent?.name ?? ""}
                  showHelperInvalidText={false}
                  onChange={(newSelection: string) => {
                    selected =
                      filter.options.find(
                        (option) => option.name === newSelection
                      ) || null;
                    setModalCurrent(selected);
                  }}
                >
                  {availableFilterOptions(currentOptions, filter.name)}
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
                    setModalCurrent(current);
                  }}
                  id="close-button"
                >
                  Close
                </Button>
                <Button
                  id="confirm-button"
                  isDisabled={!modalCurrent}
                  onClick={() => {
                    handleClose(true);
                    searchManager.setLastFilter(
                      `accordion-button-select-${filter.name}`
                    );
                    updateURL(
                      searchManager.handleAddFilter([
                        {
                          filter: filter.name,
                          value: modalCurrent?.name!,
                        },
                      ])
                    );
                    setModalCurrent(current);
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
