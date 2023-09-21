FROM node:18-alpine AS production

#RUN apt-get update
#RUN apt-get upgrade -y

ARG NYPL_HEADER_URL

WORKDIR /app


# Set environment variables. NODE_ENV is set early because we
# want to use it when running `npm install` and `npm run build`.
ENV PATH /app/node_modules/.bin:$PATH 
# \
#     NODE_ENV=production

# Set the timezone
# ENV TZ=America/New_York
# RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install dependencies.
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy the app files.
COPY . .

ENV NYPL_HEADER_URL=${NYPL_HEADER_URL}

# Build the app!
RUN npm run build

# Explicitly set port 3000 as open to requests.
EXPOSE 3000

# CMD is the default command when running the docker container.
CMD [ "npm", "start" ]