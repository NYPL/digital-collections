import React, { forwardRef } from "react";
import { chakra, ChakraComponent } from "@chakra-ui/react";
import {
  TextInput,
  Box,
  Button,
  Icon,
} from "@nypl/design-system-react-components";
import { headerBreakpoints } from "@/src/utils/breakpoints";

export type TextInputProps = {
  /** The starting value of the input field. */
  defaultValue?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id: string;
  /** Adds a button to clear existing text in the input field. */
  isClearable?: boolean;
  /** The callback function that is called when the clear button is clicked. */
  isClearableCallback?: () => void;
  /** Provides text for a `Label` component if `showLabel` is set to true;
   * populates an `aria-label` attribute if `showLabel` is set to false. */
  labelText: string;
  /** Used to reference the input element in forms. */
  name?: string;
  /** The action to perform on the `input`/`textarea`'s onChange function  */
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  /** Regex to query the user input against. */
  pattern?: string;
  /** Populates the placeholder for the input/textarea elements */
  placeholder?: string;
  /** Populates the value of the input/textarea elements */
  value?: string;
};

export interface SearchBarProps {
  /** The onClick callback function for the `Button` component. */
  buttonOnClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /** ID that other components can cross reference for accessibility purposes */
  id: string;
  /** Sets children form components in the disabled state. */
  isDisabled?: boolean;
  /** Sets children form components in the error state. */
  isInvalid?: boolean;
  /** Sets children form components in the required state. */
  isRequired?: boolean;
  /** Populates the `aria-label` attribute on the wrapper. */
  labelText: string;
  /** Handler function when the form is submitted. */
  onSubmit: (event: React.FormEvent) => void;
  /** Custom input element to render instead of a `TextInput` element. */
  textInputElement?: JSX.Element;
  /** Required props to render a `TextInput` element. */
  textInputProps: TextInputProps | undefined;
  /** Maximum width of wrapper. */
  maxWrapperWidth?: string;
  /** Sets if submit button displays (for autocomplete search). */
  showButton?: boolean;
  setIsFocused?: (boolean) => void;
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
      labelText,
      maxWrapperWidth,
      showButton = true,
      setIsFocused,
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
        labelText={textInputProps?.labelText}
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
        sx={{
          paddingRight: showButton ? "unset" : "l",
        }}
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
        aria-labelledby="searchbar-text"
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
        <span id="searchbar-text">Search</span>
      </Button>
    );

    return (
      <Box
        role="search"
        aria-label={labelText}
        aria-autocomplete={showButton ? undefined : "list"}
        sx={{
          display: "flex",
          marginBottom: {
            base: "xs",
            md: "auto",
          },
          ".textInput": {
            flexGrow: 1,
            "div > input": {
              borderRightRadius: showButton ? 0 : "2px",
            },
          },
          flexFlow: "row",
          maxWidth: maxWrapperWidth,
        }}
      >
        {showButton ? (
          textInput
        ) : (
          <Box position="relative" width="100%">
            {textInput}
            <Icon
              name="search"
              size="medium"
              position="absolute"
              right="0px"
              top="50%"
              transform="translateY(-50%)"
              color="ui.gray.dark"
              pointerEvents="none"
            />
          </Box>
        )}
        {showButton && buttonElem}
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
