"use client";

import {
  Heading,
  RadioGroup,
  Radio,
  Box,
} from "@nypl/design-system-react-components";
import { useRouter, usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ToggleTip } from "../../toggleTip/toggleTip";
import { useSearchContext } from "@/src/context/SearchProvider";
import { SearchManager } from "@/src/utils/searchManager";

type RightsFilterProps = {
  searchManager: SearchManager;
};

const RightsFilter = ({ searchManager }: RightsFilterProps) => {
  const selected =
    searchManager.filters.find((f) => f.filter === "rights")?.value || null;
  const [selectedFilter, setSelectedFilter] = useState<string | null>(selected);

  const { lastFilterRef } = useSearchContext();
  const radioRefs = {
    publicDomain: useRef<HTMLInputElement>(null),
    availableOnline: useRef<HTMLInputElement>(null),
    onSiteMaterial: useRef<HTMLInputElement>(null),
  };

  const { push } = useRouter();
  const pathname = usePathname();

  const updateURL = async (queryString: string, selectedValue: string) => {
    const selectedRadioRef = radioRefs[selectedValue as keyof typeof radioRefs];
    if (selectedRadioRef?.current) {
      lastFilterRef.current = selectedRadioRef.current;
    }

    push(`${pathname}?${queryString}`);
  };

  const handleRadioChange = (value: string) => {
    setSelectedFilter(value);
    const queryString = searchManager.handleAddFilter([
      { filter: "rights", value },
    ]);
    updateURL(queryString, value);
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
        <Box display="flex" alignItems="center">
          <Radio
            id="publicDomain"
            value="publicDomain"
            labelText="Public domain"
            ref={radioRefs.publicDomain}
          />
          <ToggleTip
            toggleTipContent="View materials that are free to download, reuse, and share."
            labelText="Public domain"
          />
        </Box>

        <Box display="flex" alignItems="center">
          <Radio
            id="availableOnline"
            value="availableOnline"
            labelText="Available online"
            ref={radioRefs.availableOnline}
          />
          <ToggleTip
            toggleTipContent="View digital materials from anywhere, any time."
            labelText="Available online"
          />
        </Box>

        <Box display="flex" alignItems="center">
          <Radio
            id="onSiteMaterial"
            value="onSiteMaterial"
            labelText="Contains on-site materials"
            ref={radioRefs.onSiteMaterial}
          />
          <ToggleTip
            toggleTipContent="View materials accessible only at an NYPL location."
            labelText="Contains on-site materials"
          />
        </Box>
      </RadioGroup>
    </>
  );
};

export default RightsFilter;
