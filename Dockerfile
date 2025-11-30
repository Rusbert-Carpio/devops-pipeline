FROM nginx:stable-alpine

# Copiar todo lo del frontend al folder público de Nginx
COPY public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
