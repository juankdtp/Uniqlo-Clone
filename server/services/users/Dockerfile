#  based image yang digunakan
FROM node:lts-hydrogen

WORKDIR /users

ENV NODE_ENV=production
ENV PORT=4001
ENV DATABASE_URL=mongodb+srv://juankhosydtps:FLK3arxAewI03D8a@cluster0.wv495lj.mongodb.net/

COPY package.json package-lock.json /user/

RUN npm install nodemon -g
RUN npm install

COPY . .

CMD ["nodemon", "app.js"]