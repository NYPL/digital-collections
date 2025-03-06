import {
  Heading,
  RadioGroup,
  Radio,
  Tooltip,
  Icon,
  Flex,
} from "@nypl/design-system-react-components";
import { forwardRef } from "react";

const RadioOption = ({ id, text, tooltip }) => (
  <Radio
    id={id}
    labelText={
      <Flex gap="xxs" justifyItems="center">
        {text}{" "}
        <Tooltip content={tooltip}>
          <span>
            <Icon
              size="medium"
              name="errorOutline"
              iconRotation="rotate180"
              marginTop="xxxs"
            />
          </span>
        </Tooltip>
      </Flex>
    }
    value={id}
  />
);

const RightsFilter = forwardRef<HTMLHeadingElement>((props, ref) => {
  return (
    <>
      <Heading size="heading6" level="h3">
        Show only:
      </Heading>
      <RadioGroup
        name="show-only-filters"
        id="show-only-filters"
        labelText="Show Only"
        showLabel={false}
        marginBottom="s"
        onChange={() => {
          (ref as React.RefObject<HTMLHeadingElement>)?.current?.focus();
        }}
        sx={{
          "> div > div": {
            [`@media screen and (min-width: 600px)`]: {
              flexDirection: "row",
            },
            flexDirection: "column",
          },
        }}
      >
        <RadioOption
          id="pd-radio"
          text="Public domain"
          tooltip="View materials that are free to download, reuse, and share"
        />
        <RadioOption
          id="online-radio"
          text="Available online"
          tooltip="View digital materials from anywhere, any time"
        />
        <RadioOption
          id="onsite-radio"
          text="Contains on-site materials"
          tooltip="View materials accessible only at an NYPL location"
        />
      </RadioGroup>
    </>
  );
});

RightsFilter.displayName = "RightsFilter";
export default RightsFilter;
