const express = require('express');
const connectDb = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// conexion base de datos
connectDb();

app.use(cors());

app.use('/api/productos', require('./routes/producto'));

app.listen(10000, () =>{
    console.log("El servidor esta corriendo con exito");

});