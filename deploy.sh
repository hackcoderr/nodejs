#!/bin/bash

# Get the commit ID
COMMIT_ID=$(git rev-parse HEAD)

# Update the image tag in the docker-compose file
sed -i "s/latest/$COMMIT_ID/g" nodejs/docker-compose.yaml

# Deploy the application
docker-compose -f nodejs/docker-compose.yaml up -d
