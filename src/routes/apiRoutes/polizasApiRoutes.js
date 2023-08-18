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


module.exports = router;