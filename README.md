# Digital Collections App

This is the Repo for the Digital Collections app using the DS (internally referred to as "DC Facelift")

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started With Node

First, install Dependencies:

```bash
npm install
```

Use node version 18 or higher. If you have nvm installed on your local machine, use the following command to use node 18.

```bash
nvm use
```

If you don't already have node 18 installed on your machine, you can install it using:

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

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Environment Variables

A quick note on environment variables

Use `.env.local` for local development.

### Local development

All variables should be declared in `.env.local` for local development. For local development, we don't have to worry about Server and Client env vars and where they come from.

### QA/Production environments

#### Server Side Environment Variables

If a variable is required ONLY on the SERVER side (ie. in an api endpoint), then the variable can be declared in the AWS Task Definition.

SERVER side methods in Next.js read environments at RUN TIME, which means they have access to environment variables on the server - these can be found by running `env` in the bash terminal or referenced within the app as `process.env.ENV`. These variables can/should be managed in QA and Production environments by updating the Task Definition and/or Cloud Formation Templates.

SERVER side references of environment variables can use `process.env.ENV`

#### Client Side Environment Variables

If a variable is required ONLY on the CLIENT, the environment variable needs to be declared in `appConfig.ts`.

CLIENT side methods in Next.js only have access to environment variables that are declared at BUILD TIME, which means they DO NOT have access to environment variables on the server and thus do not have access to `process.env.ENV`. These variables should be managed in QA and Production environments by either hard coding them in `appConfig.ts` AND/OR declaring them in the Dockerfile and travis.yml.

Currently, the only CLIENT side environment variable that we use is `APP_ENV`. APP_ENV drives the logic to choose between several env variables that are hard coded in `appConfig.ts`.

Example:

