# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased
### Added
- Added redirects for OG direct capture links
- Added Playwright test to verify two collection's on home page(DR-3658)

## [0.4.4] 2025-07-01
### Added
- Added Playwright tests to confirm featured section on the homepage (DR-3658)
- Added Playwright tests to clear search results filters (DR-3659)
- Added Playwright tests to sort search results (DR-3659)
- Added Image ID to Items page (DR-3695)
- Added Playwright test feedback button to the home page (DR-3658)
- Added Playwright  test where a user clicks Divisions from home page navigation menu (DR-3655)
- Added Playwright test to verify two collections and contains onsite material label on Divisions page (DR-3655)
- Added Playwright updated test to verify navigation menu on Divisons page (DR-3655)
- Added Playwright test to verify Division's name headings and the see more links for each division (DR-3655)
- Added Playwright tests to click on items in search results (DR-3659)
- Added Playwright tests to filter by date and availability (DR-3659)
- Added Playwright tests to navigate to Items landing page and confirm elements are displayed (DR-3761)

### Fixed
- Fixed Order Print button (DR-3486)
- Fixed bug with UniversalViewer where image controls are hidden after clicking an image (DR-3692)
- Fixed grammatical mistake on filter options. (NO-REF)

### Updated
- Updated breadcrumb to include Division and Collection information (DR-3701)
- Updated Collections page to bolden the Polonsky note (DR-3705)
- Updated `fetch` calls to include original client IP (DR-3754)
- Updated Item page to use React Player for AV materials

## [0.4.3] 2025-06-17
### Added
- Added Universal Viewer support and metadata fields
- Conditionally render viewer with rights logic (DR-3645)
- Added Playwright testing library (DR-3680)
- Added Playwright tests for navigation menu, what is public domain and search bar, explore further for the home page (DR-3658)
- Added Playwright test to search for a keyword (DR-3659)
- Added Playwright test to confirm visibility of search result filters (DR-3659)
- Added Playwright test to filter search results with dropdowns (DR-3659)
- Added GitHub Actions workflow to run Playwright tests on PRs (DR-3721)
- Added Playwright tests to clear search results filters (DR-3659)


## [0.4.2] 2025-05-22

### Added

- Added sequence sort option and new default sort functionality to search (DR-3609)
- Connected collection landing page (metadata) to API (DR-3362)
- Added collection structure component (DR-3545)
- Added deprecated division slug redirects
- Added clientside subcollection redirects (DR-3616)

### Updated

- Updated collection and subcollection filter value format (DR-3515)

## [0.4.1] 2025-05-16

### Updated

- HOT FIX: updated search results to use full title instead of just highlights

## [0.4.0] 2025-05-15

### Fixed

- Fixed filters to be encoded as URI components (DR-3564)
- Fixed dropdown filters to only display selection (DR-3598)

### Added

- Logged 404 path to New Relic (DR-3550)

## [0.3.6] 2025-04-21

### Updated

- Resolved layout shift on header focus (DR-3523)
- Updated DS to v3.6.0 (DR-3470)

### Added

- Added Collections API authentication tokens (DR-3535)
- Added search query redirects (DR-3529)
- Added collection slug to uuid redirects (DR-3538)
- Connected search page to API (DR-3416)

## [0.3.5] 2025-03-27

### Added

- Added Google Tag Manager (DR-3434)
- Added custom toggle tip component for rights filter (DR-3460)

### Updated

- Updated version of Next.js (DR-3524)

## [0.3.4] 2025-03-13

### Updated

- Updated /collections page to use revalidatePath to clear cache

## [0.3.3] 2025-03-06

### Added

- Added custom select component, `selectFilter`, and corresponding modal for facet filters (DR-3394, DR-3396)
- Added active filters panel, `activeFilters` (DR-3367)
- Added sort component, `sortMenu` (DR-3366)
- Added search result model, mock data, card component, and card grid component (DR-3363)
- Added collection structure component (DR-3415)
- Added API wrappers for Collections and Repo API (DR-3414)

