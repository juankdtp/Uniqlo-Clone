#  based image yang digunakan
FROM node:lts-hydrogen

WORKDIR /users

ENV NODE_ENV=production
ENV PORT=4001

# COPY package.json package-lock.json /user/
COPY package.json .

RUN npm install nodemon -g
# RUN npm install
RUN npm install --production

COPY . .

EXPOSE 4001

CMD ["nodemon", "app.js"]