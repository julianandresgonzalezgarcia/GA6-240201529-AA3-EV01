const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.post('/', productoController.CrearProducto);
router.get('/', productoController.listarProducto);
router.get('/:_id', productoController.BuscarProducto);
router.put('/:_id', productoController.ActualizarProducto);
router.delete('/:_id', productoController.BorrarProducto);

module.exports = router;