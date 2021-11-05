# docker-tutorial

This repo contains a simple node/express api, a docker file to use for creating an image for the api



## Technology
- Ubuntu 20.04.3 LTS
- Docker version 20.10.9

## Commands

To bulid our image:
```
docker build --tag {image name e.g user-service-api:latest} .

```

To run our container:

```
docker run --name {container name e.g user-api} -d -p 3000:3000 {image name created using the line of code above e.g user-service-api}
```

## Base image source
https://hub.docker.com/search?type=image&image_filter=official


Reduced size images: Alpine distribution



