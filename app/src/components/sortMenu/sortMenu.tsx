import { SearchManager } from "@/src/utils/searchManager/searchManager";
import { Menu } from "@nypl/design-system-react-components";

type SortMenuProps = {
  updateURL: (queryString: string) => Promise<void>;
  searchManager: SearchManager;
  options: Record<string, string>;
  setFiltersExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
  sort: string;
};

const SortMenu = ({
  updateURL,
  setFiltersExpanded,
  searchManager,
  options,
  sort,
}: SortMenuProps) => {
  return (
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
  );
};

export default SortMenu;
