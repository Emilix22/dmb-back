const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/multerSiniestros_moto');
const validationImage = require ('../../middlewares/validationImage');
const validationsAuto = require ('../../middlewares/validationsAuto');


const siniestros_motoApiController = require('../../controllers/apiControllers/siniestros_motoApiControllers');

//Todos los siniestros_auto
router.get('/', siniestros_motoApiController.list);

//guardar en base de datos nuevo siniestro_auto
router.post('/crear', upload.fields([{name: 'license_front'}, {name: 'license_back'}, {name: 'police_complaint'}]), validationImage, [validationsAuto], siniestros_motoApiController.create)

module.exports = router;