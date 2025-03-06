import { Filter } from "@/src/types/FilterType";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import { SearchManager } from "@/src/utils/searchManager";
import {
  Button,
  Flex,
  Heading,
  TextInput,
  Text,
} from "@nypl/design-system-react-components";
import { forwardRef, useRef, useState } from "react";

type DateFilterProps = {
  searchManager: SearchManager;
  updateURL: (string) => void;
};

const DateFilter = forwardRef<HTMLHeadingElement, DateFilterProps>(
  (props, ref) => {
    const { searchManager, updateURL, ...rest } = props;

    let startValue = searchManager.filters.find((f) => f.filter === "dateStart")
      ? searchManager.filters.find((f) => f.filter === "dateStart")?.value ||
        null
      : null;

    let endValue = searchManager.filters.find((f) => f.filter === "dateEnd")
      ? searchManager.filters.find((f) => f.filter === "dateEnd")?.value || null
      : null;

    const [dateStart, setDateStart] = useState(startValue);
    const [dateEnd, setDateEnd] = useState(endValue);

    const buttonRef: React.RefObject<HTMLButtonElement> =
      useRef<HTMLButtonElement>(null);
    return (
      <>
        <Heading size="heading6" level="h3">
          Date range:
        </Heading>
        <Flex
          gap="s"
          marginBottom="m"
          sx={{
            flexDirection: "column",
            alignContent: "center",
            [`@media (min-width: ${headerBreakpoints.lgMobile}px)`]: {
              flexDirection: "row",
            },
          }}
        >
          <Flex gap="s" alignItems="center">
            <TextInput
              sx={{
                [`@media (min-width: ${headerBreakpoints.lgMobile}px)`]: {
                  width: "100px",
                },
              }}
              id="dateStart"
              labelText="Start year"
              value={dateStart || ""}
              onChange={(e) => setDateStart(e.target.value)}
            />
            <Text sx={{ marginBottom: "0", marginTop: "m" }}> to </Text>
            <TextInput
              sx={{
                [`@media (min-width: ${headerBreakpoints.lgMobile}px)`]: {
                  width: "100px",
                },
              }}
              id="dateEnd"
              labelText="End year"
              value={dateEnd || ""}
              onChange={(e) => {
                console.log(e.target.value);
                setDateEnd(e.target.value);
              }}
            />
          </Flex>
          <Button
            ref={buttonRef}
            id="date-filter-btn"
            sx={{
              whiteSpace: "nowrap",
              minWidth: "108px",
              [`@media (min-width: ${headerBreakpoints.lgMobile}px)`]: {
                marginTop: "m",
              },
            }}
            onClick={() => {
              const newFilters = [
                dateStart ? { filter: "dateStart", value: dateStart } : null,
                dateEnd ? { filter: "dateEnd", value: dateEnd } : null,
              ].filter((filter): filter is Filter => filter !== null);

              if (newFilters.length > 0) {
                updateURL(searchManager.handleAddFilter(newFilters));
              }
            }}
          >
            Apply dates
          </Button>
        </Flex>
      </>
    );
  }
);

DateFilter.displayName = "DateFilter";

export default DateFilter;
