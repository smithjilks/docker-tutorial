# docker-tutorial

This repo contains a simple node/express api, a docker file to use for creating an image for the api



## technology
Ubuntu 20.04.3 LTS
Docker version 20.10.9

## commands
```
docker build --tag {image name e.g user-service-api:latest} .

docker run --name {container name e.g user-api} -d -p 3000:3000 {image name created using the line of code above e.g user-service-api}
```

## base image source
https://hub.docker.com/search?type=image&image_filter=official


Reduced size images: Alpine distribution



