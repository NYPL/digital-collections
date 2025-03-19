import { SearchManager } from "@/src/utils/searchManager";
import {
  Heading,
  RadioGroup,
  Radio,
  Box,
} from "@nypl/design-system-react-components";
import { useRouter, usePathname } from "next/navigation";
import { forwardRef, useState } from "react";
import { ToggleTip } from "../../toggleTip/toggleTip";
type RightsFilterProps = {
  searchManager: SearchManager;
};

const RadioOption = ({ id, text, tooltip }) => (
  <Box display="flex" alignItems="center">
    <Radio id={id} value={id} labelText={text} />
    <ToggleTip toggleTipContent={tooltip} labelText={text} />
  </Box>
);

const RightsFilter = forwardRef<HTMLHeadingElement, RightsFilterProps>(
  ({ searchManager }, ref) => {
    let selected = searchManager.filters.find((f) => f.filter === "rights")
      ? searchManager.filters.find((f) => f.filter === "rights")?.value || null
      : null;
    const [selectedFilter, setSelectedFilter] = useState<string | null>(
      selected
    );

    const { push } = useRouter();
    const pathname = usePathname();
    const updateURL = async (queryString) => {
      push(`${pathname}?${queryString}`);
    };

    const handleRadioChange = (value: string) => {
      setSelectedFilter(value);
      updateURL(searchManager.handleAddFilter([{ filter: "rights", value }]));
    };

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
          defaultValue={selectedFilter || ""}
          onChange={(e) => handleRadioChange(e)}
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
            tooltip="View materials that are free to download, reuse, and share."
          />
          <RadioOption
            id="online-radio"
            text="Available online"
            tooltip="View digital materials from anywhere, any time."
          />
          <RadioOption
            id="onsite-radio"
            text="Contains on-site materials"
            tooltip="View materials accessible only at an NYPL location."
          />
        </RadioGroup>
      </>
    );
  }
);

RightsFilter.displayName = "RightsFilter";
export default RightsFilter;
