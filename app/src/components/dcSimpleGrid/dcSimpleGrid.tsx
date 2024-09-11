import {
  chakra,
  SimpleGrid as ChakraSimpleGrid,
  ChakraComponent,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { headerBreakpoints } from "@/src/utils/breakpoints";

export const gridGapsArray = [
  "grid.xxs",
  "grid.xs",
  "grid.s",
  "grid.m",
  "grid.l",
  "grid.xl",
  "grid.xxl",
] as const;
export type GridGaps = (typeof gridGapsArray)[number];

export interface SimpleGridProps {
  /** Additional class name. */
  className?: string;
  /** Optional gap size; if omitted, the default `large` (2rem / 32px) spacing
   * will be used; `IMPORTANT: for standard grid layouts, this prop should
   * not be used.` */
  gap?: GridGaps;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
}

// Exactly the same as the DS SimpleGrid, but with our breakpoints and desired number of columns applied via media queries.
const SimpleGridComponent = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<SimpleGridProps>
>((props, ref?) => {
  const { children, className, gap = "grid.l", id, ...rest } = props;

  return (
    <ChakraSimpleGrid
      className={className}
      gap={gap}
      id={id}
      ref={ref}
      {...rest}
      sx={{
        [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]: {
          gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
        },
        [`@media screen and (min-width: ${headerBreakpoints.lgTablet}px)`]: {
          gridTemplateColumns: `repeat(4, minmax(0, 1fr))`,
        },
      }}
    >
      {children}
    </ChakraSimpleGrid>
  );
});

SimpleGridComponent.displayName = "SimpleGridComponent";

export const DCSimpleGrid: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<SimpleGridProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<SimpleGridProps>
> = chakra(SimpleGridComponent, { shouldForwardProp: () => true });

export default DCSimpleGrid;
