# DC Facelift Environment Variables

## Table of Contents

- [General Information](#general-information)
- [Application Variables](#application-variables)

## General Information

Environment variables are used in this code repository to control how the application builds, how and where data is fetched for separate sections in the application, for rendering certain features, and for controlling data flow.

General environment variables are declared in the `.env.example` file. A copy of this file should be made and saved as `.env.local` where real values should be added.

Generally, environment variables are meant to be read through the `process.env` object _on the server_. Variables intended for use on the client side should be prefaced with NEXT*PUBLIC* per Next's [docs](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables).

If an environment variable is updated, make sure to restart the server for the application to pick up the new value.

## Application Variables

These environment variables control how certain elements on the page render and where to fetch data.

| Variable                        | Type   | Value Example                                                               | Description                                                                                                                                                     |
| ------------------------------- | ------ | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `APP_ENV`                       | string | "development"                                                               | App environment key used to determine various environment-specific app settings. Set as a Github repo secret, used in Github action workflow (deploy QA, prod). |
| `API_URL`                       | string | "https://api.repo.nypl.org" or "https://qa.api.repo.nypl.org"               | Base url for Repo API.                                                                                                                                          |
| `AUTH_TOKEN`                    | string | ""                                                                          | Auth token for Repo API. Set as a Github repo secret, used in Github action workflows (deploy QA, prod).                                                        |
| `COLLECTIONS_API_URL`           | string | "https://qa-api-collections.nypl.org" or "https://api-collections.nypl.org" | Base url for Collections API.                                                                                                                                   |
| `COLLECTIONS_API_AUTH_TOKEN`    | string | ""                                                                          | Auth token for Collections API. Set as a Github repo secret, used in Github action workflow (deploy prod).                                                      |
| `QA_COLLECTIONS_API_AUTH_TOKEN` | string | ""                                                                          | Auth token for QA Collections API. Set as a Github repo secret, used in Github action workflow (deploy QA).                                                     |
| `ADOBE_EMBED_URL`               | string | ""                                                                          | Url endpoint used for Adobe Analytics event tracking.                                                                                                           |
| `GOOGLE_SHEETS_CLIENT_EMAIL`    | string | ""                                                                          |                                                                                                                                                                 |
| `GOOGLE_SHEETS_PRIVATE_KEY`     | string | ""                                                                          |                                                                                                                                                                 |
| `SPREADSHEET_ID`                | string | ""                                                                          |                                                                                                                                                                 |
| `NEW_RELIC_LICENSE_KEY`         | string | "true"                                                                      | Auth for New Relic. Set as a Github repo secret, used in Github action workflows (deploy QA, prod).                                                             |

## New Relic Variables

The following variables are needed in the global env var scope in order for New
Relic to pick up the values, specifically in the `newrelic.js` file.

These env vars are not picked up by default in Next.js' `.env.local` file. In order for this to work, the `dotenv` package is used to declare these env vars when running either `npm run dev:newrelic` or `npm run start:newrelic`.

| Variable                | Type   | Value Example | Description                                        |
| ----------------------- | ------ | ------------- | -------------------------------------------------- |
| `NEW_RELIC_LICENSE_KEY` | string | "true"        | Private license key. Available in parameter store. |
| `NEW_RELIC_APP_NAME`    | string | "Facelift QA" |                                                    |
