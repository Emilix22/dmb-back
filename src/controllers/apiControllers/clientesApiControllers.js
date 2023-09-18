const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');

//Otra forma de llamar a los modelos
const Clientes_personas = db.Cliente_persona;
const Clientes_empresas = db.Cliente_empresa;

const controller = {

    list: (req, res) => {
        Clientes_personas.findAll({include: [{association: 'vendedores_cliente_persona'}, {association: 'metodos_pagos_cliente_persona'}]})
        .then(clientes => {
            let lastuserIndex = clientes[clientes.length - 1]
            let lastUser = clientes.find(user => user.id == lastuserIndex.id)
            let info = {
                meta: {
                    status : 200,
                    total: clientes.length,
                    last: lastUser,
                    url: '/api/clientes'
                },
                data: clientes
            }
            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    listEmpresas: (req, res) => {
        Clientes_empresas.findAll({include: [{association: 'vendedores_cliente_empresa'}, {association: 'metodos_pagos_cliente_empresa'}]})
        .then(clientes => {
            let lastuserIndex = clientes[clientes.length - 1]
            let lastUser = clientes.find(user => user.id == lastuserIndex.id)
            let info = {
                meta: {
                    status : 200,
                    total: clientes.length,
                    last: lastUser,
                    url: '/api/clientes/empresas'
                },
                data: clientes
            }
            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    findDNI: (req, res) => {
        Clientes_personas.findOne({
            where: {dni: req.body.dni},
            include: [{association: 'vendedores_cliente_persona'}, {association: 'metodos_pagos_cliente_persona'}]
        })
        .then(client => {

            if (client) {
                let info = {
                meta: {
                    status : 200,
                    url: '/api/clientes/dni'
                },
                data: client 
            };
            return res.status(200).json(info);
            } else {
                return res.status(401).json({error: 'Lo sentimos, no existe en nuestros registros ningun cliente con ese N° de DNI'})
            }    
        })
        .catch(error => {console.log(error)});
    },

    findCUIT: (req, res) => {
        Clientes_empresas.findOne({
            where: {cuit: req.body.cuit},
        })
        .then(client => {

            if (client) {
                let info = {
                meta: {
                    status : 200,
                    url: '/api/clientes/cuit'
                },
                data: client 
            };
            return res.status(200).json(info);
            } else {
                return res.status(401).json({error: 'Lo sentimos, no existe en nuestros registros ningun cliente con ese N° de CUIT'})
            }    
        })
        .catch(error => {console.log(error)});
    },

    findId: (req, res) => {
        Clientes_personas.findOne({
            where: {id_cliente_persona: req.body.id},
            include: [{association: 'vendedores_cliente_persona'}, {association: 'metodos_pagos_cliente_persona'}]
        })
        .then(client => {

            if (client) {
                let info = {
                meta: {
                    status : 200,
                    url: '/api/clientes/id'
                },
                data: client 
            };
            return res.status(200).json(info);
            } else {
                return res.status(401).json({error: 'Lo sentimos, no existe en nuestros registros ningun cliente con ese N° de identificación'})
            }    
        })
        .catch(error => {console.log(error)});
    },

    findEmpresaId: (req, res) => {
        Clientes_empresas.findOne({
            where: {id_cliente_empresa: req.body.empresa_id},
            include: [{association: 'vendedores_cliente_empresa'}, {association: 'metodos_pagos_cliente_empresa'}]
        })
        .then(client => {

            if (client) {
                let info = {
                meta: {
                    status : 200,
                    url: '/api/clientes/empresa_id'
                },
                data: client 
            };
            return res.status(200).json(info);
            } else {
                return res.status(401).json({error: 'Lo sentimos, no existe en nuestros registros ningun cliente con ese N° de identificación'})
            }    
        })
        .catch(error => {console.log(error)});
    },

    create: (req, res) => {
        
        const errors = validationResult(req);
        
        if(errors.errors.length > 0){

            return res.status(401).json({error: errors.mapped()});
            
        }else{

            Clientes_personas.findOne({
                where: {dni: req.body.dni}
            })
            .then(userInDB => {
                if(userInDB){
                return res.status(401).json({error: 'Ya existe un cliente registrado con este N° de DNI'});
                }

                // let img;

                // if(req.file != undefined){
                //     img = req.file.filename
                // } else {
                //     img = 'Foto-perfil-generica.png'
                // }

                Clientes_personas.create({
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    dni: req.body.dni,
                    email: req.body.email,
                    celular: req.body.celular,
                    // tarjeta_circula: img,
                    telefono_fijo: req.body.telefono_fijo,
                    calle: req.body.calle,
                    altura: req.body.altura,
                    piso: req.body.piso,
                    departamento: req.body.departamento,
                    cp: req.body.cp,
                    localidad: req.body.localidad,
                    provincia: req.body.provincia,
                    metodo_pago_id: req.body.metodo_pago_id,
                    vendedor_id: req.body.vendedor_id

                })
                .then(cliente => {

                    let info = {
                        meta: {
                            status : 200,
                            url: '/api/clientes/crear'
                        },
                        data: cliente
                    }
                    return res.status(200).json(info)
                })
            })
            .catch(error => {console.log(error)});
        }
 	},

     createEmpresa: (req, res) => {
        
        const errors = validationResult(req);
        
        if(errors.errors.length > 0){

            return res.status(401).json({error: errors.mapped()});
            
        }else{

            Clientes_empresas.findOne({
                where: {cuit: req.body.cuit}
            })
            .then(userInDB => {
                if(userInDB){
                return res.status(401).json({error: 'Ya existe un cliente registrado con este N° de CUIT'});
                }

                // let img;

                // if(req.file != undefined){
                //     img = req.file.filename
                // } else {
                //     img = 'Foto-perfil-generica.png'
                // }

                Clientes_empresas.create({
                    nombre_empresa: req.body.nombre_empresa,
                    cuit: req.body.cuit,
                    nombre_contacto: req.body.nombre_contacto,
                    dni_contacto: req.body.dni_contacto,
                    email: req.body.email,
                    celular: req.body.celular,
                    // tarjeta_circula: img,
                    telefono_fijo: req.body.telefono_fijo,
                    calle: req.body.calle,
                    altura: req.body.altura,
                    piso: req.body.piso,
                    departamento: req.body.departamento,
                    cp: req.body.cp,
                    localidad: req.body.localidad,
                    provincia: req.body.provincia,
                    metodo_pago_id: req.body.metodo_pago_id,
                    vendedor_id: req.body.vendedor_id

                })
                .then(cliente => {

                    let info = {
                        meta: {
                            status : 200,
                            url: '/api/clientes/empresa_crear'
                        },
                        data: cliente
                    }
                    return res.status(200).json(info)
                })
            })
            .catch(error => {console.log(error)});
        }
 	},

     profile: (req, res) => {
        Clientes_personas.findOne({
            where: {id_cliente_persona: req.params.id},
            include: [{association: 'vendedores_cliente_persona'}, {association: 'metodos_pagos_cliente_persona'}]
        })
        .then(cliente => {
            let info = {
                meta: {
                    status : 200,
                    url: '/api/clientes/perfil/:id/'
                },
                data: cliente
            }
            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    profileEmpresa: (req, res) => {
        Clientes_empresas.findOne({
            where: {id_cliente_empresa: req.params.id},
            include: [{association: 'vendedores_cliente_empresa'}, {association: 'metodos_pagos_cliente_empresa'}]
        })
        .then(cliente => {
            let info = {
                meta: {
                    status : 200,
                    url: '/api/clientes/empresa_perfil/:id/'
                },
                data: cliente
            }
            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    update: (req, res) => {
        // let clienteAeditar  = Clientes_personas.findOne({
        //     where: {dni: req.body.dni}
        // });

        // let img;

		// if(req.file != undefined){
		// 	img = req.file.filename
		// } else {
		// 	img = clienteAeditar.image
		// }

        Clientes_personas.update(
            {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                dni: req.body.dni,
                email: req.body.email,
                celular: req.body.celular,
                // tarjeta_circula: img
                telefono_fijo: req.body.telefono_fijo,
                calle: req.body.calle,
                altura: req.body.altura,
                piso: req.body.piso,
                departamento: req.body.departamento,
                cp: req.body.cp,
                localidad: req.body.localidad,
                provincia: req.body.provincia,
                metodo_pago_id: req.body.metodo_pago_id,
                vendedor_id: req.body.vendedor_id
            },
            {
                where: {id_cliente_persona: req.params.id},
            }
        )
        .then(resultado => {
            Clientes_personas.findOne({
                where: {id_cliente_persona: req.params.id},
                include: [{association: 'vendedores_cliente_persona'}, {association: 'metodos_pagos_cliente_persona'}]
            })
            .then(clienteEditado => {
                let info = {
                    meta: {
                        status : 200,
                        url: '/api/clientes/editar/:id'
                    },
                    data: clienteEditado
                }
                return res.status(200).json(info)
            })
            
        })
        .catch(error => {console.log(error)});
    },

    updateEmpresa: (req, res) => {
        // let clienteAeditar  = Clientes_personas.findOne({
        //     where: {dni: req.body.dni}
        // });

        // let img;

		// if(req.file != undefined){
		// 	img = req.file.filename
		// } else {
		// 	img = clienteAeditar.image
		// }

        Clientes_empresas.update(
            {
                nombre_empresa: req.body.nombre_empresa,
                cuit: req.body.cuit,
                nombre_contacto: req.body.nombre_contacto,
                dni_contacto: req.body.dni_contacto,
                email: req.body.email,
                celular: req.body.celular,
                // tarjeta_circula: img,
                telefono_fijo: req.body.telefono_fijo,
                calle: req.body.calle,
                altura: req.body.altura,
                piso: req.body.piso,
                departamento: req.body.departamento,
                cp: req.body.cp,
                localidad: req.body.localidad,
                provincia: req.body.provincia,
                metodo_pago_id: req.body.metodo_pago_id,
                vendedor_id: req.body.vendedor_id
            },
            {
                where: {id_cliente_empresa: req.params.id},
            }
        )
        .then(resultado => {
            Clientes_empresas.findOne({
                where: {id_cliente_empresa: req.params.id},
                include: [{association: 'vendedores_cliente_empresa'}, {association: 'metodos_pagos_cliente_empresa'}]
            })
            .then(clienteEditado => {
                let info = {
                    meta: {
                        status : 200,
                        url: '/api/clientes/empresa_editar/:id'
                    },
                    data: clienteEditado
                }
                return res.status(200).json(info)
            })
            
        })
        .catch(error => {console.log(error)});
    },

    destroy: (req, res) => {
        Clientes_personas.destroy({
            where: {id_cliente_persona: req.params.id}
        })
        .then(cliente => {
            return res.status(200).json({message: 'Usuario eliminado con éxito'})
        })
        .catch(error => {console.log(error)});    
    },

    destroyEmpresa: (req, res) => {
        Clientes_empresas.destroy({
            where: {id_cliente_empresa: req.params.id}
        })
        .then(cliente => {
            return res.status(200).json({message: 'Usuario eliminado con éxito'})
        })
        .catch(error => {console.log(error)});    
    },

    removed: (req, res) => {
        Clientes_personas.findAll({
            where: {
                deletedAt: {
                    [Op.not]: null
                  }
                },
            paranoid: false      
        })
        .then(clientes => {
            let info = {
                meta: {
                    status : 200,
                    total: clientes.length,
                    url: '/api/clientes/eliminados'
                },
                data: clientes
            }
            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)})
    },

    removedEmpresa: (req, res) => {
        Clientes_empresas.findAll({
            where: {
                deletedAt: {
                    [Op.not]: null
                  }
                },
            paranoid: false      
        })
        .then(clientes => {
            let info = {
                meta: {
                    status : 200,
                    total: clientes.length,
                    url: '/api/clientes/empresa_eliminados'
                },
                data: clientes
            }
            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)})
    },

    restore: (req, res) => {
        Clientes_personas.restore({
            where: {id_cliente_persona: req.params.id}    
        })
        .then(cliente => {
            let info = {
                meta: {
                    status : 200,
                    url: '/api/clientes/recuperar/:id/'
                },
                data: cliente
            }
            return res.status(200).json(info);
        })
        .catch(error => {console.log(error)})
    },

    restoreEmpresa: (req, res) => {
        Clientes_empresas.restore({
            where: {id_cliente_empresa: req.params.id}    
        })
        .then(cliente => {
            let info = {
                meta: {
                    status : 200,
                    url: '/api/clientes/empresa_recuperar/:id/'
                },
                data: cliente
            }
            return res.status(200).json(info);
        })
        .catch(error => {console.log(error)})
    }

}

module.exports = controller;