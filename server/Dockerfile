FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src

ADD ./app /src/app

ADD package.json package.json

ADD setup.sh setup.sh
RUN chmod +x setup.sh

ADD start.sh start.sh
RUN chmod +x start.sh

RUN ./setup.sh

EXPOSE 80

ENTRYPOINT ["/src/start.sh"]
