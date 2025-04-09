import React, { useState, useRef } from "react";
import {
  Box,
  Checkbox,
  Link,
  Text,
} from "@nypl/design-system-react-components";
import { PublicDomainFilterProps } from "../../types/props/PublicDomainFilterProps";

const PublicDomainFilter = ({ onCheckChange }: PublicDomainFilterProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const text = (
    <>
      Search only public domain.{" "}
      <Link hasVisitedState={false} href="/about#public_domain">
        What is public domain?
      </Link>
    </>
  );

  // Overriding click() behavior on checkbox to focus and prevent header scroll.
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    checkboxRef.current?.focus({ preventScroll: true });
    const newValue = !isChecked;
    setIsChecked(newValue);
    onCheckChange(newValue);
  };

  return (
    <Box
      sx={{
        pt: "15px",
        pb: "15px",
        display: "flex",
        gap: "xs",
        justifyItems: "center",
      }}
    >
      <Checkbox
        id="pd-checkbox"
        data-testid="pd-checkbox"
        name="pd_filter"
        labelText=""
        showLabel={false}
        isChecked={isChecked}
        {...{ onClick: handleClick }}
        ref={checkboxRef}
      />
      <Text fontSize="14px" marginBottom="0">
        {text}
      </Text>
    </Box>
  );
};

export default PublicDomainFilter;
