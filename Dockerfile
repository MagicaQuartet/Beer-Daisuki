FROM node:12.18.3
LABEL maintainer="dev.dskim@gmail.com"

RUN apt-get update && apt-get -y install
RUN npm install -g @vue/cli @vue/cli-service-global
COPY . /app/
WORKDIR /app/frontend/
RUN npm install
RUN npm run build
WORKDIR /app/backend/
RUN npm install
