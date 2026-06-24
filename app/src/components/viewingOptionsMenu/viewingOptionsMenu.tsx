import { sendLayoutSelectedEvent } from "@/src/utils/ga4Utils";
import { SearchManager } from "@/src/utils/searchManager/searchManager";
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
  setFiltersExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
  sort: string;
  showViewModeButtons?: boolean;
};

const ViewingOptionsMenu = ({
  updateURL,
  setFiltersExpanded,
  searchManager,
  options,
  perPageOptions = [],
  sort,
  showViewModeButtons = true,
}: ViewingOptionsMenuProps) => {
  const layoutSelectHandler = (viewMode: "grid" | "list"): (() => void) => {
    return () => {
      if (searchManager.viewMode == viewMode) {
        return;
      }
      sendLayoutSelectedEvent(viewMode);
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
      <Menu
        key={sort}
        id="sort-menu"
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
            searchManager.setLastFilter("menu-button-sort-menu");
            updateURL(searchManager.handleSortChange(id));
          },
          type: "action",
        }))}
      />
      {perPageOptions.length > 0 && (
        <Box
          sx={{
            display: "none",
            "@media screen and (min-width: 600px)": { display: "block" },
          }}
        >
          <Menu
            key={`per-page-${searchManager.perPage}`}
            id="results-per-page-menu"
            showLabel
            selectedItem={searchManager.perPage.toString()}
            labelText={`Results per page: ${searchManager.perPage}`}
            labelAsAriaLabel
            listItemsData={perPageOptions.map((value) => ({
              id: value.toString(),
              label: value.toString(),
              onClick: () => {
                if (setFiltersExpanded) {
                  setFiltersExpanded(false);
                }
                searchManager.setLastFilter(
                  "menu-button-results-per-page-menu"
                );
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
            variant={searchManager.viewMode == "grid" ? "primary" : "text"}
            aria-pressed={searchManager.viewMode == "grid" ? true : false}
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
            variant={searchManager.viewMode == "list" ? "primary" : "text"}
            aria-pressed={searchManager.viewMode == "list" ? true : false}
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
