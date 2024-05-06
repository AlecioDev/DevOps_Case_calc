FROM node:14.17.3-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g ngrok

COPY . ./

RUN npm run build
 
EXPOSE 3000

CMD ["npx", "ngrok", "http", "3000"]

