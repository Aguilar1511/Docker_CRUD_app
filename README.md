# Docker_CRUD_app
Steps to deploy:

-  Go to github and copy this repo link https://github.com/Aguilar1511/Docker_CRUD_app.git

- Go to git bash on the local machine and do a git clone .
- Now the repository is cloned.
- Now start the docker engine on the local machine
- Now using any cli navigate to the cloned folder
- Run a docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up --build -d
- This will read the Dockerfile and the base docker-compose.yaml along with the docker-compose.dev.yaml.
- This will spin up 4 containers (microservices) in detached mode
- Now go to mongodb compass client, click on fill in connection fields manually

- Fill Port = 27016,username=shivam,password=mypasswd
- Click on connect
- Now You are inside the container instance running onexposed port 27016.
- Click on create database rms
- Create a collection customers,restaurants,orders,waiters,dishes
- From the mongoDB_scripts folders import json files into each collection
- Now the database is loaded 
- Start docker engine
- Go to vs code open the cloned folder there.
- Open terminal


DOCKER DEPLOYMENT

- Run command docker-compose -f docker-compose.yaml -f docker compose.dev.yaml up --build -d --scale=2
- Now nginx,redis,nodeapp=2,mongo containers are up and running
- Go to postman and check the responses
- localhost:3000/api
 *CRUD operations routes below
localhost:3000/api/restaurants
localhost:3000/api/restaurants/:id
localhost:3000/api/customers
localhost:3000/api/customers/:id
localhost:3000/api/v1/users/login
localhost:3000/orders/:id
localhost:3000/api/waiters
localhost:3000/api/waiters/:id
localhost:3000/api/dishes
localhost:3000/api/dishes/:id
- For checking redis user sign up hit uri localhost:3000/api/v1/users/signup
- This creates a users table in the mongo db and logs this user and its hashed password
 - It creates a session cookie as soon as the users signup

 CHECKING CACHING WITH REDIS CONTAINER
  


- Go to terminal do a docker ps
- Login to the redis container docker exec -it <container_id> bash
- Run redis-cli inside the bash
- Now go to postman
- Enter a post route     localhost:3000/api/v1/users/login and send the request
- Go back to terminal and do a KEYS * 
- You will see a session cache being created
- The session cookie is only configured for 30 secs, can be changed from app.js (note)


 NGINX LOAD BALANCING
 
- Bring down the containers, run docker-compose -f docker-compose.yaml -f   docker-compose.prod.yaml down
- Scale 2 nodeapp containers for nginx to load balance ,run docker-compose -f docker-compose.yaml -f docker compose.dev.yaml up --build -d --scale=2
- Open vs code terminal in , a terminal split screen
- Do a docker ps
- Tail logs of nodeapp1 in detached mode one terminal, and nodeapp2 in another terminal
- Now go to postman and hit localhost:3000/api multiple times
- Check the terminals , you can see ( yeah it ran ) being printed on the logs of the two nodeapp running containers


