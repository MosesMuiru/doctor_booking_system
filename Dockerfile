FROM node:21-alpine as build 

WORKDIR /app

COPY package*.json .

RUN npm install

COPY ./ .

RUN npm run build


CMD ["npm", "run", "dev"] 


