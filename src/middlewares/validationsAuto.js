const { body } = require('express-validator');


const validationsAuto = [

    body('date').notEmpty().withMessage('El campo Fecha es obligatorio'),
    
    body('street').notEmpty().withMessage('El campo Calle es obligatorio')

]

module.exports = validationsAuto;