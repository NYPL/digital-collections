# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

- Remove etags
- Update image dimensions of foreground and background images in hero component
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
- Added caching to API routes for `/api/featuredItem ` and `/api/homepage` as well as from the client side (DR-2814)

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
