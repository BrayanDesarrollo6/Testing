const express = require('express');
const app = express();
const port = 4001;
const cors = require('cors');

// Middleware para parsear el cuerpo de las solicitudes POST
app.use(express.json());
app.use(cors());

// Manejador de la solicitud POST a /plantilla
app.post('/plantilla', (req, res) => {
  // Acceder a los datos enviados en la solicitud POST
  const { body } = req;
  console.log('Datos recibidos:', body);

  // Realizar operaciones con los datos recibidos

  // Enviar una respuesta al cliente
  res.status(200).json({ message: 'Solicitud POST recibida correctamente' });
});

// Manejador de la solicitud GET a la raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido! Esta es la página principal.');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
