import { sendLayoutSelectedEvent } from "@/src/utils/ga4Utils";
import { SearchManager } from "@/src/utils/searchManager/searchManager";
import {
  Menu,
  Icon,
  Button,
  ButtonGroup,
} from "@nypl/design-system-react-components";

type ViewingOptionsMenuProps = {
  updateURL: (queryString: string) => Promise<void>;
  searchManager: SearchManager;
  options: Record<string, string>;
  setFiltersExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
  sort: string;
  showViewModeButtons?: boolean;
};

const ViewingOptionsMenu = ({
  updateURL,
  setFiltersExpanded,
  searchManager,
  options,
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
