const express = require('express'); // Importa express
const bodyParser = require('body-parser'); // Middleware para parsear JSON
const cors = require('cors'); // Para permitir solicitudes desde el frontend
const PDFDocument = require('pdfkit'); // Biblioteca para generar PDFs

const app = express(); // Crea una instancia del servidor
app.use(bodyParser.json()); // Usa body-parser para procesar JSON
app.use(cors()); // Habilita CORS para permitir solicitudes desde otro dominio

// Ruta GET para la raíz
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de Generador de Currículums. Usa POST /generate-cv para crear un CV.');
});

// Ruta POST para generar el CV
app.post('/generate-cv', (req, res) => {
    const { name, email, experience } = req.body; // Obtiene datos del cuerpo de la solicitud

    const doc = new PDFDocument(); // Crea un nuevo documento PDF
    const filename = `CV_${name}.pdf`; // Nombre del archivo

    // Configura los encabezados para la descarga
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    // Agrega contenido al PDF
    doc.text(`Nombre: ${name}`, { underline: true });
    doc.text(`Email: ${email}`);
    doc.text(`Experiencia:\n${experience}`);

    // Finaliza y envía el PDF
    doc.pipe(res);
    doc.end();
});

// Inicia el servidor en el puerto 5000
app.listen(5000, () => {
    console.log('Backend corriendo en http://localhost:5000');
});