### Updated

- Updated collection search to use `q` param and added redirect for `collection_keywords` (DR-3337)
- Updated homepage collections item counts and `/collections` page to use Collections API (DR-3453)

## [0.3.2] 2025-02-13

### Added

- Added custom searchbar to handle search submit
- Added new search context and `searchManager` class, implemented on `/collections` page (DR-3365)

### Updated

- Updated 3rd party scripts with explicit loading strategies (DR-3376)

## [0.3.1] 2025-01-30

### Updated

- Updated all page accessibility tests and updated to DS v3.5.3 (DR-3342)

### Added

- Added skeleton for collection page (DR-3361)
- Added skeleton for search page and filter component (DR-3364)

### Removed

- Removed DCF middleware file so that only RP handles redirects (DR-3309)

## [0.3.0] 2025-01-23

## Updated

- Public domain link correction (DR-3378)
- Updated middleware to no longer include `/collections` and `collections/lane/:slug`
- Updated QA cluster name

## [0.2.6] 2025-01-13

### Updated

- Updated copy of sort menu for the all collections page (DR-3323)
- Updated `/collections` page to fetch data from Repo API and meet designs (DR-3100)
- Updated `/collections/lane/:slug` page to fetch data from Repo API (DR-3701)
- Cleaned up and documented logging standards for New Relic and Cloudwatch (DR-3325)

### Added

- Added "no results" view for the `/collections` page (DR-3324, DR-3357)

## [0.2.5] 2025-01-02

### Removed

- Removed unnecessary variables post reverse proxy launch
- Removed new relic files from frontend (DR-3311)

### Added

- Added tests for API helpers (DR-3271)
- Added `/healthcheck` endpoint (DR-3304)

### Updated

- Refactored implementation of default featured item & updated default number of digitized items (DR-3305)
- Update thumbnail logic so thumbnails are never restricted (DR-3293)
- Update feedback form credentials to use official DR service account (DR-2794)
- Update timeout on API request to 10 seconds (DR-3304)
- Update header to expand on scroll up on desktop (DR-3322)
- Update google-site-verification meta tag (DR-3332)
- Updated `/collections` no results logic (DR-3357)

## [0.2.4] 2024-11-26

### Updated

- Updated Next.js to `14.2.18` to patch vulnerabilities.

## [0.2.3] 2024-11-21

### Updated

- Update timeout on API request to 14 seconds

## [0.2.2] 2024-11-20

### Updated

- Update production DC_URL in appConfig.ts file

## [0.2.1] 2024-11-20

### Updated

- Update collection links to be relative

## [0.2.0] 2024-11-20

### Removed

- Remove banner that links to OG Digital Collections (DR-3263)

### Updated

- Update links on /divisions page to point to /divisions/:slug pages (DR-3142)
- Updating pagination text on division landing page
- Updating Next Image quality

## [0.1.19] 2024-11-18

### Updated

- Moved `/divisions` and `/divisions/[slug]` from behind middleware, now accessible (DR-3132, DR-3133)
- Updated collection card urls to use uuid
- Updated item card urls to use uuid
- Updated collection card urls to use legacy url
- Updated prod ECS cluster name to `new-digitalcollections-prod`

## [0.1.18] 2024-11-18

- merged into 0.1.19

## [0.1.17] 2024-11-14

### Updated

- Updated cards to use Next Image (DR-3056)
- Refactored Repo API handler with added timeout errors (DR-3251)
- Removed canonical tag to old DC (DR-3264)
- Refactored Adobe Analytics page names (DR-3257)
- Updated New Relic server configurations to its default settings to capture transactions (DR-3261)
- Updated metadata to include specific Open Graph titles (DR-3273)

### Fixed

- Fixed division titles on division landing pages (DR-3274)

## [0.1.16] 2024-10-31

### Updated

