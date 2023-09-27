const { body } = require('express-validator');


const validationsOtro = [

    body('date').notEmpty().withMessage('El campo Fecha es obligatorio'),
    body('hour').notEmpty().withMessage('El campo Hora es obligatorio'),
    body('minutes').notEmpty().withMessage('El campo Minutos es obligatorio'),
    body('street').notEmpty().withMessage('El campo Calle es obligatorio'),
    body('door').notEmpty().withMessage('El campo Altura es obligatorio'),
    //body('postalCode').notEmpty().withMessage('El campo Código Postal es obligatorio'),
    body('state').notEmpty().withMessage('El campo Provincia es obligatorio'),
    body('city').notEmpty().withMessage('El campo Localidad es obligatorio'),
    body('description').notEmpty().withMessage('El campo Descripción de los hechos es obligatorio'),

]

module.exports = validationsOtro;