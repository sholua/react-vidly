# Multi container application
Make sure that docker and docker-compose are installed on your computer

## Development flow
Run frontend and backend servers with command:

Run app in containers:
```bash
docker-compose up -d
```

Run app in containers and rebuild images:
```bash
docker-compose up -d --build
```
### Request in development
**frontend** http://localhost:3000
**backend** http://localhost:3000/api/

## Production flow
```bash
docker-compose -f docker-compose.yml up -d --build
```
### Request in production
**frontend** your_domain (on port 80)
**backend** your_domain/api/

## Build and push docker images to Dockerhub
We can build and push client and server images do dockerhub and use them with Kubernetes cluster.

```bash
docker build -t shol/multi-client ./client
docker build -t shol/multi-nginx ./nginx
docker build -t shol/multi-server ./server

docker push shol/multi-client
docker push shol/multi-nginx
docker push shol/multi-server
```
