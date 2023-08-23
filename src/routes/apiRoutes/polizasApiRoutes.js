const express = require('express');
const router = express.Router();

const polizasApiController = require('../../controllers/apiControllers/polizasApiControllers');

/******************************************************clientes_personas************************** */
//Todas las pólizas
router.get('/', polizasApiController.list);

//polizas tipo auto
router.get('/auto', polizasApiController.listCar)

//polizas tipo auto por cliente
router.post('/auto/porCliente', polizasApiController.listForClientsCar)

//polizas tipo hogar
router.get('/hogar', polizasApiController.listHome)

//polizas tipo hogar por cliente
router.post('/hogar/porCliente', polizasApiController.listForClientsHome)

module.exports = router;