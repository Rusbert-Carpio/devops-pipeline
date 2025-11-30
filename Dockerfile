FROM nginx:stable-alpine

# Borrar archivos por defecto de NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copiar tu frontend
COPY public /usr/share/nginx/html

# Exponer puerto
EXPOSE 80

# Mantener NGINX activo
CMD ["nginx", "-g", "daemon off;"]
