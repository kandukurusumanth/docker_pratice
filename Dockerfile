FROM node
WORKDIR /app/server
COPY . .
RUN npm ci
CMD [ "npm","start"]