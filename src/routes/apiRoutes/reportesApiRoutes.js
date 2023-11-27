const express = require('express');
const router = express.Router();
//const upload = require('../../middlewares/multerUsers');
//const validationsRegister = require('../../middlewares/validationsRegister')
//const validationImage = require ('../../middlewares/validationImage')

const reportesApiController = require('../../controllers/apiControllers/reportesApiControllers');

//Agregar cliente por reporte MercantilAndina
router.post('/addClienteMercantilAndina', reportesApiController.AddClienteMercantilAndina);


module.exports = router;