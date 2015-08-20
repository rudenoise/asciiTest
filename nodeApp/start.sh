#! /bin/bash

echo "ASCII Sheep"

cd app/sheep/

node sheep.js

cd ../

ls

nodemon -L app.js
