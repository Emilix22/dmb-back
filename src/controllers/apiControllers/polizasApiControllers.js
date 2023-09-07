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
            include: [{association: 'tipos_polizas'}, {association: 'clientes_personas_poliza'}, {association: 'clientes_empresas_poliza'}, {association: 'autos'}]
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

    findId: (req, res) => {
        Polizas.findAll({
            where: {cliente_persona_id: req.body.id},
            include: [{association: 'tipos_polizas'}, {association: 'clientes_personas_poliza'}, {association: 'autos'}, {association: 'motos'}, {association: 'ubicaciones_riesgos'}, {association: 'aseguradoras'}]
        })
        .then(polizas => {

            if (polizas) {
                let info = {
                meta: {
                    status : 200,
                    url: '/api/polizas/id'
                },
                data: polizas 
            };
            return res.status(200).json(info);
            } else {
                return res.status(401).json({error: 'Lo sentimos, no existen en nuestros registros pólizas para el cliente seleccionado'})
            }    
        })
        .catch(error => {console.log(error)});
        },

    listCar: (req, res) => {
        Polizas.findAll({
            where: {tipo_poliza_id: 1},
            include: [{association: 'clientes_personas_poliza'}, {association: 'clientes_empresas_poliza'}, {association: 'autos'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas/auto'
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
                    url: '/api/polizas/auto/porCliente'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listForCompanyCar: (req, res) => {
        Polizas.findAll({
            where: {cliente_empresa_id: req.body.id_client, tipo_poliza_id: 1},
            include: [{association: 'clientes_empresas_poliza'}, {association: 'autos'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas/auto/porEmpresa'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listHome: (req, res) => {
        Polizas.findAll({
            where: {tipo_poliza_id: 3},
            include: [{association: 'clientes_personas_poliza'}, {association: 'clientes_empresas_poliza'}, {association: 'ubicaciones_riesgos'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas/hogar'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listForClientsHome: (req, res) => {
        Polizas.findAll({
            where: {cliente_persona_id: req.body.id_client, tipo_poliza_id: 3},
            include: [{association: 'clientes_personas_poliza'}, {association: 'ubicaciones_riesgos'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas/hogar/porCliente'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listForCompanyHome: (req, res) => {
        Polizas.findAll({
            where: {cliente_empresa_id: req.body.id_client, tipo_poliza_id: 3},
            include: [{association: 'clientes_empresas_poliza'}, {association: 'ubicaciones_riesgos'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas/hogar/porEmpresa'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    }

};

module.exports = controller;