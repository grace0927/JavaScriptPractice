# Set the base image
FROM node

# File Author / Maintainer
MAINTAINER Jianyu Feng

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install

# Expose ports
EXPOSE 8080
CMD [ "npm", "start" ]
