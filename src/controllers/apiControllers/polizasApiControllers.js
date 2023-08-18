const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Otra forma de llamar a los modelos
const Polizas = db.Poliza;
const Clientes_personas = db.Cliente_persona;

const controller = {

/*****************************************************clientes_personas************************************ */    

    list: (req, res) => {
        Polizas.findAll({
            include: [{association: 'clientes_personas_poliza'}, {association: 'autos'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listCar: (req, res) => {
        Polizas.findAll({
            where: {tipo_poliza_id: 1},
            include: [{association: 'clientes_personas_poliza'}, {association: 'autos'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listForClientsCar: (req, res) => {
        Polizas.findAll({
            where: {cliente_persona_id: req.body.id_client, tipo_poliza_id: 1},
            include: [{association: 'clientes_personas_poliza'}, {association: 'autos'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    }

};

module.exports = controller;