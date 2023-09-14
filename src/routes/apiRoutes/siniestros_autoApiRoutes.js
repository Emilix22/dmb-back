const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/multerSiniestros_auto');
const validationImage = require ('../../middlewares/validationImage')
const validationsAuto = require ('../../middlewares/validationsAuto')

const siniestros_autoApiController = require('../../controllers/apiControllers/siniestros_autoApiControllers');

//Todas los siniestros_auto
router.get('/', siniestros_autoApiController.list);

//guardar en base de datos nuevo siniestro_auto
router.post('/crear', upload.fields([{name: 'license_front'}, {name: 'license_back'}, {name: 'police_complaint'}]), validationImage, [validationsAuto], siniestros_autoApiController.create);


module.exports = router;