FROM node:16

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Installing dependencies
COPY package*.json /app/
RUN npm install

# Copying source files
COPY . /app

# Building app
RUN npm run build
EXPOSE 8080

# Running the app
CMD "npm" "run" "start"