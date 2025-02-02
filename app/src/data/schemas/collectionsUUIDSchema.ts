const collectionsUUIDSchema = {
  response: {
    title: "string",
    uuid: "string",
    // finding aid link
    // catalog link
    // archives link (is it available in archives)
    keyDate: "string", // date created? So not when it was indexed
    // library locations (parent division?)
    // parent division
    // description

    // topics: many
    // genres: many
    // type of resource = format: many
    // identifiers (this would be enough for the catalog link and finding aid link?)
    // collection history
    // related resources

    // COLLECTION STRUCTURE
    // currently, it's at least the title on every subcollection?
    // it's the number of results when you hit /subcollections

    //
    // physical description ? Not in designs
    // names ? Not in designs
  },
};

export default collectionsUUIDSchema;
