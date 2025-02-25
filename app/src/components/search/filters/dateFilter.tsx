import { headerBreakpoints } from "@/src/utils/breakpoints";
import {
  Button,
  Flex,
  Heading,
  TextInput,
  Text,
} from "@nypl/design-system-react-components";
import { forwardRef } from "react";

const DateFilter = forwardRef<HTMLHeadingElement>((props, ref) => {
  return (
    <>
      <Heading size="heading6">Date range:</Heading>
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
            placeholder="Start year"
            showLabel={false}
          />
          <Text sx={{ marginBottom: "0" }}> to </Text>
          <TextInput
            sx={{
              [`@media (min-width: ${headerBreakpoints.lgMobile}px)`]: {
                width: "100px",
              },
            }}
            id="dateEnd"
            labelText="End year"
            showLabel={false}
            placeholder="End year"
          />
        </Flex>
        <Button
          id="date-filter-btn"
          sx={{
            whiteSpace: "nowrap",
            minWidth: "108px",
          }}
          onClick={() => {
            (ref as React.RefObject<HTMLHeadingElement>)?.current?.focus();
          }}
        >
          Apply dates
        </Button>
      </Flex>
    </>
  );
});

DateFilter.displayName = "DateFilter";

export default DateFilter;
