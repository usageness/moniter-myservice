# Base image
FROM node:current

# Create and set the working directory
WORKDIR /app

# Copy over the package.json and yarn.lock files to install dependencies
COPY package.json yarn.lock ./

# Set Yarn version to Berry
RUN yarn set version berry

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy over the application code
COPY . .

# Build the application
RUN yarn run build:prod

# Expose the port
EXPOSE 8080

# Start the application
CMD [ "yarn", "start:prod" ]