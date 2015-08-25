#! /bin/bash

npm install

echo "./"
ls -la ./
echo "./app/"
ls -la ./app/

echo "ASCII Sheep"

cd /src/app/sheep/

node ./sheep.js

cd ../

ls

nodemon -L app.js
