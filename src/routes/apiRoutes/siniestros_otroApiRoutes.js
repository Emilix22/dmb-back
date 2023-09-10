const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/multerSiniestros_otro');
const validationImage = require ('../../middlewares/validationImage')

const siniestros_otroApiController = require('../../controllers/apiControllers/siniestros_otroApiControllers');

//Todos los siniestros_otro
router.get('/', siniestros_otroApiController.list);

//guardar en base de datos nuevo siniestro_otro
router.post('/crear', upload.fields([{name: 'denuncia_policial'}]), validationImage, siniestros_otroApiController.create)

module.exports = router;