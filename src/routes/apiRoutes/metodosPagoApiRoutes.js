const express = require('express');
const router = express.Router();

const metodosPago = require('../../controllers/apiControllers/metodosPagoApiControllers');

//Todos los metodos de pago
router.get('/', metodosPago.list);

//Crear metodo de pago
router.post('/crear', metodosPago.create);

module.exports = router;