// Server-side stub — universalviewer is ESM-only and must only run on the client.
// next/dynamic({ ssr: false }) prevents rendering, but webpack still bundles the
// module into shared server chunks. This stub replaces it on the server so its
// initialisation code never executes.
module.exports = { init: () => ({}) };
