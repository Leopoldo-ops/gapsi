Instructivo de cómo echar andar el proyecto.

Paso 1: Configurar el backend
1.1. Ir a la carpeta del backend
Ingrese el siguiente comando desde el shell

cd backend

1.2. Inicializar el proyecto

npm init -y

1.3. Instalar dependencias

npm install express cors
(Opcional para desarrollo: npm install --save-dev nodemon)

1.4. Ejecutar el servidor

node server.js

O si usas nodemon:

npx nodemon server.js

Paso 2: Configurar el frontend (React)
2.1. Ir a la carpeta del frontend

cd ../frontend

2.2. Crear el proyecto React (si aún no lo tienes)

npx create-react-app .

2.3. Instalar dependencias necesarias

npm install axios @mui/material @emotion/react @emotion/styled react-router-dom redux react-redux redux-thunk antd

2.4. Ejecutar React

npm start

Notas importantes
Ambos servidores deben estar corriendo:

Backend en http://localhost:3001

Frontend en http://localhost:3000

Asegúrate de que el backend tenga cors habilitado para permitir peticiones desde React.
