const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/multerSiniestros_consorcio');
const validationImage = require ('../../middlewares/validationImage')
const validationsHogar = require ('../../middlewares/validationsHogar')


const siniestros_consorcioApiController = require('../../controllers/apiControllers/siniestros_consorcioApiControllers');

//Todas los siniestros_hogar
router.get('/', siniestros_consorcioApiController.list);

//guardar en base de datos nuevo siniestro_hogar
router.post('/crear', upload.fields([{name: 'denuncia_mobiliario'}]), validationImage, [validationsHogar], siniestros_consorcioApiController.create)

module.exports = router;