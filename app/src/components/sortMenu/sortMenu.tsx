import { SearchManager } from "@/src/utils/searchManager";
import { Menu } from "@nypl/design-system-react-components";

type SortMenuProps = {
  updateURL: (queryString: string) => Promise<void>;
  searchManager: SearchManager;
  options: Record<string, string>;
  setFiltersExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const SortMenu = ({
  updateURL,
  setFiltersExpanded,
  searchManager,
  options,
}: SortMenuProps) => {
  return (
    <Menu
      showLabel
      selectedItem={searchManager.sort}
      labelText={`Sort by: ${options[searchManager.sort]}`}
      listItemsData={Object.entries(options).map(([id, label]) => ({
        id,
        label,
        onClick: () => {
          setFiltersExpanded(false);
          updateURL(searchManager.handleSortChange(id));
        },
        type: "action",
      }))}
    />
  );
};

export default SortMenu;
