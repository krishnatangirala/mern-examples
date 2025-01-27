FROM node:22 AS build

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

FROM node:22-slim

COPY --from=build /app /app
WORKDIR /app
EXPOSE 3000

CMD [ "npm", "run", "start" ]
