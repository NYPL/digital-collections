import React, { useState, useRef } from "react";
import { Box, Checkbox, Link } from "@nypl/design-system-react-components";
import { PublicDomainFilterProps } from "../../types/props/PublicDomainFilterProps";

const PublicDomainFilter = ({ onCheckChange }: PublicDomainFilterProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const text = (
    <>
      Search only public domain.{" "}
      <Link href="/about#public_domain">What is public domain?</Link>
    </>
  );

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    checkboxRef.current?.focus({ preventScroll: true });
    const newValue = !isChecked;
    setIsChecked(newValue);
    onCheckChange(newValue);
  };

  return (
    <Box sx={{ pt: "15px", pb: "15px" }}>
      <Checkbox
        id="pd-checkbox"
        data-testid="pd-checkbox"
        labelText={text}
        name="pd_filter"
        isChecked={isChecked}
        {...{ onClick: handleClick }}
        ref={checkboxRef}
      />
    </Box>
  );
};

export default PublicDomainFilter;
