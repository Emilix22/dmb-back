const { body } = require('express-validator');


const validationsHogar = [

    body('date').notEmpty().withMessage('El campo Fecha es obligatorio'),
    body('hour').notEmpty().withMessage('El campo Hora es obligatorio'),
    body('minutes').notEmpty().withMessage('El campo minutos es obligatorio'),
    body('description').notEmpty().withMessage('El campo Descripción de los hechos es obligatorio'),

]

module.exports = validationsHogar;