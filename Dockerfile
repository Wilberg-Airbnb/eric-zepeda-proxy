FROM node:11

WORKDIR /proxyapp/

COPY package*.json /proxyapp/

RUN npm install
COPY . /proxyapp