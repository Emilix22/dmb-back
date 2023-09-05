const express = require('express');
const router = express.Router();

const polizasApiController = require('../../controllers/apiControllers/polizasApiControllers');

/******************************************************clientes_personas************************** */
//Todas las pólizas
router.get('/', polizasApiController.list);

//Buscar polizas por cliente Id
router.post('/:id', polizasApiController.findId)

//polizas tipo auto
router.get('/auto', polizasApiController.listCar)

//polizas tipo auto por cliente
router.post('/auto/porCliente', polizasApiController.listForClientsCar)

//polizas tipo auto por empresa
router.post('/auto/porEmpresa', polizasApiController.listForCompanyCar)

//polizas tipo hogar
router.get('/hogar', polizasApiController.listHome)

//polizas tipo hogar por cliente
router.post('/hogar/porCliente', polizasApiController.listForClientsHome)

//polizas tipo hogar por empresa
router.post('/hogar/porEmpresa', polizasApiController.listForCompanyHome)

module.exports = router;