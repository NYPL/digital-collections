import {
  Heading,
  RadioGroup,
  Radio,
  Tooltip,
  Icon,
} from "@nypl/design-system-react-components";

const RightsFilter = () => {
  return (
    <>
      <Heading size="heading6">Show only:</Heading>
      <RadioGroup
        name="show-only-filters"
        id="show-only-filters"
        labelText="Show Only"
        showLabel={false}
        layout="row"
        marginBottom="m"
      >
        <Radio id="pd-checkbox" labelText="Public domain" value="pd-radio" />
        <Radio
          id="online-radio"
          labelText="Available online"
          value="online-radio"
        />
        <Radio
          id="onsite-radio"
          labelText={
            <Tooltip content="These items are not available digitally and must be accessed in person.">
              <span>
                Contains on-site materials{" "}
                <Icon
                  size="medium"
                  name="errorOutline"
                  iconRotation="rotate180"
                />
              </span>
            </Tooltip>
          }
          value="onsite-radio"
        />
      </RadioGroup>
    </>
  );
};

export default RightsFilter;
