const { body } = require('express-validator');


const validationsRegister = [

    body('date').notEmpty().withMessage('El campo Fecha es obligatorio'),
    
    body('apellido').notEmpty().withMessage('El campo Apellido es obligatorio'),

    body('dni').notEmpty().withMessage('El campo DNI es obligatorio'),

    body('email').notEmpty().withMessage('El campo Email es obligatorio'),
    
    body('celular').notEmpty().withMessage('El campo Celular es obligatorio'),
    body('calle').notEmpty().withMessage('El campo Calle es obligatorio'),
    body('altura').notEmpty().withMessage('El campo Altura es obligatorio'),

]

module.exports = validationsRegister;