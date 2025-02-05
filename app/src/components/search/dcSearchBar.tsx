import React, { forwardRef } from "react";
import { chakra, ChakraComponent } from "@chakra-ui/react";
import {
  TextInput,
  Box,
  Button,
  Icon,
} from "@nypl/design-system-react-components";
import { headerBreakpoints } from "@/src/utils/breakpoints";

export interface TextInputProps {
  defaultValue?: string;
  id: string;
  isClearable?: boolean;
  isClearableCallback?: () => void;
  labelText: string;
  name?: string;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  pattern?: string;
  placeholder?: string;
  value?: string;
}

export interface SearchBarProps {
  buttonOnClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  id: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  onSubmit: (event: React.FormEvent) => void;
  textInputElement?: JSX.Element;
  textInputProps?: TextInputProps;
  maxWrapperWidth?: string;
}

const SearchBarComponent = forwardRef<HTMLDivElement, SearchBarProps>(
  (props, ref?) => {
    const {
      id,
      isDisabled = false,
      isInvalid = false,
      isRequired = false,
      onSubmit,
      textInputProps,
      maxWrapperWidth,
    } = props;

    const stateProps = {
      helperText: "",
      isDisabled,
      isInvalid,
      isRequired,
      showHelperInvalidText: false,
      showLabel: false,
    };

    const inputPlaceholder = textInputProps?.placeholder || "Search terms";
    const textInputPlaceholder = `${inputPlaceholder} ${
      isRequired ? "(required)" : ""
    }`;

    const textInput = textInputProps && (
      <TextInput
        labelText=""
        className="textInput"
        defaultValue={textInputProps?.defaultValue}
        id={textInputProps?.id || `searchbar-textinput-${id}`}
        isClearable={textInputProps?.isClearable}
        isClearableCallback={textInputProps?.isClearableCallback}
        name={textInputProps?.name}
        onChange={textInputProps?.onChange}
        pattern={textInputProps?.pattern}
        placeholder={textInputPlaceholder}
        textInputType="searchBar"
        type="text"
        value={textInputProps?.value}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSubmit(event);
          }
        }}
        {...stateProps}
      />
    );

    const buttonElem = (
      <Button
        className="searchButton"
        buttonType="primary"
        id={`searchbar-button-${id}`}
        isDisabled={isDisabled}
        onClick={onSubmit}
        type="submit"
        aria-label="Search"
        sx={{
          minWidth: "44px",
          borderLeftRadius: "none",
          lineHeight: "1.70",
          marginBottom: "auto",
          gap: "xxs",
          borderRightRadius: "sm",
          " > span": {
            display: { base: "none", md: "block" },
          },
          borderRadius: "0px 2px 2px 0px",
          "> svg": {
            margin: 0,
            width: "14px",
            height: "14px",
          },
          paddingTop: "xs",
          paddingBottom: "xs",
          paddingLeft: "s",
          paddingRight: "s",
          "> span": {
            display: "block",
          },
          [`@media screen and (max-width: ${headerBreakpoints.lgMobile}px)`]: {
            padding: "xs",
            gap: 0,
            "> span": {
              display: "none",
            },
            "> svg": {
              width: "18px",
              height: "18px",
            },
          },
        }}
      >
        <Icon
          align="left"
          id={`searchbar-icon-${id}`}
          name="search"
          size="small"
        />
        <span>Search</span>
      </Button>
    );

    return (
      <Box
        role="search"
        aria-label="Search collections"
        sx={{
          display: "flex",
          marginBottom: {
            base: "xs",
            md: "auto",
          },
          ".textInput": {
            flexGrow: 1,
            "div > input": {
              borderRightRadius: 0,
            },
          },
          flexFlow: "row",
          maxWidth: maxWrapperWidth,
        }}
      >
        {textInput}
        {buttonElem}
      </Box>
    );
  }
);

SearchBarComponent.displayName = "SearchBarComponent";

export const DCSearchBar: ChakraComponent<
  React.ForwardRefExoticComponent<
    SearchBarProps & React.RefAttributes<HTMLDivElement>
  >,
  SearchBarProps
> = chakra(SearchBarComponent, { shouldForwardProp: () => true });

export default DCSearchBar;
