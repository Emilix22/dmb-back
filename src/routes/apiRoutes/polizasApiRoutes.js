const express = require('express');
const router = express.Router();

const polizasApiController = require('../../controllers/apiControllers/polizasApiControllers');

//Todas las pólizas
router.get('/', polizasApiController.list);

//Buscar polizas por cliente validado
router.post('/porClientes', polizasApiController.listForClientsAuto)


module.exports = router;