const collectionsUUIDSchema = {
  response: {
    title: "string",
    uuid: "string",
    // where is all the info/headers under "About" coming from– that should be combined into this endpoint
    // finding aid link
    // catalog link
    // archives link (is it available in archives, this can be if archive id is returned)
    keyDate: "string", // date created? So not when it was indexed
    // library locations (parent division?)

    // topics: many
    // genres: many
    // type of resource = format: many
    // identifiers (this would be enough for the catalog link and finding aid link?)
    // collection history
    // related resources

    // COLLECTION STRUCTURE
    // currently, it's at least the title on every subcollection?
    // it's the number of results when you hit /subcollections
  },
};

export default collectionsUUIDSchema;
