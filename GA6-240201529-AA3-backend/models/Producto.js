const mongoose = require('mongoose');

const PSchema = mongoose.Schema({

    nombre:{
        type: String,
        require: true
    },
    categoria:{
        type: String,
        require: true
    },
    precio:{
        type: Number,
        require: true
    },
    stock:{
        type: Number,
        require: true
    }

});

module.exports = mongoose.model('producto', PSchema);