import { Filter } from "@/src/types/FilterType";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import { SearchManager } from "@/src/utils/searchManager";
import {
  Button,
  Flex,
  Heading,
  TextInput,
  Text,
  TextInputRefType,
} from "@nypl/design-system-react-components";
import { useRouter, usePathname } from "next/navigation";
import { forwardRef, useRef, useState } from "react";

type DateFilterProps = {
  searchManager: SearchManager;
};

export const DateFilter = forwardRef<TextInputRefType, DateFilterProps>(
  ({ searchManager }, ref) => {
    const { push } = useRouter();
    const pathname = usePathname();

    const updateURL = async (queryString) => {
      searchManager.setLastFilter("apply-dates");
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

    const startFilter = searchManager.filters.find(
      (f) => f.filter === "dateStart"
    );
    const endFilter = searchManager.filters.find((f) => f.filter === "dateEnd");

    // Values must be defined or null.
    const startValue = startFilter?.value ?? null;
    const endValue = endFilter?.value ?? null;

    const [dateStart, setDateStart] = useState(startValue || "");
    const [dateEnd, setDateEnd] = useState(endValue || "");

    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
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
    };

    return (
      <>
        <Heading size="heading6" level="h3">
          Date range:
        </Heading>
        <form onSubmit={handleSubmit}>
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
                value={dateStart}
                onChange={(e) => setDateStart(e.target.value)}
                ref={ref}
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
                value={dateEnd}
                onChange={(e) => {
                  setDateEnd(e.target.value);
                }}
              />
            </Flex>
            <Button
              ref={buttonRef}
              aria-label="Apply dates"
              id="apply-dates"
              type="submit"
              isDisabled={
                !validDateInput(dateStart) || !validDateInput(dateEnd)
              }
              sx={{
                whiteSpace: "nowrap",
                minWidth: "108px",
                [`@media (min-width: ${headerBreakpoints.lgMobile}px)`]: {
                  marginTop: "m",
                },
              }}
            >
              Apply dates
            </Button>
          </Flex>
        </form>
      </>
    );
  }
);

DateFilter.displayName = "DateFilter";

export default DateFilter;
