// collections/:uuid/children
export const collectionsChildrenSchema = {
  page: "number",
  perPage: "number",
  children:
    "{title: 'string', uuid: 'string', hasSubContainers: 'boolean', itemCount: 'number'}[]",
};
