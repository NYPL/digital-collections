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
      <Flex gap="s" alignItems="center" marginBottom="m">
        <TextInput
          width="100px"
          id="dateStart"
          labelText="Start year"
          placeholder="Start year"
          showLabel={false}
        />
        <Text sx={{ marginBottom: "0" }}> to </Text>
        <TextInput
          width="100px"
          id="dateEnd"
          labelText="End year"
          showLabel={false}
          placeholder="End year"
        />
        <Button
          id="date-filter-btn"
          sx={{
            [`@media screen and (min-width: 400px)`]: {
              whiteSpace: "nowrap",
            },
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
