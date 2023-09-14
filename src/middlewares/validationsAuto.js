const { body } = require('express-validator');


const validationsAuto = [

    body('date').notEmpty().withMessage('El campo Fecha es obligatorio'),
    body('hour').notEmpty().withMessage('El campo Hora es obligatorio')
    .isLength({ min: 4}).withMessage('El campo Hora es obligatorio'),
    body('raison').notEmpty().withMessage('El campo Motivo es obligatorio'),
    body('consequence').notEmpty().withMessage('El campo Consecuencia es obligatorio'),
    body('street').notEmpty().withMessage('El campo Calle es obligatorio'),
    body('door').notEmpty().withMessage('El campo Altura es obligatorio'),
    body('postalCode').notEmpty().withMessage('El campo Código Postal es obligatorio'),
    body('state').notEmpty().withMessage('El campo Provincia es obligatorio'),
    body('city').notEmpty().withMessage('El campo Localidad es obligatorio'),
    body('description').notEmpty().withMessage('El campo Descripción de los hechos es obligatorio'),
    body('characteristics').notEmpty().withMessage('El campo Características del Lugar es obligatorio'),
    body('question1').notEmpty().withMessage('El campo ¿Conducía el Asegurado? es obligatorio'),
    body('question2').notEmpty().withMessage('El campo ¿Hubo lesionados dentro del vehículo? es obligatorio'),
    body('question3').notEmpty().withMessage('El campo ¿Hubo lesionados fuera del vehículo? es obligatorio'),
    body('question4').notEmpty().withMessage('El campo ¿Hubo vehículos de terceros involucrados? es obligatorio'),

]

module.exports = validationsAuto;