FROM node:12.18.1

ENV MY_KEY=secret_code

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

CMD ["node", "index.js"]