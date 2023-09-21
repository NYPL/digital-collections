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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Vercel

We use Vercel for internal purposes. Pull requests get deployed via Vercel for VQA and accessibility review. We do not formally deploy the app to qa and production using Vercel. We use Travis for this instead. 

If you need access to the instance, please contact someone from the NYPL team. 