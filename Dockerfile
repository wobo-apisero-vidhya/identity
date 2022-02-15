# Pull required docker image
FROM node:current-alpine3.15

# Create a working directory
RUN mkdir -p /identityService

WORKDIR /identityService

# Add package file
COPY package*.json ./
COPY tsconfig.json ./
COPY .env ./

# Install dependencies
RUN npm install

# Copy source
COPY . ./

# Start app
CMD npm run start