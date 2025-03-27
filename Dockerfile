FROM node:18-alpine AS production

#RUN apt-get update
#RUN apt-get upgrade -y

ARG APP_ENV
ARG NEW_RELIC_LICENSE_KEY
ARG AUTH_TOKEN
ARG API_URL
ARG COLLECTIONS_API_URL

WORKDIR /app

# Install dependencies.
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy the app files.
COPY . .

ENV APP_ENV=${APP_ENV}
ENV NEW_RELIC_LICENSE_KEY=${NEW_RELIC_LICENSE_KEY}
ENV NEW_RELIC_APP_NAME="Facelift ${APP_ENV}"
ENV API_URL=${API_URL}
ENV AUTH_TOKEN=${AUTH_TOKEN}
ENV COLLECTIONS_API_URL=${COLLECTIONS_API_URL}

# Create a `.env.prod` file with the environment variables
# This is a workaround to use environment variables in the `newrelic.js` file
RUN echo "NEW_RELIC_LICENSE_KEY=${NEW_RELIC_LICENSE_KEY}" >> /etc/.env.prod
RUN echo "NEW_RELIC_APP_NAME=${NEW_RELIC_APP_NAME}" >> /etc/.env.prod

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