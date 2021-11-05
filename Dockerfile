# Before using caching

# FROM node:latest
# WORKDIR /app
# ADD . . 
# RUN npm install
# CMD node index.js


#After using caching

FROM node:alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD node index.js
