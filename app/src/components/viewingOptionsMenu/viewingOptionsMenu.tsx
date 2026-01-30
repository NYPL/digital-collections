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
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <Menu
        key={sort}
        id="sort-menu"
        showLabel
        selectedItem={sort}
        labelText={`Sort by: ${options[sort]}`}
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
            border: "1px solid var(--nypl-colors-ui-border-default)",
            height: "40px",
            padding: "4px",
          }}
        >
          <Button
            variant={searchManager.viewMode == "grid" ? "primary" : "text"}
            onClick={() => {
              console.log("Grid button clicked");
              console.log("Current viewMode:", searchManager.viewMode);
              if (setFiltersExpanded) {
                setFiltersExpanded(false);
              }
              searchManager.setLastFilter("grid-view-button");
              const queryString = searchManager.handleViewModeChange("grid");
              console.log("Query string for grid:", queryString);
              updateURL(queryString);
            }}
            sx={{
              padding: "inherit",
              height: "auto",
              width: "auto",
            }}
          >
            <Icon
              id="grid-menu-icon"
              name="navigationApps"
              decorative={false}
              title="Grid view icon"
              size="large"
            />
          </Button>

          <Button
            variant={searchManager.viewMode == "list" ? "primary" : "text"}
            onClick={() => {
              if (setFiltersExpanded) {
                setFiltersExpanded(false);
              }
              searchManager.setLastFilter("list-view-button");
              updateURL(searchManager.handleViewModeChange("list"));
            }}
            sx={{
              padding: "inherit",
              height: "auto",
              width: "auto",
              marginLeft: "4px",
            }}
          >
            <Icon
              id="list-menu-icon"
              name="actionList"
              decorative={false}
              title="List view icon"
              size="large"
            />
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
};

export default ViewingOptionsMenu;
