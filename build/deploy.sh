#!/bin/bash

# Variables
IMAGE_NAME="rjaiswal127/react-app-dev"
TAG="latest"
CONTAINER_NAME="react-app"

# Pull image from Docker Hub
echo "Pulling latest image from Docker Hub..."
docker pull $IMAGE_NAME:$TAG

# Stop and remove existing container if running
echo "Stopping existing container (if any)..."
docker stop $CONTAINER_NAME || true
docker rm $CONTAINER_NAME || true

# Run the container
echo "Starting new container..."
docker run -d -p 80:80 --name $CONTAINER_NAME $IMAGE_NAME:$TAG

echo "Application deployed and accessible on port 80."

