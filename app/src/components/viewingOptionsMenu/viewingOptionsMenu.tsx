import { sendLayoutSelectedEvent } from "@/src/utils/ga4Utils";
import { SearchManager } from "@/src/utils/searchManager/searchManager";
import type { Dispatch, SetStateAction } from "react";
import {
  Menu,
  Icon,
  Button,
  ButtonGroup,
  Box,
} from "@nypl/design-system-react-components";

type ViewingOptionsMenuProps = {
  updateURL: (queryString: string) => Promise<void>;
  searchManager: SearchManager;
  options: Record<string, string>;
  perPageOptions?: number[];
  setFiltersExpanded?: Dispatch<SetStateAction<boolean>>;
  sort: string;
  showViewModeButtons?: boolean;
  showSortMenu?: boolean;
  sortMenuId?: string;
  perPageMenuId?: string;
  onViewModeChangeStart?: (viewMode: "grid" | "list") => void;
};

const ViewingOptionsMenu = ({
  updateURL,
  setFiltersExpanded,
  searchManager,
  options,
  perPageOptions = [],
  sort,
  showViewModeButtons = true,
  showSortMenu = true,
  sortMenuId = "sort-menu",
  perPageMenuId = "results-per-page-menu",
  onViewModeChangeStart,
}: ViewingOptionsMenuProps) => {
  const layoutSelectHandler = (viewMode: "grid" | "list"): (() => void) => {
    return () => {
      if (searchManager.viewMode === viewMode) {
        return;
      }
      sendLayoutSelectedEvent(viewMode);
      onViewModeChangeStart?.(viewMode);
      if (setFiltersExpanded) {
        setFiltersExpanded(false);
      }
      searchManager.setLastFilter(`${viewMode}-view-button`);
      const queryString = searchManager.handleViewModeChange(viewMode);
      updateURL(queryString);
    };
  };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      {showSortMenu && (
        <Menu
          key={`${sortMenuId}-${sort}`}
          id={sortMenuId}
          showLabel
          selectedItem={sort}
          labelText={`Sort by: ${options[sort]}`}
          labelAsAriaLabel
          listItemsData={Object.entries(options).map(([id, label]) => ({
            id,
            label,
            onClick: () => {
              if (setFiltersExpanded) {
                setFiltersExpanded(false);
              }
              searchManager.setLastFilter(`menu-button-${sortMenuId}`);
              updateURL(searchManager.handleSortChange(id));
            },
            type: "action",
          }))}
        />
      )}
      {perPageOptions.length > 0 && (
        <Box
          sx={{
            display: "none",
            "@media screen and (min-width: 768px)": { display: "block" },
          }}
        >
          <Menu
            key={`${perPageMenuId}-${searchManager.perPage}`}
            id={perPageMenuId}
            showLabel
            selectedItem={searchManager.perPage.toString()}
            labelText={`Results per page: ${searchManager.perPage}`}
            labelAsAriaLabel
            listItemsData={perPageOptions.map((value) => ({
              id: `per-page-option-${value.toString()}`,
              label: value.toString(),
              onClick: () => {
                if (setFiltersExpanded) {
                  setFiltersExpanded(false);
                }
                searchManager.setLastFilter(`menu-button-${perPageMenuId}`);
                updateURL(searchManager.handlePerPageChange(value));
              },
              type: "action",
            }))}
          />
        </Box>
      )}
      {showViewModeButtons && (
        <ButtonGroup
          sx={{
            gap: "0px",
            outline: "1px solid var(--nypl-colors-ui-border-default)",
            outlineOffset: "-1px",
            height: "40px",
            padding: "4px",
            borderRadius: "2px",
          }}
        >
          <Button
            variant={searchManager.viewMode === "grid" ? "primary" : "text"}
            aria-pressed={searchManager.viewMode === "grid"}
            onClick={layoutSelectHandler("grid")}
            sx={{
              padding: "inherit",
              height: "auto",
              minWidth: "auto",
            }}
            aria-label="grid view"
          >
            <Icon
              id="grid-menu-icon"
              name="navigationApps"
              decorative={false}
              title="Grid view icon"
              size="large"
              aria-hidden="true"
            />
          </Button>

          <Button
            variant={searchManager.viewMode === "list" ? "primary" : "text"}
            aria-pressed={searchManager.viewMode === "list"}
            onClick={layoutSelectHandler("list")}
            sx={{
              padding: "inherit",
              height: "auto",
              minWidth: "auto",
              marginLeft: "4px",
            }}
            aria-label="list view"
          >
            <Icon
              id="list-menu-icon"
              name="actionList"
              decorative={false}
              title="List view icon"
              size="large"
              aria-hidden="true"
            />
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
};

export default ViewingOptionsMenu;
