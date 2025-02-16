FROM node:14

WORKDIR /usr/src/app

COPY backend/package*.json ./

RUN npm install

COPY backend/src ./src

EXPOSE 3000

CMD ["node", "src/app.js"]