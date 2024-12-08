# 💼 Generador de CV Personalizado

¡Crea tu currículum profesional de manera fácil y rápida! Este proyecto es una **aplicación web** diseñada para que los usuarios generen currículums personalizados con un diseño limpio y profesional. Perfecto para destacar en el mercado laboral.

---

## 🌟 Características principales

- **Creación de CVs personalizables:** Añade tu información personal, experiencia laboral, educación y más.
- **Exportación en formato PDF:** Descarga tu currículum listo para compartir.
- **Plantillas modernas:** Diferentes estilos para adaptar el diseño a tus necesidades.
- **Fácil de usar:** Interfaz intuitiva para cualquier tipo de usuario.
- **Desarrollado con tecnologías modernas:** React para el frontend y Node.js en el backend.

---

## 🛠️ Tecnologías utilizadas

Este proyecto está construido con las siguientes tecnologías:

### **Frontend**
- [React](https://reactjs.org/) (HTML, CSS y JavaScript)
- Librerías adicionales:
  - **react-to-pdf**: Para la exportación de los CVs.
  - **Bootstrap**: Para el diseño y estilo.

### **Backend**
- [Node.js](https://nodejs.org/) con [Express](https://expressjs.com/): Para gestionar las solicitudes y generar el PDF.
- **Base de datos:** SQLite para almacenar datos opcionalmente.

---

## 🚀 ¿Cómo instalar y ejecutar el proyecto?

Sigue estos pasos para instalar y ejecutar la aplicación localmente:

### **1. Clonar este repositorio**
Ejecuta el siguiente comando en tu terminal para clonar el proyecto:

```bash
git clone https://github.com/alejandro/generador-cv.git

### **2. Configurar el backend**
Navega al directorio del backend: cd generador-cv/backend
Instala las dependencias: npm install
Crea un archivo .env con las siguientes configuraciones:
PORT=5000
DATABASE_URL=./data/database.sqlite
Inicia el servidor: npm start

### **3. Configurar el frontend**
Navega al directorio del frontend: cd ../frontend
Instala las dependencias: npm install
Inicia la aplicación: npm start

### **4. Accede a la aplicación**
Abre tu navegador y ve a: http://localhost:3003
