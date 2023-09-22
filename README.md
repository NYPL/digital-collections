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

This command will build an image tagged (`-t`) as `digital-collections-app` using the current directory. Any changes to the application will require a new tagged image to be created to view those changes. Either remove the existing image (copy the image ID to use in the `docker image rm` command) and run the same command above:

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