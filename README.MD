# 📚 Books API

Una API RESTful que permite realizar operaciones CRUD sobre libros.

---

## 🚀 Características

- Crear, leer, actualizar y eliminar libros.
- Validación de datos con `express-validator`.
- Conexión a MongoDB con `mongoose`.
- Estructura organizada siguiendo el patrón MVC.

---

## ⚙️ Instalación y ejecución local

### 1. Clonar el repositorio

git clone https://github.com/MCDonix/Books-utn
cd books-api
2. Instalar dependencias

npm install
3. Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto con el siguiente contenido:


PORT=3000
MONGO_URI=mongodb://localhost:27017/booksdb
⚠️ Asegurate de tener MongoDB corriendo localmente o usá una URI de MongoDB Atlas.

4. Ejecutar el servidor

npm run dev
El servidor iniciará en:

http://localhost:3000/api

✅ Rutas disponibles
Método	Ruta	Descripción
GET	/api/books	Obtener todos los libros
GET	/api/books/:id	Obtener un libro por ID
POST	/api/books	Crear un nuevo libro
PATCH	/api/books/:id	Actualizar un libro existente
DELETE	/api/books/:id	Eliminar un libro

📁 Estructura del proyecto

src/
├── config/         # Conexión a MongoDB
├── controllers/    # Lógica de negocio (CRUD)
├── interfaces/     # Interfaces TypeScript
├── models/         # Esquemas de Mongoose
├── routes/         # Endpoints de la API
├── utils/          # Funciones auxiliares (respuestas)
└── index.ts        # Punto de entrada principal

🧑‍💻 Autor
Mauricio Gonzales