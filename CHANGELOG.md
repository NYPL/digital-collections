# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased
### Updated
- update links in QA to point internally for reverse proxy (DR-3237)

## [0.1.15] 2024-10-10
### Updated

- Updated 500 and 404 error page designs, adding link to open feedback box (DR-3203)
- Refactored collection/item lanes into one `Lane` component (DR-3191)
- Refactored collections/items grid into one `CardsGrid` component (DR-3193)
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
