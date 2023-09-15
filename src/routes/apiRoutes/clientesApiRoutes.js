const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/multerUsers');
const validationsLogin = require('../../middlewares/validationsLogin');
const validationsRegister = require('../../middlewares/validationsRegister')
const validationImage = require ('../../middlewares/validationImage')

const clientesApiController = require('../../controllers/apiControllers/clientesApiControllers');

//Todos los clientes_personas
router.get('/', clientesApiController.list);

//Todos los clientes_empresas
router.get('/empresas', clientesApiController.listEmpresas);

//Buscar un cliente_persona por DNI
router.post('/dni', clientesApiController.findDNI)

//Buscar un cliente_empresa por CUIT
router.post('/cuit', clientesApiController.findCUIT)

//Buscar un cliente_persona por Id
router.post('/id', clientesApiController.findId)

//Buscar un cliente_empresa por Id
router.post('/empresa_id', clientesApiController.findEmpresaId)

//crear cliente_persona
//router.post('/crear', [validationsRegister], clientesApiController.create);


// //Listar usuarios eliminados
// router.get('/removed', usersApiController.removed);
// //Recuperar usuario eliminado
// router.post('/restore/:id/', usersApiController.restore);



// //editar usuario
// router.put('/update/:id/', upload.single('image'), usersApiController.update);

// //Perfil de usuario
// router.get('/profile/:id', usersApiController.profile);

// //Modificar permisos de usuario
// // router.get('/level/:id/', adminMiddleware, usersController.level);
// router.put('/level/:id/', usersApiController.changeLevel);

// //Eliminar usuario
// // router.get('/delete/:id/', usersController.confirmDelete)
// router.delete('/delete/:id/', usersApiController.destroy);

// //Cerrar sesión
// router.get('/logout', usersApiController.logout);

module.exports = router;