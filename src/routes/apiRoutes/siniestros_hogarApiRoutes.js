const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/multerSiniestros_hogar');
const validationImage = require ('../../middlewares/validationImage');
const validationsHogar = require ('../../middlewares/validationsHogar')


const siniestros_hogarApiController = require('../../controllers/apiControllers/siniestros_hogarApiControllers');

//Todas los siniestros_hogar
router.get('/', siniestros_hogarApiController.list);

//guardar en base de datos nuevo siniestro_hogar
router.post('/crear', upload.fields([{name: 'denuncia_mobiliario'}, {name: 'denuncia_notebook'}, {name: 'denuncia_electro'}, {name: 'denuncia_bicicleta'}]), validationImage, [validationsHogar], siniestros_hogarApiController.create)

//buscar un siniestro_hogar por id
router.post('/id', siniestros_hogarApiController.findId)

module.exports = router;