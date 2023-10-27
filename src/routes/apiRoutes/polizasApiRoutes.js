const express = require('express');
const router = express.Router();

const polizasApiController = require('../../controllers/apiControllers/polizasApiControllers');

//Buscar todas las pólizas
router.get('/', polizasApiController.list);

//Buscar polizas por cliente Id
router.post('/porCliente', polizasApiController.findId)

//Buscar polizas por clienteEmpresa Id
router.post('/porEmpresa', polizasApiController.findEmpresaId)
 
//Buscar polizas tipo auto
router.get('/auto', polizasApiController.listAuto)

//Buscar polizas tipo auto por cliente
router.post('/auto/porCliente', polizasApiController.listAutoPorCliente)

//Buscar polizas tipo auto por empresa
router.post('/auto/porEmpresa', polizasApiController.listAutoPorEmpresa)

//Buscar polizas tipo moto
router.get('/moto', polizasApiController.listMoto)

//Buscar polizas tipo moto por cliente
router.post('/moto/porCliente', polizasApiController.listMotoPorCliente)

//Buscar polizas tipo moto por empresa
router.post('/moto/porEmpresa', polizasApiController.listMotoPorEmpresa)

//Buscar polizas tipo hogar
router.get('/hogar', polizasApiController.listHogar)

//Buscar polizas tipo hogar por cliente
router.post('/hogar/porCliente', polizasApiController.listHogarPorCliente)

//Buscar polizas tipo hogar por empresa
router.post('/hogar/porEmpresa', polizasApiController.listHogarPorEmpresa)

//Buscar polizas tipo consorcio
router.get('/consorcio', polizasApiController.listConsorcio)

//Buscar polizas tipo consorcio por cliente
router.post('/consorcio/porCliente', polizasApiController.listConsorcioPorCliente)

//Buscar polizas tipo consorcio por empresa
router.post('/consorcio/porEmpresa', polizasApiController.listConsorcioPorEmpresa)

//Buscar polizas tipo otro
router.get('/otro', polizasApiController.listOtro)

//Buscar polizas tipo otro por cliente
router.post('/otro/porCliente', polizasApiController.listOtroPorCliente)

//Buscar polizas tipo otro por empresa
router.post('/otro/porEmpresa', polizasApiController.listOtroPorEmpresa)

module.exports = router;