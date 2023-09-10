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

//polizas tipo moto
router.get('/moto', polizasApiController.listMoto)

//polizas tipo moto por cliente
router.post('/moto/porCliente', polizasApiController.listForClientsMoto)

//polizas tipo moto por empresa
router.post('/moto/porEmpresa', polizasApiController.listForCompanyMoto)

//polizas tipo hogar
router.get('/hogar', polizasApiController.listHome)

//polizas tipo hogar por cliente
router.post('/hogar/porCliente', polizasApiController.listForClientsHome)

//polizas tipo hogar por empresa
router.post('/hogar/porEmpresa', polizasApiController.listForCompanyHome)

//polizas tipo consorcio
router.get('/consorcio', polizasApiController.listConsortium)

//polizas tipo consorcio por cliente
router.post('/consorcio/porCliente', polizasApiController.listForClientsConsortium)

//polizas tipo consorcio por empresa
router.post('/consorcio/porEmpresa', polizasApiController.listForCompanyConsortium)

//polizas tipo otro
router.get('/otro', polizasApiController.listOther)

//polizas tipo otro por cliente
router.post('/otro/porCliente', polizasApiController.listForClientsOther)

//polizas tipo otro por empresa
router.post('/otro/porEmpresa', polizasApiController.listForCompanyOther)

module.exports = router;