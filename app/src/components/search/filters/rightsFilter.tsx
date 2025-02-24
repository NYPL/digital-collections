import { headerBreakpoints } from "@/src/utils/breakpoints";
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
        marginBottom="m"
        sx={{
          "> div > div": {
            [`@media screen and (min-width: 600px)`]: {
              flexDirection: "row",
            },
            flexDirection: "column",
          },
        }}
      >
        <Radio
          id="pd-checkbox"
          labelText={
            <span>
              Public domain{" "}
              <Tooltip content="View materials that are free to download, reuse, and share">
                <span>
                  <Icon
                    size="medium"
                    name="errorOutline"
                    iconRotation="rotate180"
                  />
                </span>
              </Tooltip>
            </span>
          }
          value="pd-radio"
        />
        <Radio
          id="online-radio"
          labelText={
            <span>
              Available online{" "}
              <Tooltip content="View digital materials from anywhere, any time">
                <span>
                  <Icon
                    size="medium"
                    name="errorOutline"
                    iconRotation="rotate180"
                  />
                </span>
              </Tooltip>
            </span>
          }
          value="online-radio"
        />
        <Radio
          id="onsite-radio"
          labelText={
            <span>
              Contains on-site materials{" "}
              <Tooltip content="View materials accessible only at an NYPL location">
                <span>
                  <Icon
                    size="medium"
                    name="errorOutline"
                    iconRotation="rotate180"
                  />
                </span>
              </Tooltip>
            </span>
          }
          value="onsite-radio"
        />
      </RadioGroup>
    </>
  );
};

export default RightsFilter;
