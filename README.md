📘 Proyecto DevOps – ITLA

Docker + GitHub Actions + Render

Este proyecto forma parte de la práctica final de la asignatura DevOps del ITLA.
Consiste en una aplicación web estática que se construye, se testea (opcional) y se despliega automáticamente utilizando:

Docker

GitHub Actions (CI/CD)

Render (Hosting mediante contenedor Docker)

El frontend contiene una interfaz moderna personalizada, incluyendo la fotografía del desarrollador (Rusbert Carpio).

🚀 Tecnologías Utilizadas
Tecnología	Uso
Docker	Construcción de la imagen del frontend y empaquetado
GitHub Actions (CI/CD)	Build + Push a Docker Hub + Deploy automático a Render
Render	Hosting de la aplicación usando Docker Registry
HTML / CSS / JS	Desarrollo del frontend estático
Nginx	Servidor web dentro del contenedor
📁 Estructura del Proyecto
devops-pipeline/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── img/
│       └── Foto 2x2.jpg
│
├── Dockerfile
├── ci-cd.yml       (workflow de GitHub Actions)
├── deploy.yml      (Auto Deploy)
├── package.json    (opcional según la práctica)
└── README.md

🐳 Dockerfile (Nginx para servir el frontend)

El proyecto usa Nginx para servir la carpeta public:

FROM nginx:stable-alpine

# Borrar archivos por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiar el frontend
COPY public /usr/share/nginx/html

# Exponer puerto
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

🔄 Pipeline CI/CD (GitHub Actions)

El workflow ejecuta las siguientes etapas:

✔ Construcción de la imagen
✔ Inicio de sesión en Docker Hub
✔ Push de la imagen a Docker Hub
✔ Llamada al Deploy Hook de Render
✔ Render reconstruye y despliega la app automáticamente

Variables necesarias en Settings → Secrets → Actions:

Nombre del Secret	Contenido
DOCKERHUB_USERNAME	Usuario de Docker Hub
DOCKERHUB_TOKEN	Access Token de Docker Hub
RENDER_DEPLOY_HOOK	URL del deploy hook de Render
🌐 Deploy Automático en Render

Cada vez que haces:

git add .
git commit -m "mensaje"
git push


Render detecta la imagen actualizada desde Docker Hub y despliega automáticamente.

La aplicación queda disponible en:

👉 https://devops-pipeline-itla.onrender.com

🎨 Frontend Moderno

El proyecto muestra:

Tarjeta central

Fotografía del desarrollador

Estilo moderno oscuro

Efectos Neomorphism + Glow

Diseño totalmente responsive

Ejemplo del frontend:

<img src="img/Foto 2x2.jpg" class="logo">
<h1>Proyecto DevOps</h1>
<p>Desarrollado por <strong>Rusbert Carpio</strong></p>

👨‍💻 Desarrollado por

Rusbert Carpio
Estudiante de Desarrollo de Software – ITLA
2025

⭐ Si te fue útil, deja una estrella en el repositorio
