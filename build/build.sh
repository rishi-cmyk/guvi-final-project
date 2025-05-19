#!/bin/bash

# Stop on first error
set -e

echo "Logging into Docker Hub..."
docker login

echo "Building Docker image..."
docker build -f build/Dockerfile -t rjaiswal127/react-app-prod:latest .

echo "Pushing Docker image to Docker Hub..."
docker push rjaiswal127/react-app-prod:latest

echo "Build and push completed successfully."

