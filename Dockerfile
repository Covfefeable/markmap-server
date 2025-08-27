FROM node:22-alpine

WORKDIR /app

COPY . .

ENV CI=true

ENV prod=true

RUN npm install -g pnpm pm2 markmap-cli

RUN npm cache add markmap-cli

RUN pnpm install && pnpm build

RUN npm config set offline true

EXPOSE 1337

CMD ["pm2-runtime", "start", "./build/app.js", "--name", "express-server"]