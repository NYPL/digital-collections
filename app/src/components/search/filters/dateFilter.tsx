import {
  Button,
  Flex,
  Heading,
  TextInput,
  Text,
} from "@nypl/design-system-react-components";

const DateFilter = () => {
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
        <Button id="date-filter-btn">Apply dates</Button>
      </Flex>
    </>
  );
};

export default DateFilter;
