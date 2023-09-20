const { body } = require('express-validator');


const validationsRegister = [

    body('nombre').notEmpty().withMessage('El campo Nombre es obligatorio'),
    
    body('apellido').notEmpty().withMessage('El campo Apellido es obligatorio'),

    body('dni').notEmpty().withMessage('El campo DNI es obligatorio'),

    body('email').notEmpty().withMessage('El campo Email es obligatorio'),

    body('password').notEmpty().withMessage('El campo Password es obligatorio'),
    
]

module.exports = validationsRegister;