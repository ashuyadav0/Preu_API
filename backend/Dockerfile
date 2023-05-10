FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install -g @nestjs/cli

RUN npm install

COPY . .

RUN nest build

CMD ["node", "dist/main.js"]