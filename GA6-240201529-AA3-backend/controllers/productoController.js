const Producto = require("../models/Producto");

exports.CrearProducto = async (req, res) =>{

    try {
        
        const producto = new Producto(req.body);

        await producto.save();

        res.send(producto);

    } catch (error) {

        console.log(error);
        res.status(500).send('Error');

    }

}

exports.listarProducto = async (req, res) =>{

    try {
        
        const producto = await Producto.find();

        res.json(producto);

    } catch (error) {

        console.log(error);
        res.status(500).send('Error');

    }

}

exports.BuscarProducto = async (req, res) =>{
    try {
        
        let producto = await Producto.findById(req.params._id);

        if(!producto){
            res.status(400).json({msg: 'Producto no encontrado'});
        }
        res.json(producto);

    } catch (error) {

        console.log(error);
        res.status(500).send('Error');

    }

}

exports.ActualizarProducto = async (req, res) =>{

    try {
        
        const {nombre, categoria, precio, stock} = req.body;
        let producto = await Producto.findById(req.params._id);

        if(!producto){
            res.status(500).json('El producto no exite');
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.precio = precio;
        producto.stock = stock;

        producto = await Producto.findOneAndUpdate({_id: req.params._id}, producto, {new: true});

        res.json(producto);

    } catch (error) {

        console.log(error);
        res.status(500).send('Error');

    }

}

exports.BorrarProducto = async (req, res) =>{

    try {
        
        let producto = await Producto.findById(req.params._id);

        if(!producto){
            res.status(400).json({msg: 'Producto no encontrado'});
        }

        await Producto.findOneAndDelete({_id: req.params._id});
        res.json({msg: 'Producto eliminado'});

    } catch (error) {

        console.log(error);
        res.status(500).send('Error');

    }

}