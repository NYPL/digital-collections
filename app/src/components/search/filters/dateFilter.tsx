import { useSearchContext } from "@/src/context/SearchProvider";
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
import { useRef, useState } from "react";

type DateFilterProps = {
  searchManager: SearchManager;
};

const DateFilter = ({ searchManager }: DateFilterProps) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const { lastFilterRef } = useSearchContext();

  const updateURL = async (queryString) => {
    lastFilterRef.current = buttonRef.current;
    push(`${pathname}?${queryString}`);
  };

  const validDateInput = (input) => {
    if (input === null || input === "") {
      return true;
    }
    return (
      /^\d{1,4}$/.test(input) && Number(input) >= 0 && Number(input) <= 9999
    );
  };

  // To do: memoize?
  const startFilter = searchManager.filters.find(
    (f) => f.filter === "dateStart"
  );
  const endFilter = searchManager.filters.find((f) => f.filter === "dateEnd");

  const startValue = startFilter?.value ?? null;
  const endValue = endFilter?.value ?? null;

  const [dateStart, setDateStart] = useState(startValue);
  const [dateEnd, setDateEnd] = useState(endValue);

  const buttonRef = useRef<HTMLButtonElement>(null);
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
            isInvalid={!validDateInput(dateStart)}
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
            isInvalid={!validDateInput(dateEnd)}
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
          isDisabled={!validDateInput(dateStart) || !validDateInput(dateEnd)}
          sx={{
            whiteSpace: "nowrap",
            minWidth: "108px",
            [`@media (min-width: ${headerBreakpoints.lgMobile}px)`]: {
              marginTop: "m",
            },
          }}
          onClick={() => {
            const filtersToRemove: Filter[] = [];
            if (dateStart === "") {
              filtersToRemove.push({ filter: "dateStart", value: dateStart });
            }
            if (dateEnd === "") {
              filtersToRemove.push({ filter: "dateEnd", value: dateEnd });
            }

            if (filtersToRemove.length > 0) {
              updateURL(searchManager.handleRemoveFilter(filtersToRemove));
            }
            const filtersToAdd: Filter[] = [];
            if (dateStart) {
              filtersToAdd.push({ filter: "dateStart", value: dateStart });
            }
            if (dateEnd) {
              filtersToAdd.push({ filter: "dateEnd", value: dateEnd });
            }

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
};

DateFilter.displayName = "DateFilter";

export default DateFilter;
