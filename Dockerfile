FROM node:alpine

WORKDIR / yourapplication
COPY package.json .
RUN npm instal
COPY . .

CMD ["npm", "run", "dev"]