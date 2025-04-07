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
import { useRouter, usePathname } from "next/navigation";
import { forwardRef, useRef, useState } from "react";

type DateFilterProps = {
  searchManager: SearchManager;
};

const DateFilter = forwardRef<HTMLHeadingElement, DateFilterProps>(
  ({ searchManager }, ref) => {
    const { push } = useRouter();
    const pathname = usePathname();
    const updateURL = async (queryString) => {
      push(`${pathname}?${queryString}`);
    };

    const validDateInput = (input) => {
      return (
        input !== null &&
        !(
          /^\d{1,4}$/.test(input) &&
          Number(input) >= 0 &&
          Number(input) <= 9999
        )
      );
    };

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
              isInvalid={validDateInput(dateStart)}
              showHelperInvalidText={false}
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
              isInvalid={validDateInput(dateEnd)}
              id="dateEnd"
              showHelperInvalidText={false}
              labelText="End year"
              value={dateEnd || ""}
              onChange={(e) => {
                setDateEnd(e.target.value);
              }}
            />
          </Flex>
          <Button
            ref={buttonRef}
            id="date-filter-btn"
            isDisabled={validDateInput(dateStart) || validDateInput(dateEnd)}
            sx={{
              whiteSpace: "nowrap",
              minWidth: "108px",
              [`@media (min-width: ${headerBreakpoints.lgMobile}px)`]: {
                marginTop: "m",
              },
            }}
            onClick={() => {
              const filtersToRemove = [
                dateStart === ""
                  ? { filter: "dateStart", value: dateStart }
                  : null,
                dateEnd === "" ? { filter: "dateEnd", value: dateEnd } : null,
              ].filter((filter): filter is Filter => filter !== null);
              console.log(filtersToRemove);
              if (filtersToRemove.length > 0) {
                updateURL(searchManager.handleRemoveFilter(filtersToRemove));
              }
              const filtersToAdd = [
                dateStart ? { filter: "dateStart", value: dateStart } : null,
                dateEnd ? { filter: "dateEnd", value: dateEnd } : null,
              ].filter((filter): filter is Filter => filter !== null);

              if (filtersToAdd.length > 0) {
                updateURL(searchManager.handleAddFilter(filtersToAdd));
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