```
const appConfig = {
  environment: process.env.APP_ENV || "development",
  DC_URL: {
    development: "https://qa-digitalcollections.nypl.org",
    qa: "https://qa-digitalcollections.nypl.org",
    production: "https://digitalcollections.nypl.org",
  },
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

### Swim Lanes API Endpoints

The following endpoints are currently available at http://localhost:3000/api/lanes/

- [/books-and-periodicals](http://localhost:3000/api/lanes/books-and-periodicals)
- [/fliers-and-ephemera](http://localhost:3000/api/lanes/fliers-and-ephemera)
- [/manuscripts-and-correspondence](http://localhost:3000/api/lanes/manuscripts-and-correspondence)
- [/maps](http://localhost:3000/api/lanes/maps)
- [/photographs](http://localhost:3000/api/lanes/photographs)
- [/prints-and-drawings](http://localhost:3000/api/lanes/prints-and-drawings)
- [/recently-digitized-collections](http://localhost:3000/api/lanes/recently-digitized-collections)

### Individual Lane - GET /api/lanes/[...slug]

---

#### Query Parameter\*\*

\*\* Note: What would usually be a query parameter is really a route parameter with Next.js, so in Next `api/lanes/example`
is equivalent to `api/lanes/?slug=example`.

| type   | required | note                         |
| ------ | -------- | ---------------------------- |
| string | yes      | Slugified title of swim lane |

Example:

```sh
api/lanes/books-and-periodicals
```

Returns respective JSON for that lane.

### All Lanes - GET /api/lanes

---

Returns JSON containing all lanes.

### Featured Items - GET /api/featuredItems

---

Returns JSON containing all featured items' image data.

#### Note for future

These endpoints will change (as DC homepage is built out) to be dynamically generated from another source instead of getting static data.

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tests

To run tests, run

```
npm run test
```

## Getting Started With Docker

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Vercel

We use Vercel for internal purposes. Pull requests get deployed via Vercel for VQA and accessibility review. We do not formally deploy the app to qa and production using Vercel. We use Travis for this instead.

If you need access to the instance, please contact someone from the NYPL team.

## IIIF

For this application, we will be using [IIIF](https://iiif.io/) as our image server.

We have a local instance of IIIF Served via [Cantaloupe](https://github.com/NYPL/cantaloupe). We will use the [IIIF Image API](https://iiif.io/api/image/2.0/) to access images with our Cantaloupe server. We currently support v2.0 and have plans to upgrade our Cantaloupe server to support v [3.0](https://iiif.io/api/image/3.0/).

### IIIF Image API Parameters

#### REGION

The region parameter defines the rectangular portion of the full image to be returned. Region can be specified by pixel coordinates, percentage or by the value “full”, which specifies that the entire image should be returned.

| Value       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| full        | the complete image is returned, without any cropping.                                                                                                                                                                                                                                                                                                                                                                                                               |
| square      | the region is defined as an area where the width and height are both equal to the length of the shorter dimension of the complete image. The region may be positioned anywhere in the longer dimension of the image content at the server’s discretion, and centered is often a reasonable default.                                                                                                                                                                 |
| x,y,w,h     | The region of the full image to be returned is specified in terms of absolute pixel values. The value of x represents the number of pixels from the 0 position on the horizontal axis. The value of y represents the number of pixels from the 0 position on the vertical axis. Thus the x,y position 0,0 is the upper left-most pixel of the image. w represents the width of the region and h represents the height of the region in pixels.                      |
| pct:x,y,w,h | The region to be returned is specified as a sequence of percentages of the full image’s dimensions,as reported in the image information document. Thus, x represents the number of pixels from the 0 position on the horizontal axis, calculated as a percentage of the reported width. w represents the width of the region, also calculated as a percentage of the reported width. The same applies to y and h respectively. These may be floating point numbers. |

If the request specifies a region which extends beyond the dimensions reported in the image information document, then the service should return an image cropped at the image’s edge, rather than adding empty space.

If the requested region’s height or width is zero, or if the region is entirely outside the bounds of the reported dimensions, then the server should return a 400 status code.

If the request specifies a region which extends beyond the dimensions reported in the image information document, then the service should return an image cropped at the image’s edge, rather than adding empty space.

If the requested region’s height or width is zero, or if the region is entirely outside the bounds of the reported dimensions, then the server should return a 400 status code.

#### SIZE

The size parameter determines the dimensions to which the extracted region is to be scaled.

| Value | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| full  | The image or region is not scaled, and is returned at its full size. Note deprecation warning.                                                                                                                                                                                                                                                                                                          |
| max   | The image or region is returned at the maximum size available, as indicated by maxWidth, maxHeight, maxArea in the profile description. This is the same as full if none of these properties are provided.                                                                                                                                                                                              |
| w,    | The image or region should be scaled so that its width is exactly equal to w, and the height will be a calculated value that maintains the aspect ratio of the extracted region.                                                                                                                                                                                                                        |
| ,h    | The image or region should be scaled so that its height is exactly equal to h, and the width will be a calculated value that maintains the aspect ratio of the extracted region.                                                                                                                                                                                                                        |
| pct:n | The width and height of the returned image is scaled to n% of the width and height of the extracted region. The aspect ratio of the returned image is the same as that of the extracted region.                                                                                                                                                                                                         |
| w,h   | The width and height of the returned image are exactly w and h. The aspect ratio of the returned image may be different than the extracted region, resulting in a distorted image.                                                                                                                                                                                                                      |
| !w,h  | The image content is scaled for the best fit such that the resulting width and height are less than or equal to the requested width and height. The exact scaling may be determined by the service provider, based on characteristics including image quality and system performance. The dimensions of the returned image content are calculated to maintain the aspect ratio of the extracted region. |

If the resulting height or width is zero, then the server should return a 400 (bad request) status code.
The image server may support scaling above the full size of the extracted region.

Deprecation Warning: The size keyword `full` will be replaced in favor of `max` in version 3.0. Until that time,
the `w,` syntax should be considered the canonical form of request for the `max` size, unless `max` is equivalent to `full`.

Feedback is welcome via iiif-discuss or on the Github issue.

#### ROTATION

The rotation parameter specifies mirroring and rotation.
A leading exclamation mark (“!”) indicates that the image should be mirrored by reflection on the vertical axis
before any rotation is applied.
The numerical value represents the number of degrees of clockwise rotation, and may be any floating point number from 0 to 360.

| Value | Description                                             |
| :---- | :------------------------------------------------------ |
| n     | The degrees of clockwise rotation from 0 up to 360.     |
| !n    | The image should be mirrored and then rotated as above. |

A rotation value that is out of range or unsupported should result in a 400 status code.

In most cases a rotation will change the width and height dimensions of the returned image.

The service should return an image that contains all of the image contents requested in the
region and size parameters, even if the dimensions of the returned image file are different
than specified in the size parameter.

The image contents should not be scaled as a result of the rotation, and there should be no
additional space between the corners of the rotated image contents and the bounding box of the returned image content.

For rotations which are not multiples of 90 degrees, it is recommended that the client request the image in a format
that supports transparency, such as PNG, and that the server return the image with a transparent background.
There is no facility in the API for the client to request a particular background color or other fill pattern.

### Other IIIF Notes

#### Order of operations:

Region THEN Size THEN Rotation THEN Quality THEN Format

Note: Do not need to worry about Quality or Format for this application.

## Testing

The Digital Collections app runs unit tests with Jest and React Testing Library.

To run all tests once:

```sh
$ npm test
```

If you're actively writing or updating tests, you can run the tests in watch mode. This will wait for any changes and run when a file is saved:

```sh
$ npm run test:watch
```

If you want to run tests on only one specific file, run:

```sh
$ npm test -- src/[path/to/file]
```

## Linting and Formatting

The Digital Collections app will use `eslint` and `prettier` to lint and then format code on `git commit`.
You can lint your code independently of this by running:

```sh
$ npm run lint
```

## Github Actions

All pushes to this repo will be checked with `npm test` and `npm lint`.

## Git Workflow

Our branches (in order of stability are):

| Branch     | Environment | AWS Account    | Link To Application                                                                        |
| :--------- | :---------- | :------------- | :----------------------------------------------------------------------------------------- |
| main       | development |                | [localhost:3000](http://localhost:3000)                                                    |
| qa         | qa          | nypl-dams-dev  | [https://qa-new-digitalcollections.nypl.org/](https://qa-new-digitalcollections.nypl.org/) |
| production | production  | nypl-dams-prod | [https://new-digitalcollections.nypl.org/](https://new-digitalcollections.nypl.org/)       |

## Contributing

1.  Feature branches are cut from `main` using

    `git checkout -b feature/DR-123/feature-name`.

2.  Add your changes to the CHANGELOG.md file under `## [Unreleased]`. See [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) for formatting docs.
3.  Create a pull request of the `feature` branch _into_ `main`.
4.  After a feature branch has approved accessibility review and VQA, merge `feature` branch into `main`, then merge `main` branch into `qa` for testing. Merging can be done manually or with a pull request. Pushing the changes to the remote branch will automatically trigger a deployment to the `qa` environment via Travis.
5.  After QA has tested and approved cut a `release` branch off of `qa` using our Release Naming Strategy. Please see Release Naming Strategy for details on how we plan to number our releases during the initial rollout of this project.

