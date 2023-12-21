# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Created

- Created a campaign hero component and other child components for the featured item data. (DR-2464)

### Update

- Update version of NYPL Reservoir to 2.0.1
- Updated image in Hero Component to change on reload. (DR-2565)
- Updated number in Hero Component to use a live number in Repo API. (DR-2543)
- Updated featured item link in Hero Component to change on reload using the featured item imageID. (DR-2547)

### Added

- Added feedback button and logic for form to submit to google spreadsheet (DR-2595)
- Added spider block script (DR-2518)
- Created Dockerfile and docker-compose.yml files. (DR-2446)
- Created Next.js 13 app using NYPL Reservoir and TS 4.9.5. (DR-2444)
- Set up travis script to build and deploy to QA (DR-2448)
- Add Query Param to root to test image ID in the header component ie. http://localhost:3001/?imageID=12345.
