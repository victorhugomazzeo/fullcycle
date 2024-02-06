FROM node:15
WORKDIR /usr/src/app 

COPY ./app/package.json package.json
COPY ./app/index.js index.js
COPY ./app/package-lock.json package-lock.json

RUN npm install express && npm install mysql

EXPOSE 3000
CMD [ "node", "index.js" ]