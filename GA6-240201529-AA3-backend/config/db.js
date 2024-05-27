const mongoose = require('mongoose');


const connectDb = async () =>{

    try {

       await mongoose.connect('mongodb+srv://julianandresgonzalezgarcia:m7O5PlPGxWAWHlJv@ga6-240201529-aa3.xscks6s.mongodb.net/?retryWrites=true&w=majority&appName=GA6-240201529-AA3');
 
       console.log('Conexion exitosa con la DB');
    } catch (error) {

        console.log(error);
        process.exit(1);

    }
}

module.exports = connectDb