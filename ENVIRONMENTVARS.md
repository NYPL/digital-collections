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

| Variable                     | Type   | Value Example                                                                         | Description                                                                      |
| ---------------------------- | ------ | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `APP_ENV`                    | string | "development"                                                                         | App environment key used to determine various environment-specific app settings. |
| `DC_URL`                     | string | "" or "https://qa-digitalcollections.nypl.org" or https://digitalcollections.nypl.org | The base URL of the DC url, either points locally or externally to legacy DC.    |
| `API_URL`                    | string | "https://api.repo.nypl.org" or "https://qa.api.repo.nypl.org"                         | base url for Repo API calls.                                                     |
| `AUTH_TOKEN`                 | string | ""                                                                                    | Auth token for Repo API.                                                         |
| `ADOBE_EMBED_URL`            | string | ""                                                                                    | Url endpoint used for Adobe Analytics event tracking.                            |
| `GOOGLE_SHEETS_CLIENT_EMAIL` | string | ""                                                                                    |                                                                                  |
| `GOOGLE_SHEETS_PRIVATE_KEY`  | string | ""                                                                                    |                                                                                  |
| `SPREADSHEET_ID`             | string | ""                                                                                    |                                                                                  |
| `NEW_RELIC_LICENSE_KEY`      | string | "true"                                                                                |                                                                                  |