`git checkout -b release/x.y.z`.

(see tagged releases or changelog for last version)

6. Update CHANGELOG.md in release branch by moving updates from unreleased into the new release section.

   ie. `## [2.4.13] - 04-21-2023`

7. Commit and push changes to release branch.
8. The `production` branch is protected. When the release is ready, create a pull request to merge `release` branch to `production`/ Merging in the release will deploy through Travis.
9. Immediately after merging release to production, finish the release. This is done by backmerging the release to `qa` and `main` followed by creating the tags/release on github using these commands:

   `$ git tag -a x.y.z`
   `$ git push origin --tags`

### Release Naming Strategy

This project is in the beginning phases of its development. We will use a custom versioning system inspired by Semantic Versioning while we migrate the functionality of the digitalreadingroom app to this app. Once all of the initial Phase (as defined in the [Product Brief](https://docs.google.com/document/d/187LA6VjOaDdXA6xRZYv_gqgNzJcAyuSPIZoenVH2L3w)) is complete, this repo will use [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### Versioning system:

MAJOR: all of the Phases are complete
MINOR: phase, set of features required to meet the mvp of a Phase as defined in the Product Brief or TAD.
PATCH: feature or hotfix that supports a component or section of the mvp of a Phase

Format: MAJOR.MINOR.PATCH

### Summary of Phases (to be removed later?)

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

## Deployment

Deployment:
PR previews and `main` are all deployed to Vercel. Merges to `main` trigger automatic deployments to Vercel.

QA deployments are automatically triggered by pushing changes to the `qa` branch. `qa` is deployed to AWS [Via Travis](https://travis-ci.com/github/NYPL).

Production deployments for this repo require a PR to the `production` branch. Once merged, `production` is deployed to AWS [Via Travis](https://travis-ci.com/github/NYPL).
 