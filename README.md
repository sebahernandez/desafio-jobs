# Soft Jobs Backend

Este proyecto es el backend para la plataforma Soft Jobs, una aplicación que ayuda a desarrolladores junior a conseguir trabajos cortos y sencillos para acumular experiencia laboral y mejorar sus oportunidades.

## Requisitos

- Node.js
- PostgreSQL

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/soft-jobs-backend.git
   cd soft-jobs-backend
   npm install
   ```

2. Base de datos:

```bash
DB_USER=tu_usuario_db
DB_HOST=localhost
DB_NAME=softjobs
DB_PASSWORD=tu_password_db
DB_PORT=5432
JWT_SECRET=tu_clave_secreta
```

3. Creación de tablas en PostgreSQL

```bash
CREATE DATABASE softjobs;

\c softjobs;

CREATE TABLE usuarios (
    id SERIAL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL,
    rol VARCHAR(25),
    lenguage VARCHAR(20)
);

SELECT * FROM usuarios;

```

4. Inicia servidor

npm run dev
