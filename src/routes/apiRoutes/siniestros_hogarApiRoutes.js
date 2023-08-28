const express = require('express');
const router = express.Router();
//const upload = require('../../middlewares/multerSiniestros_auto');
//const validationImage = require ('../../middlewares/validationImage')

const siniestros_hogarApiController = require('../../controllers/apiControllers/siniestros_hogarApiControllers');

//Todas los siniestros_hogar
router.get('/', siniestros_hogarApiController.list);

//guardar en base de datos nuevo siniestro_hogar
router.post('/crear', /*upload.fields([{name: 'license_front'}, {name: 'license_back'}]), validationImage,*/ siniestros_hogarApiController.create)

module.exports = router;