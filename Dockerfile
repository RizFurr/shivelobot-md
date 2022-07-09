FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install
RUN npm install pm2 -g
ENV //masukin public key pm2.io kalian
ENV //masukin secret key pm2.io kalian

COPY . .

EXPOSE 5000

CMD ["pm2-runtime", "main.js"]
