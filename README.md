# How to use

I strongly recommend use [Docker](https://www.docker.com) in order to have the same version as is intended.


The project have a `docker-compose.yml` file which is the file to manage the dependencies for this project.


In order to work with it you can use:

* `docker-compose up -d` will start all the dependencies
* `docker-compose exec {service_name} {command}` which will `run` a `command` in a specific `service`.
* `docker-compose down` will delete the containers
* `docker-compose stop` will stop the containers.

# Dependencies

* Node (With Typescript)
* Mysql


# Env Var

The `env` var is located in the folder `env`, both examples are already filled up, just need to copy and pasted in the same place.
