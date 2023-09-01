FROM node:20

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN npm i

RUN npm run build

CMD ["npm", "start", "--", "--port", "3001"]

EXPOSE 3001
