const express = require('express')

const rutas = require('./routes');

const path = require('path');

const app = express();


const pathFolderPublic = path.resolve(__dirname, '../public')
//localhost:3000/api/obtenerCitas

console.log(pathFolderPublic)

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(pathFolderPublic))
app.use('/api' ,rutas);

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

