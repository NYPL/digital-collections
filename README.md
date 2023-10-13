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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

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

| Value       | Description                                      
|:------------|:-------------|
| full        | the complete image is returned, without any cropping.        |                                               
| square      | the region is defined as an area where the width and height are both equal to the length of the shorter dimension of the complete image. The region may be positioned anywhere in the longer dimension of the image content at the server’s discretion, and centered is often a reasonable default.                                        
| x,y,w,h     | The region of the full image to be returned is specified in terms of absolute pixel values. The value of x represents the number of pixels from the 0 position on the horizontal axis. The value of y represents the number of pixels from the 0 position on the vertical axis. Thus the x,y position 0,0 is the upper left-most pixel of the image. w represents the width of the region and h represents the height of the region in pixels.
| pct:x,y,w,h | The region to be returned is specified as a sequence of percentages of the full image’s dimensions,as reported in the image information document. Thus, x represents the number of pixels from the 0 position on the horizontal axis, calculated as a percentage of the reported width. w represents the width of the region, also calculated as a percentage of the reported width. The same applies to y and h respectively. These may be floating point numbers.

If the request specifies a region which extends beyond the dimensions reported in the image information document, then the service should return an image cropped at the image’s edge, rather than adding empty space.

If the requested region’s height or width is zero, or if the region is entirely outside the bounds of the reported dimensions, then the server should return a 400 status code.


If the request specifies a region which extends beyond the dimensions reported in the image information document, then the service should return an image cropped at the image’s edge, rather than adding empty space.

If the requested region’s height or width is zero, or if the region is entirely outside the bounds of the reported dimensions, then the server should return a 400 status code.                 

#### SIZE 
The size parameter determines the dimensions to which the extracted region is to be scaled.

| Value     | Description                                      
|:-----------|:------------|
| full       | The image or region is not scaled, and is returned at its full size. Note deprecation warning.                                            
| max    | The image or region is returned at the maximum size available, as indicated by maxWidth, maxHeight, maxArea in the profile description. This is the same as full if none of these properties are provided.
| w,        | The image or region should be scaled so that its width is exactly equal to w, and the height will be a calculated value that maintains the aspect ratio of the extracted region.
| ,h | The image or region should be scaled so that its height is exactly equal to h, and the width will be a calculated value that maintains the aspect ratio of the extracted region.
| pct:n | The width and height of the returned image is scaled to n% of the width and height of the extracted region. The aspect ratio of the returned image is the same as that of the extracted region.
| w,h | The width and height of the returned image are exactly w and h. The aspect ratio of the returned image may be different than the extracted region, resulting in a distorted image.
| !w,h | The image content is scaled for the best fit such that the resulting width and height are less than or equal to the requested width and height. The exact scaling may be determined by the service provider, based on characteristics including image quality and system performance. The dimensions of the returned image content are calculated to maintain the aspect ratio of the extracted region.

If the resulting height or width is zero, then the server should return a 400 (bad request) status code.
The image server may support scaling above the full size of the extracted region.

Deprecation Warning: The size keyword `full` will be replaced in favor of `max` in version 3.0. Until that time, 
the `w,` syntax should be considered the canonical form of request for the `max` size, unless `max` is equivalent to `full`. 

Feedback is welcome via iiif-discuss or on the Github issue.

####  ROTATION
The rotation parameter specifies mirroring and rotation. 
A leading exclamation mark (“!”) indicates that the image should be mirrored by reflection on the vertical axis
before any rotation is applied. 
The numerical value represents the number of degrees of clockwise rotation, and may be any floating point number from 0 to 360.
  
| Value | Description
|:-----------|:------------|
| n | The degrees of clockwise rotation from 0 up to 360.
| !n | The image should be mirrored and then rotated as above.
  
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
