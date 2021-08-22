FROM node:alpine

RUN apk add --no-cache bash

RUN mkdir -p /usr/src/sales-api

WORKDIR /usr/src/sales-api

EXPOSE 3333
