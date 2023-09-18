const express = require('express');
const router = express.Router();
//const upload = require('../../middlewares/multerUsers');
//const validationsRegister = require('../../middlewares/validationsRegister')
//const validationImage = require ('../../middlewares/validationImage')

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

//Crear cliente_persona
router.post('/crear', clientesApiController.create);

//Crear cliente_empresa
router.post('/empresa_crear', clientesApiController.createEmpresa);

//Perfil de cliente_persona
router.get('/perfil/:id', clientesApiController.profile);

//Perfil de cliente_empresa
router.get('/empresa_perfil/:id', clientesApiController.profileEmpresa);

//editar cliente_persona
router.put('/editar/:id', clientesApiController.update);

//editar cliente_empresa
router.put('/empresa_editar/:id', clientesApiController.updateEmpresa);

//Eliminar cliente_persona
// // router.get('/delete/:id/', usersController.confirmDelete)
router.delete('/eliminar/:id/', clientesApiController.destroy);

//Eliminar cliente_empresa
// // router.get('/delete/:id/', usersController.confirmDelete)
router.delete('/empresa_eliminar/:id/', clientesApiController.destroyEmpresa);

//Listar cliente_persona eliminados
router.get('/eliminados', clientesApiController.removed);

//Listar cliente_empresa eliminados
router.get('/empresa_eliminados', clientesApiController.removedEmpresa);

//Recuperar cliente_persona eliminado
router.post('/recuperar/:id/', clientesApiController.restore);

//Recuperar cliente_empresa eliminado
router.post('/empresa_recuperar/:id/', clientesApiController.restoreEmpresa);

module.exports = router;