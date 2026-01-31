FROM node:25-alpine3.23

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm i -g corepack
RUN corepack enable

RUN pnpm config set node-linker hoisted

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN pnpm install

# Copying source files
COPY . /usr/src/app

ENV PORT 3000

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "start"
