FROM node

RUN mkdir /app
WORKDIR /app

RUN npm install ws

COPY . /app

CMD [ "node", "main.js" ]