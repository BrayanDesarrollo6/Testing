const express = require('express');
const app = express();
const port = 6000;
const cors = require('cors');
const spawn = require("child_process").spawn;

// Middleware para parsear el cuerpo de las solicitudes POST
app.use(express.json());
app.use(cors());

// Manejador de la solicitud POST a /plantilla
app.post('/plantilla', (req, res) => {
  // Acceder a los datos enviados en la solicitud POST
  const { body } = req;
  console.log('Datos recibidos:', body);
  
  // Realizar operaciones con los datos recibidos
  // const process = spawn('python',["./test.py"]);

  // process.stderr.on("data",(data)=>{
  //   console.error('stderr:',data.toString());
  // })
  // process.stdout.on('data', (data) => {
  //   console.log(data.toString());
  // });

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
