# Docker_CRUD_app

STEPS TO DEPLOY:

1. Run a git clone https://github.com/Aguilar1511/Docker_CRUD_app.git 

2. Navigate to the cloned folder

3. Run a docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up --build -d --scale nodeapp=2

4. Run docker ps

5. Check for 5 container services running

6. Open mongodb compass client,fill connection fields Port = 27016,username=shivam,password=mypasswd and click to connect.

7. Create database rms

8. Create a collection customers,restaurants,orders,waiters,dishes

9. From the mongoDB_scripts folders import json files into each collection


TESTING:

1. Nodeapp 
 *CRUD operations routes below
- GET localhost:3000/api
- GET localhost:3000/api/restaurants
- GET localhost:3000/api/restaurants/:id
- GET localhost:3000/api/customers
- GET localhost:3000/api/customers/:id
- POST localhost:3000/api/v1/users/signup
- POST localhost:3000/api/v1/users/login
- GET localhost:3000/orders/:id
- GET localhost:3000/api/waiters
- GET localhost:3000/api/waiters/:id
- GET localhost:3000/api/dishes
- GET localhost:3000/api/dishes/:id

 2. Redis caching
 
- hit uri localhost:3000/api/v1/users/signup
- This creates a users table in the mongo db and logs this user and its hashed password
- It creates a session cookie as soon as the users signup
- Run docker ps,and note the redis containerid
- Run docker exec -it <container_id> bash
- Run redis-cli ,inside the bash
- Using postman post at uri localhost:3000/api/v1/users/login (req body(json) username=shivam password=password )
- Run KEYS * 
- You will see a session cache being created.

 3. Nginx load balancing
 
- Run docker ps, note nodeapp containerids
- Run docker logs -ft <containerid> Tail logs of nodeapp1 in detached mode one terminal, and nodeapp2 in another terminal
- Using postman hit POST localhost:3000/api multiple times
- Check the terminals , you can see ( yeah it ran ) being printed on the logs of the two nodeapp running containers