- Updated links in QA to point internally for reverse proxy (DR-3237)
- Updated how env vars are read for New Relic Browser implementation (DR-3235)
- Refactored collections/items grid into one `CardsGrid` component (DR-3193)
- Updated 500 and 404 error page designs, adding link to open feedback box (DR-3203)

## [0.1.15] 2024-10-10

### Updated

- Refactored collection/item lanes into one `Lane` component (DR-3191)
- Updated header on /divisions/:slug page to have a tabIndex of -1 (DR-3229)
- General cleanup (DR-3194)

## [0.1.14] 2024-10-03

### Updated

- Updated to DS v3.3.2 (DR-3101)
- Added general error boundary which catches 5xx/3xx/4xx errors other than 404 (DR-3175)
- Refactored collection/item cards into one `DCCard` component (DR-3192)
- Updated `/divisions` page to fetch data from Repo API (DR-3101)
- Updated `/divisions/slug` page to fetch data from Repo API (DR-3098)

## [0.1.13] 2024-09-12

### Updated

- Added `containsOnSiteMaterials` field to collection card model and component (DR-3123)
- Updated sticky header to take up less space on zoomed/mobile breakpoints (DR-3089)
- Updated sticky header to add scroll padding on anchor elements (DR-3102)
- Updated lane skeleton loader to remove visual discrepancies and no longer use hooks (DR-3171)

### Added

- Added Adobe Analytics to top level category pages, search based pages, and item pages (DR-3061)
- Added 404 page which catches nonexistent routes (DR-3168)

## [0.1.12] 2024-08-29

### Updated

- Updated swim lanes and featured item features to use server side api calls (DR-3016)

### Added

- Update middleware file to not redirect urls created for phase 2-4 in 'qa' environment (DR-3122)
- Rendered `/collections` page with preliminary search/sort (DR-3099)
- Rendered `/collections/lane/[slug]` collection lane landing page (DR-3106)
- Rendered `/divisions/[slug]` division landing page (DR-3093)
- Created item and item card models and mocks (DR-3094)
- Added `/api/changelog` endpoint (DR-3048)

## [0.1.11] 2024-08-05

### Added

- Added Github Actions deployment workflows, Travis deployment script removed (DR-3019)

## [0.1.10] 2024-08-01

### Added

- Added `/search/index` and `/collections/slug` pages (DR-3028)
- Added `/items` pages (DR-3029)
- Added strict type checking (DR-2867)

### Updated

- Updated static breadcrumbs to render correct copy (DR-3023)
- Updated `/divisions` page to render title and content (DR-3030)
- Updates card columns to new breakpoints (DR-3036)
- Create CollectionCard component and render it on the homepage, also refactor a little bit. (DR-3027)
- Moved non-page directories outside of /app folder (DR-3058)
- Update DS version to 3.2.0.

## [0.1.9] 2024-07-08

### Updated

- Migrated to Next v14 (App Router) (DR-3010, DR-3011)
- Make the entire card clickable for Collection and Explore Further cards (DR-3024)

### Added

- Added `/collections`, `/divisions`, `/divisions/[slug]`, and `/collections/lane/[slug]` pages (DR-3021)
- Added middleware to redirect unpublished pages (DR-3021)
- Added `PageLayout` component (DR-3022)
- Added Tool tip to homepage (DR-2695)

## [0.1.8] 2024-06-06

### Added

- Added HTML id elements to logo, learn more link, swim lanes images, and swim lane item counts. (DR-2885)

### Updated

- Updated version of NYPL Reservoir to 3.0.0 (DR-2924)
- Updated the hero component to use a fallback image if the original featured image returns an error (DR-2925)
- Updated hero component text line break (DR-2986)
- Updated hero skeleton loader to be shorter (DR-2800)

## [0.1.7] 2024-05-13

### Updated

- Add cluster names to readme (DR-2928)
- Update Platform and Linked Projects sections of About page (DR-2972)

## [0.1.6] 2024-04-30

### Removed

- removed caching for the featured item (DR-2944)

