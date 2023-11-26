FROM node:lts-hydrogen

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4002


# COPY package.json package-lock.json /app/
COPY package.json .

# RUN npm install && npm cache clean --force
RUN npm install --production

RUN npm install -g nodemon

# COPY ./ ./
COPY . .

EXPOSE 4002

# CMD ["npm", "run", "start"]
CMD ["nodemon", "app.js"]