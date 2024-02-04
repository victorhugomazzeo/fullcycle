FROM node
WORKDIR /usr/src/app 
COPY *.js .

RUN npm install express 7 && npm install mysql
EXPOSE 3000

ENTRYPOINT ["node", "index.js"]