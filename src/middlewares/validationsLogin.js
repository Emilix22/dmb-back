const { body } = require('express-validator');

const validationsLogin = [

    body('usuario').notEmpty().withMessage('El campo Usuario es obligatorio'),

    body('password').notEmpty().withMessage('El campo Password es obligatorio')

]

module.exports = validationsLogin;
