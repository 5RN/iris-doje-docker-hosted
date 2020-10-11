# IRIS-DOJE-DOCKER-HOSTED

## Prerequisites
Make sure you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Docker desktop](https://www.docker.com/products/docker-desktop) installed.

## Installation 

Clone/git pull the repo into any local directory

```
$ git clone https://github.com/5RN/iris-doje-docker-hosted.git
```

Open the terminal in this directory and run:

```
$ docker-compose build --no-cache
```

Run Angular front-end inside IRIS backend container in a single project:

```
$ docker-compose up -d
```

Once the container is up and running, go to http://localhost:9092/csp/doje/HomePage.html -> Forms -> Freedom of Information form -> Freedom of Information Act 2014 form or directly to the [Angular UI](http://localhost:9092/csp/doje/index.html)


IRIS backend will provide the REST endpoint to serve the angular frontend.
