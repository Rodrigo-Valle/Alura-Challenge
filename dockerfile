FROM node:16-alpine as build

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

## this is stage two , where the app actually runs
FROM node:16-alpine as production

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --only=production

COPY --from=build /usr/src/app/dist ./dist

EXPOSE 8000

CMD ["node","dist/index.js"]