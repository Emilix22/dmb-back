const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/multerUsers');
const validationsLogin = require('../../middlewares/validationsLogin');
const validationsRegister = require('../../middlewares/validationsRegister')
const validationImage = require ('../../middlewares/validationImage')

const usuariosApiController = require('../../controllers/apiControllers/usuariosApiControllers');

// //Todos los clientes
// router.get('/', clientesApiController.list);

// //Buscar un cliente por DNI
// router.post('/dni', clientesApiController.findDNI)

//login de usuario
router.post('/login', [validationsLogin], usuariosApiController.login);

// // //Listar usuarios eliminados
// // router.get('/removed', usersApiController.removed);
// // //Recuperar usuario eliminado
// // router.post('/restore/:id/', usersApiController.restore);

//crear usuario
router.post('/crear',  upload.single('imagen'), validationImage, [validationsRegister], usuariosApiController.create);

// // //editar usuario
// // router.put('/update/:id/', upload.single('image'), usersApiController.update);

// // //Perfil de usuario
// // router.get('/profile/:id', usersApiController.profile);

// // //Modificar permisos de usuario
// // // router.get('/level/:id/', adminMiddleware, usersController.level);
// // router.put('/level/:id/', usersApiController.changeLevel);

// // //Eliminar usuario
// // // router.get('/delete/:id/', usersController.confirmDelete)
// // router.delete('/delete/:id/', usersApiController.destroy);

//Cerrar sesión
router.get('/logout', usuariosApiController.logout);

module.exports = router;