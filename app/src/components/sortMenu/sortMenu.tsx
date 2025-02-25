import { SearchManager } from "@/src/utils/searchManager";
import { Menu } from "@nypl/design-system-react-components";

type SortMenuProps = {
  updateURL: (queryString: string) => Promise<void>;
  searchManager: SearchManager;
  options: Record<string, string>;
};

const SortMenu = ({ updateURL, searchManager, options }: SortMenuProps) => {
  return (
    <Menu
      showLabel
      selectedItem={searchManager.sort}
      labelText={`Sort by: ${options[searchManager.sort]}`}
      listItemsData={Object.entries(options).map(([id, label]) => ({
        id,
        label,
        onClick: () => {
          updateURL(searchManager.handleSortChange(id));
        },
        type: "action",
      }))}
    />
  );
};

export default SortMenu;
