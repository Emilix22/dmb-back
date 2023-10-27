const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Otra forma de llamar a los modelos
const Polizas = db.Poliza;

const controller = {    

    list: (req, res) => {
        Polizas.findAll({
            include: [{association: 'tipos_polizas'}, {association: 'clientes_personas_poliza'}, {association: 'autos'}, {association: 'motos'}, {association: 'ubicaciones_riesgos'}, {association: 'embarcaciones'}, {association: 'aseguradoras'}, {association: 'clientes_empresas_poliza'}]
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
            include: [{association: 'tipos_polizas'}, {association: 'clientes_personas_poliza'}, {association: 'autos'}, {association: 'motos'}, {association: 'ubicaciones_riesgos'}, {association: 'embarcaciones'}, {association: 'aseguradoras'}]
        })
        .then(polizas => {

            if (polizas) {
                let info = {
                meta: {
                    status : 200,
                    url: '/api/polizas/porCliente'
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

        findEmpresaId: (req, res) => {
            Polizas.findAll({
                where: {cliente_empresa_id: req.body.id},
                include: [{association: 'tipos_polizas'}, {association: 'clientes_empresas_poliza'}, {association: 'autos'}, {association: 'motos'}, {association: 'ubicaciones_riesgos'}, {association: 'embarcaciones'}, {association: 'aseguradoras'}]
            })
            .then(polizas => {
    
                if (polizas) {
                    let info = {
                    meta: {
                        status : 200,
                        url: '/api/polizas/porEmpresa'
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

    listAuto: (req, res) => {
        Polizas.findAll({
            where: {tipo_poliza_id: 1},
            include: [{association: 'clientes_personas_poliza'}, {association: 'clientes_empresas_poliza'}, {association: 'autos'}, {association: 'aseguradoras'}]
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

    listAutoPorCliente: (req, res) => {
        Polizas.findAll({
            where: {cliente_persona_id: req.body.id_client, tipo_poliza_id: 1},
            include: [{association: 'clientes_personas_poliza'}, {association: 'autos'}, {association: 'aseguradoras'}]
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

    listAutoPorEmpresa: (req, res) => {
        Polizas.findAll({
            where: {cliente_empresa_id: req.body.id_client, tipo_poliza_id: 1},
            include: [{association: 'clientes_empresas_poliza'}, {association: 'autos'}, {association: 'aseguradoras'}]
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

    listMoto: (req, res) => {
        Polizas.findAll({
            where: {tipo_poliza_id: 2},
            include: [{association: 'clientes_personas_poliza'}, {association: 'clientes_empresas_poliza'}, {association: 'motos'}, {association: 'aseguradoras'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas/moto'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listMotoPorCliente: (req, res) => {
        Polizas.findAll({
            where: {cliente_persona_id: req.body.id_client, tipo_poliza_id: 2},
            include: [{association: 'clientes_personas_poliza'}, {association: 'motos'}, {association: 'aseguradoras'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas/moto/porCliente'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listMotoPorEmpresa: (req, res) => {
        Polizas.findAll({
            where: {cliente_empresa_id: req.body.id_client, tipo_poliza_id: 2},
            include: [{association: 'clientes_empresas_poliza'}, {association: 'motos'}, {association: 'aseguradoras'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas/moto/porEmpresa'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listHogar: (req, res) => {
        Polizas.findAll({
            where: {tipo_poliza_id: 3},
            include: [{association: 'clientes_personas_poliza'}, {association: 'clientes_empresas_poliza'}, {association: 'ubicaciones_riesgos'}, {association: 'aseguradoras'}]
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

    listHogarPorCliente: (req, res) => {
        Polizas.findAll({
            where: {cliente_persona_id: req.body.id_client, tipo_poliza_id: 3},
            include: [{association: 'clientes_personas_poliza'}, {association: 'ubicaciones_riesgos'}, {association: 'aseguradoras'}]
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

    listHogarPorEmpresa: (req, res) => {
        Polizas.findAll({
            where: {cliente_empresa_id: req.body.id_client, tipo_poliza_id: 3},
            include: [{association: 'clientes_empresas_poliza'}, {association: 'ubicaciones_riesgos'}, {association: 'aseguradoras'}]
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
    },

    listConsorcio: (req, res) => {
        Polizas.findAll({
            where: {tipo_poliza_id: 4},
            include: [{association: 'clientes_personas_poliza'}, {association: 'clientes_empresas_poliza'}, {association: 'ubicaciones_riesgos'}, {association: 'aseguradoras'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas/consorcio'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listConsorcioPorCliente: (req, res) => {
        Polizas.findAll({
            where: {cliente_persona_id: req.body.id_client, tipo_poliza_id: 4},
            include: [{association: 'clientes_personas_poliza'}, {association: 'ubicaciones_riesgos'}, {association: 'aseguradoras'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas/consorcio/porCliente'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listConsorcioPorEmpresa: (req, res) => {
        Polizas.findAll({
            where: {cliente_empresa_id: req.body.id_client, tipo_poliza_id: 4},
            include: [{association: 'clientes_empresas_poliza'}, {association: 'ubicaciones_riesgos'}, {association: 'aseguradoras'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas/consorcio/porEmpresa'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listOtro: (req, res) => {
        Polizas.findAll({
            where: {
                tipo_poliza_id: {
                    [Op.not]: [1,2,3,4]
                    }
            },
            include: [{association: 'clientes_personas_poliza'}, {association: 'clientes_empresas_poliza'}, {association: 'tipos_polizas'}, {association: 'ubicaciones_riesgos'}, {association: 'embarcaciones'}, {association: 'aseguradoras'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas/otro'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listOtroPorCliente: (req, res) => {
        Polizas.findAll({
            where: {
                cliente_persona_id: req.body.id_client, 
                tipo_poliza_id: {
                    [Op.not]: [1,2,3,4]
                }
            },
            include: [{association: 'clientes_personas_poliza'}, {association: 'tipos_polizas'}, {association: 'ubicaciones_riesgos'}, {association: 'embarcaciones'}, {association: 'aseguradoras'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas/otro/porCliente'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listOtroPorEmpresa: (req, res) => {
        Polizas.findAll({
            where: {
                cliente_empresa_id: req.body.id_client, 
                tipo_poliza_id: {
                    [Op.not]: [1,2,3,4]
                }
            },
            include: [{association: 'clientes_empresas_poliza'}, {association: 'tipos_polizas'}, {association: 'ubicaciones_riesgos'}, {association: 'embarcaciones'}, {association: 'aseguradoras'}]
        })
        .then(polizas => {
            let info = {
                meta: {
                    status : 200,
                    total: polizas.length,
                    url: '/api/polizas/otro/porEmpresa'
                },
                data: polizas
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

};

module.exports = controller;