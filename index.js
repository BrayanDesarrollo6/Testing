import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 6000;

app.use(cors());

app.use(express.json());

app.post('/api/test', (req, res) => {
    const data = req.body;
    console.log(data);
    res.status(200).json({ message: 'Solicitud POST recibida con éxito' });
});

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});
