#! /bin/bash


apt-get update
apt-get -y install libgsf-1-dev libvips-dev libcairo2-dev libjpeg62-turbo-dev libpango1.0-dev libgif-dev build-essential g++

vips -v
find / -name vips.pc

cat /usr/lib/x86_64-linux-gnu/pkgconfig/vips.pc

npm install
