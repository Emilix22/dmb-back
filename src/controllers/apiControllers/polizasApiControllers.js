const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Otra forma de llamar a los modelos
const Polizas = db.Poliza;
const Clientes = db.Cliente;

const controller = {

    list: (req, res) => {
        Polizas.findAll({
            include: [{association: 'clientes'}, {association: 'autos'}]
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

    listForClientsAuto: (req, res) => {
        Polizas.findAll({
            where: {cliente_id: req.body.id_client, tipo_id: 1},
            include: [{association: 'clientes'}, {association: 'autos'}]
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