## [0.1.5] 2024-04-29

### Added

- Added legacy homepage image loading test script (DR-2921)
- Add a bottom border to the collapsed sticky header for screen sizes of 767 and below. (DR-2913)
- Point About page link to new About page (DR-2910)
- Add puppeteer script on legacy Digital Collections for images.nypl.org (DR-2921)
- Links updated to point to new About page (DR-2936)

### Updated

- Run homepage images tests 10x in parallel (DR-2937)
- Updated Travis file to point to new AWS clusters (DR-2943)

## [0.1.4] 2024-04-11

### Added

- Added NewRelic client-side monitoring (DR-2893)
- Added homepage featured image loading test script (DR-2915)
- Added About Page (DR-2807)
- Added Next documentation to DCF readme (DR-2868)
- Reenable underline hover state on 'Explore further' card titles (DR-2834)
- Enable GitHub Actions to run homepage swimlanes test automatically (DR-2912)
- Added homepage images loading test script (DR-2872)

### Updated

- Accessibility fixes for DC Homepage DR-2894

## [0.1.3] 2024-03-28

### Updated

- update links to legacy dc in qa to point to https://digitalcollections.nypl.org (DR-2858)
- Reenable underline hover state on 'Explore further' card titles (DR-2834)
- Use Repo API v2/items/counts endpoint in DC Facelift (DR-2824)

### Removed

- Remove extra spacing on links (DR-2833)
- Remove Wallach Prints and Photos from "Explore further" (DR-2871)

## [0.1.2] 2024-03-20

### Removed

- Remove etags

### Updated

- Update image dimensions of foreground and background images in hero component

### Fixed

- Fix typo in changelog

## [0.1.1] 2024-03-13

### Updated

- Updated favicon.ico
- Skeleton load the campaign hero (DR-2787)
- Skeleton load the swim lanes (DR-2788)
- Use Repo API v2/items/featured endpoint when loading images for hero component (DR-2801)

### Added

- Added Optinmonster embed code (DR-2744)
- Added AA Data Layer on the home page (DR-2700)
- Added feedback button and logic for form to submit to google spreadsheet (DR-2595)
- Added newrelic agent (DR-2772)
- Added canonical link (DR-2784)
- Added caching to API routes for `/api/featuredItem ` and `/api/homepage` (DR-2814)

## [0.1.0] 2024-01-08

### Created

- Created a campaign hero component and other child components for the featured item data. (DR-2464)
- Created featured content component (DSD-1566, DR-2592)

### Update

- Update version of NYPL Reservoir to 2.0.1
- Updated image in Hero Component to change on reload. (DR-2565)
- Updated number in Hero Component to use a live number in Repo API. (DR-2543)
- Updated featured item link in Hero Component to change on reload using the featured item imageID. (DR-2547)
- Updated travis deployer keys after rotation (DR-2722)
- Updated version of NYPL Reservoir to 2.1.3 (DR-2683)
- Updated travis deployer keys after rotation (DR-2722)

### Added

- Added spider block script (DR-2518)
- Created Dockerfile and docker-compose.yml files. (DR-2446)
- Created Next.js 13 app using NYPL Reservoir and TS 4.9.5. (DR-2444)
- Set up travis script to build and deploy to QA (DR-2448)
- Set up Husky precommit hooks (ESLint, Prettier) (DR-2572)
- Set up Github Actions (testing/linting) (DR-2573)
- Set up jest and jest-axe testing (DR-2571)
- Added page template to home page (DR-2574)
- Uploaded swim lane data and added swim lanes to home page (DR-2453, DR-2588)
- Added header with search (DR-2584, DR-2586, DR-2590, DR-2630)
- Added featured content component to home page (DR-2592)
- Added explore further section to home page (DR-2589)
- Added notification banner to home page (DR-2583)
- Added global footer (DR-2591)
- Add Query Param to root to test image ID in the header component ie. http://localhost:3001/?imageID=12345.
