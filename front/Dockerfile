FROM ubuntu
MAINTAINER litleleprikon <litleleprikon@gmail.com>

ADD ./build /var/www/ds_chat

RUN apt-get update && apt-get install nginx -y; \
	echo "\ndaemon off;" >> /etc/nginx/nginx.conf; \
	ln -sf /dev/stdout /var/log/nginx/access.log; \
	ln -sf /dev/stderr /var/log/nginx/error.log; \
	chown -R www-data:www-data /var/www; \
	rm /etc/nginx/sites-enabled/default

ADD ./ds_chat.conf /etc/nginx/sites-enabled/ds_chat.conf

EXPOSE 80

CMD ["nginx"]
