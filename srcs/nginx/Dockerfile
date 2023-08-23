FROM debian:buster

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install -y dumb-init
RUN apt-get install -y openssl nginx wget
RUN apt-get clean -y


RUN openssl req -x509 -newkey rsa:2048 -subj "/C=KR/L=SEOUL/O=1337/OU=student/CN=pooh.42" -nodes -days 365 -keyout /etc/ssl/pooh.key -out /etc/ssl/pooh.crt
RUN mkdir -p /var/log/nginx/pooh.42.fr

COPY ./conf/nginx.conf /etc/nginx/sites-enabled/default

EXPOSE 443

ENTRYPOINT [ "/usr/bin/dumb-init", "--" ]
CMD [ "nginx", "-g", "daemon off;" ]
