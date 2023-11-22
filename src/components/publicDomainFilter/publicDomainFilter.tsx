import React, { useState } from "react";
import { Checkbox, Link } from "@nypl/design-system-react-components";

const PublicDomainFilter = ({ onCheckChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const text = (
    <>
      Search only public domain{" "}
      <Link href="https://digitalcollections.nypl.org/about">
        What is public domain?
      </Link>
    </>
  );

  const handleCheckChange = (event) => {
    const newValue = event.target.checked;
    setIsChecked(newValue);
    onCheckChange(newValue);
  };

  return (
    <Checkbox
      id="checkbox_id"
      labelText={text}
      name="pd_filter"
      showLabel
      isChecked={isChecked}
      onChange={handleCheckChange}
      sx={{ py: "s" }}
    />
  );
};

export default PublicDomainFilter;
