# Digital Collections App

This is the repo for the Digital Collections app (internally referred to as "DC Facelift"), using the [Reservoir](https://github.com/NYPL/nypl-design-system) design system.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of contents

### Setup and dependencies

- [Getting started with Node](#getting-started-with-node)
- [Getting started with Docker](#getting-started-with-docker)
- [Getting started with Next.js](#getting-started-with-nextjs)
- [Environment variables](#environment-variables)
- [IIIF](#iiif)
- [New Relic](#new-relic)
- [Fonts](#fonts)

### Developing

- [Testing and test scripts](#testing)
- [Linting and formatting](#linting-and-formatting)
- [Logging](#logging)

### Deploying

- [Github Actions](#github-actions)
- [Branches and AWS configuration](#branches-and-aws-configuration)
- [Git workflow](#git-workflow)
- [Versioning and naming](#release-naming-strategy)
- [Deployments](#deployments)
- [Summary of project phases](summary-of-project-phases)

## Getting started with Node

First, install dependencies:

```bash
npm install
```

Use Node version 18 or higher. If you have nvm installed on your local machine, use the following command to use Node 18.

```bash
nvm use
```

If you don't already have Node 18 installed on your machine, you can install it using:

```bash
nvm install 18
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `app/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Getting started with Docker

First, install ["Docker"](https://www.docker.com/) on your local machine.

After installing docker, cd into the app directory and run the following commands:

```bash
docker-compose build # this will build the application and install dependencies
```

```bash
docker-compose up # this will run the application
```

After running the above commands, the application should run on http://localhost:3000/

To stop the application, open a new terminal window and run:

```bash
docker-compose down # this will stop the application
```

## Docker

_Note_: This application is using Docker only for production builds and not for local development. For local development, the `npm run dev` command is the way to go.

### Building Docker Images

To build a Docker image for this application, run:

```
$ docker build -t digital-collections .
```

This command will build an image tagged (`-t`) as `digital-collections` using the current directory. Any changes to the application will require a new tagged image to be created to view those changes. Either remove the existing image (copy the image ID to use in the `docker image rm` command) and run the same command above:

```
$ docker images
REPOSITORY                  TAG       IMAGE ID       CREATED        SIZE
digital-collections         latest    73b5032a66f4   21 hours ago   1.14GB

$ docker image rm 73b5032a66f4
$ docker build -t digital-collections  .
```

Or, create a new image:

```
$ docker build -t digital-collections-2 .
```

This will be used to build and deploy images to Docker Hub in the future.

### Running a Docker Image

#### docker run

If you are using the `docker` CLI tool, use the following command to run an _existing_ image in a container called `mycontainer` locally:

```
$ docker run -d --name mycontainer -p 3000:3000 --env-file .env digital-collections
```

This will run an existing Docker image, such as the image built from the previous step, in the background. If you want to see the latest logs from the container, run `docker logs mycontainer`. If you want to see the full set of logs as the Docker image is being built and run, remove the detached `-d` flag. The `--env-file` flag configures the docker container to use the local `.env` file where your secret credentials to run the app should be located. This file is not used when building the image, only when running the container.

To stop a Docker container, run:

```
$ docker stop mycontainer
```

#### docker-compose

The application can also be used with the `docker-compose` CLI tool. This command will read the local `docker-compose.yml` file and build the container using the local `Dockerfile` file. This is similar to running both `docker build ...` and `docker run ...` except it's all encapsulated in one command. `docker-compose` is typically used to orchestrate multiple containers running together. The Digital Collections App only needs one container for Next.js but the command is still useful since you only need to remember one command.

To build and run the application, run:

```
$ docker-compose up
```

To stop and remove the container run:

```
$ docker-compose down
```

If any changes are made to the application, the image needs to be built again. Stop the container and then run the following command:

```
$ docker-compose up --build
```

If you want to stop a container but not remove it, run:

```
$ docker-compose stop
```

and the following to restart the stopped container:

```
$ docker-compose start
```

## Getting started with Next.js

Next.js is a frontend Javascript framework with server-side rendering.

### Structure and routing

This is a Next.js 14 app that uses the App Router. This is a basic example project using that structure:

```
project/
│
├── app/
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── posts/
│      ├── page.tsx
│      └── [id]
│           └── page.tsx
│
└── components/
    ├── header.tsx
    └── footer.tsx

```

Folders define routes, and paths of nested folders should end in a single "leaf": a `page.tsx` file. Dynamic routes are wrapped in brackets. For example, the route `app/blog/[slug]/page.js` would map to url `/blog/c` where the slug is `c`.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Environment variables

Use `.env.local` for local development.

### Local development

All variables should be declared in `.env.local` for local development. For local development, we don't have to worry about server and client environment variables and where they come from.

### Serverside environment variables

If a variable is required ONLY on the SERVER side (ie. in an API endpoint), then the variable can be declared in the AWS Task Definition.

SERVER side methods in Next.js read environments at RUN TIME, which means they have access to environment variables on the server - these can be found by running `env` in the bash terminal or referenced within the app as `process.env.ENV`. These variables can/should be managed in `qa` and `production` environments by updating the Task Definition and/or Cloud Formation Templates.

SERVER side references of environment variables can use `process.env.ENV`

### Clientside environment variables

If a variable is required ONLY on the CLIENT, the environment variable needs to be declared in `appConfig.ts`.

CLIENT side methods in Next.js only have access to environment variables that are declared at BUILD TIME, which means they DO NOT have access to environment variables on the server and thus do not have access to `process.env.ENV`. These variables should be managed in `qa` and `production environments` by either hard coding them in `appConfig.ts` AND/OR declaring them in the Dockerfile.

Currently, the only CLIENT side environment variable that we use is `APP_ENV`. APP_ENV drives the logic to choose between several env variables that are hard coded in `appConfig.ts`.

Example:

```
const appConfig = {
  environment: process.env.APP_ENV || "development",
  adobeEmbedUrl: {
    development:
      "https://assets.adobedtm.com/1a9376472d37/8519dfce636d/launch-bf8436264b01-development.min.js",
    qa: "https://assets.adobedtm.com/1a9376472d37/8519dfce636d/launch-bf8436264b01-development.min.js",
    production:
      "https://assets.adobedtm.com/1a9376472d37/8519dfce636d/launch-672b7e7f98ee.min.js",
  },
};
```

In the future we may want to create a /config endpoint to pass environment variables from SERVER to CLIENT.

## IIIF

For this application, we use [IIIF](https://iiif.io/) as our image server.

We have a local instance of IIIF served via [Cantaloupe](https://github.com/NYPL/cantaloupe). We will use the [IIIF Image API](https://iiif.io/api/image/2.0/) to access images with our Cantaloupe server. We currently support v2.0 and have plans to upgrade our Cantaloupe server to support v [3.0](https://iiif.io/api/image/3.0/).

## New Relic

If New Relic needs to run locally, run `npm run dev:newrelic`. You must have `NEW_RELIC_LICENSE_KEY` and `NEW_RELIC_APP_NAME` declared in `.env.local` in order for this to run successfully.

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Testing

The Digital Collections app runs unit tests with Jest and React Testing Library.

We have two groups of tests: client side components/pages have unit tests in the `jsdom` environment, and the functional tests for API endpoints are in the `node` environment. This is due to the structure of the App Router in Next.

To run all tests once:

```sh
$ npm test:all
```

To run all `jsdom` tests once:

```sh
$ npm test
```

To run all `node` (API endpoints) tests once:

```sh
$ npm test:API
```

If you want to run tests on only one specific file, run:

```sh
$ npm test -- src/[path/to/file]
```

### Test scripts

To run the homepage swimlane image loading test script against the qa environment, run

```
npm run homepageImageLoadingTestQa
```

(requires accessination with nypl-dams-dev)

To run the same test script against the production environment, run

```
npm run homepageImageLoadingTestProd
```

The test waits for the 24 swim lane images to load, including the 12 that load after scrolling, and has succeeded if it does not time out. It simulates a single user loading the homepage one time.

## Linting and formatting

The Digital Collections app will use `eslint` and `prettier` to lint and then format code on `git commit`.
You can lint your code independently of this by running:

```sh
$ npm run lint
```

## Logging

### Where do I find logs?

Serverside logs for this project's `qa` and `production` branches can be found in AWS Cloudwatch under the `nypl-dams-dev` and `nypl-dams-prod` accounts.

Clientside _errors_ can be found in New Relic under `Facelift production or Facelift QA > Browser > Errors`.

Clientside _logs_ (not necessarily errors) can be found under `Facelift production or Facelift QA > Browser > Logs`.

Serverside logs also appear in New Relic under APM Logs and general Logs (query "facelift").

For Vercel deployments, logging will appear in the console.

### How do I add logs?

We structure our logs according to these [NYPL standards](https://github.com/NYPL/engineering-general/blob/main/standards/logging.md). See `logger.js` for the formatting and storage of logs.

You SHOULD NOT use `console.log` if you want to add a _permanent_ log, and make sure to clean up your debugging `console.log`s, because they will clutter Cloudwatch.

On the server side, you SHOULD use `logger.[some NYPL log level](message: string)`.

On the client side, we already use an error boundary (`error.tsx`) to handle uncaught exceptions, which sends errors to New Relic like this:

```
useEffect(() => {
    if ((window as any).newrelic) {
      (window as any).newrelic.noticeError(error);
    }
  }, [error]);
```

If you want to add other client side _error logs_, you SHOULD use `newrelic.noticeError(message: string)` as above.

If you want to add a client side _log_ (that's not necessarily an error), you SHOULD use `newrelic.log(message: string, {level: 'debug|error|info|trace|warn'})`, for example:

```
useEffect(() => {
    if ((window as any).newrelic) {
      (window as any).newrelic.log("Test log at info level", {
        level: "info",
      });
    }
  }, []);
```

New Relic logs need to be in a `useEffect` because we have to check that New Relic is enabled in the window.

## Github Actions

All pushes to this repo will be checked with `npm test` and `npm lint`.
QA deployments are automatically triggered by pushing changes to the qa branch. qa is deployed to AWS via Github Actions.
Production deployments for this repo require a PR to the production branch. Once merged, production is deployed to AWS via Github Actions.

## Branches and AWS environments

This app is currently on a reverse proxy with ["old" Digital Collections](https://github.com/NYPL/digitalreadingroom), which is no longer being updated. The [reverse proxy repo](https://github.com/NYPL/nypl-dc-rp) configuration sets which paths are redirected to old and new (for QA and production).

Our branches (in order of stability are):

| Branch     | Environment | AWS Account    | Cluster                | Link To Application                                                                |
| :--------- | :---------- | :------------- | :--------------------- | :--------------------------------------------------------------------------------- |
| main       | development |                |                        | [localhost:3000](http://localhost:3000)                                            |
| qa         | qa          | nypl-dams-dev  | dc-frontend-qa         | [https://qa-digitalcollections.nypl.org/](https://qa-digitalcollections.nypl.org/) |
| production | production  | nypl-dams-prod | new-digitalcollections | [https://digitalcollections.nypl.org/](https://digitalcollections.nypl.org/)       |

## Git workflow

1.  Feature branches are cut from `main` using

    `git checkout -b feature/DR-123/feature-name`.

2.  Add your changes to the CHANGELOG.md file under `## [Unreleased]`. See [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) for formatting docs.
3.  Create a pull request of the `feature` branch _into_ `main`.
4.  After a feature branch has approved accessibility review and VQA, merge `feature` branch into `main`, then merge `main` branch into `qa` for testing. Merging can be done manually or with a pull request. Pushing the changes to the remote branch will automatically trigger a deployment to the `qa` environment.

    4a. If you introduced a new path in your PR, update the reverse proxy QA configuration so that it will be accessible in the `qa` environment.

5.  After QA has tested and approved cut a `release` branch off of `qa` using our Release Naming Strategy. Please see Release Naming Strategy for details on how we plan to number our releases during the initial rollout of this project.

    `git checkout -b release/x.y.z`.

    (see tagged releases or changelog for last version)

6.  Update CHANGELOG.md in release branch by moving updates from unreleased into the new release section.

    ie. `## [2.4.13] - 04-21-2023`

7.  Commit and push changes to release branch.
8.  The `production` branch is protected. When the release is ready, create a pull request to merge `release` branch to `production`. Pushing to `production` will automatically deploy to the production environment.
9.  Immediately after merging release to production, finish the release. This is done by backmerging the release to `qa` and `main` followed by creating the tags/release on github using these commands:

    `$ git tag -a x.y.z`
    `$ git push origin --tags`

    9a. If you introduced a new path in your PR, update the reverse proxy production configuration (merging the change you already made in 4a!) so it will be accessible in the `production` environment.

### Release naming strategy

This project is in the middle of its development. We will use a custom versioning system inspired by Semantic Versioning while we migrate the functionality of the digitalreadingroom app to this app. Once all of the initial phases (as defined in the [Product Brief](https://docs.google.com/document/d/187LA6VjOaDdXA6xRZYv_gqgNzJcAyuSPIZoenVH2L3w)) are complete, this repo will use [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### Versioning system

MAJOR: all phases are complete
MINOR: phase, set of features required to meet the MVP of a phase as defined in the Product Brief or TAD.
PATCH: feature or hotfix that supports a component or section of the MVP of a phase

Format: MAJOR.MINOR.PATCH

### Deployments

PR previews and `main` are all deployed to Vercel. Merges to `main` trigger automatic deployments to Vercel.

QA deployments are automatically triggered by pushing changes to the `qa` branch. `qa` is deployed to AWS [via Github Actions](https://github.com/NYPL/digital-collections/blob/production/.github/workflows/deploy_qa.yml).

Production deployments for this repo require a PR to the `production` branch. Once merged, `production` is deployed to AWS [via Github Actions](https://github.com/NYPL/digital-collections/blob/production/.github/workflows/deploy_production.yml).

### Summary of project phases

#### 1. Home Page

[TAD](https://docs.google.com/document/d/1qw9qTM-6AB-I9XQR7CH3vBa5ZmtqNxtmDhixej_7H8U/edit#heading=h.kutc298lyner)
[Designs](https://www.figma.com/file/NpjG47HqZG9GknfijGqJri/DC-Facelift-Homepage?type=design&node-id=3966-5868&mode=design&t=qHZ2TudJ2NDw13ux-0)

#### 2. Top Level Category Pages

These page types are:

- [All Divisions](https://digitalcollections.nypl.org/divisions)
- [All Collections](https://digitalcollections.nypl.org/collections)
- [Swim Lane Landing Pages](https://digitalcollections.nypl.org/collections/lane/gay-lesbian-history)

#### 3. Search-Based Pages

- Search Landing
  - [Basic with no search keywords](https://digitalcollections.nypl.org/search/index?utf8=%E2%9C%93&keywords=#) (This view is also used as the “All Items” page in site navigation)
  - [With keyword](https://digitalcollections.nypl.org/search/index?utf8=%E2%9C%93&keywords=puppy)
  - [With suggested collections](https://digitalcollections.nypl.org/search/index?utf8=%E2%9C%93&keywords=maps)
  - [No results](https://digitalcollections.nypl.org/search/index?utf8=%E2%9C%93&keywords=puppy&year_begin=1995&year_end=2020&)
- [Collection Landing Page](https://digitalcollections.nypl.org/collections/the-green-book#/?tab=navigation)

#### 4. Item Page

##### 4a. Video and Audio Page

##### 4b. Images

##### 4d. PDFs

##### 5. About Page
