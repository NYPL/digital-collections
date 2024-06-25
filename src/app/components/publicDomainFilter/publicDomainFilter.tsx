import React, { useState } from "react";
import { Box, Checkbox, Link } from "@nypl/design-system-react-components";
import { PublicDomainFilterProps } from "../../types/PublicDomainFilterProps";

const PublicDomainFilter = ({ onCheckChange }: PublicDomainFilterProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const text = (
    <>
      Search only public domain.{" "}
      <Link href="/about#public_domain">What is public domain?</Link>
    </>
  );

  const handleCheckChange = (event) => {
    const newValue = event.target.checked;
    setIsChecked(newValue);
    onCheckChange(newValue);
  };

  return (
    <Box sx={{ paddingTop: "15px", paddingBottom: "15px" }}>
      <Checkbox
        id="pd-checkbox"
        data-testid="pd-checkbox"
        labelText={text}
        name="pd_filter"
        isChecked={isChecked}
        onChange={handleCheckChange}
      />
    </Box>
  );
};

export default PublicDomainFilter;
