FROM node:22.23-alpine as production

#RUN apt-get update
#RUN apt-get upgrade -y

WORKDIR /app

# Install dependencies.
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy the app files.
COPY . .

# Set environment variables. NODE_ENV is set early because we
# want to use it when running `npm install` and `npm run build`.
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV=production

# Build the app!
RUN npm run build

# Explicitly set port 3000 as open to requests.
EXPOSE 3000

# CMD is the default command when running the docker container.
CMD [ "npm", "run", "start:newrelic" ]
