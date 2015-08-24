#! /bin/bash

curl -H "Content-Type: application/json" -X POST -d '{"url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tugboat_MS_HEMIKSEM.jpg/713px-Tugboat_MS_HEMIKSEM.jpg"}' http://dockerhost/
