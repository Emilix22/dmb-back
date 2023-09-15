const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs');
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
        Clientes_empresas.findAll({include: [{association: 'vendedores_cliente_persona'}, {association: 'metodos_pagos_cliente_persona'}]})
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
            include: [{association: 'vendedores_cliente_persona'}, {association: 'metodos_pagos_cliente_persona'}]
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


    
/************************************************************************************************************** */                          
    login: (req, res) => {

        const errors = validationResult(req);
        
        if(errors.errors.length > 0){

            return res.status(401).json({error: errors.mapped()});
            
        }else{
          
            Users.findOne({
                where: {email: req.body.email},
                include: [{association: 'level'}]
            })
            .then(userToLogin => {
                if(userToLogin && bcrypt.compareSync(req.body.password, userToLogin.password)) { 
                    
                    return res.status(200).json({
                        name: userToLogin.name,
                        surname: userToLogin.surname,
                        email: userToLogin.email,
                        image: userToLogin.image,
                        level: userToLogin.level.level
                    })
                }else {
                    return res.status(401).json({error: 'Email o password inválido'})
                }
            })
            .catch(error => {console.log(error)});
        } 
    },

    removed: (req, res) => {
        Users.findAll({
            where: {
                deletedAt: {
                    [Op.not]: null
                  }
                },
            paranoid: false      
        })
        .then(users => {
            let info = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: '/api/users/removed'
                },
                data: users
            }
            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)})
    },

    restore: (req, res) => {
        Users.restore({
            where: {id: req.params.id}    
        })
        .then(user => {
            let info = {
                meta: {
                    status : 200,
                    url: '/api/users/restore/:id/'
                },
                data: user
            }
            return res.status(200).json(info);
        })
        .catch(error => {console.log(error)})
    },

    update: (req, res) => {
        let userToEdit  = Users.findByPk(req.params.id);

        let img;

		if(req.file != undefined){
			img = req.file.filename
		} else {
			img = userToEdit.image
		}

        Users.update(
            {
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                image: img
            },
            {
                where: {id: req.params.id},
            }
        )
        .then(result => {
            Users.findOne({
                where: {id: req.params.id},
                include: [{association: 'level'}],
                attributes: { exclude: ['password'] }
            })
            .then(userEdited => {
                let info = {
                    meta: {
                        status : 200,
                        url: '/api/users/update/:id/'
                    },
                    data: userEdited
                }
                return res.status(200).json(info)
            })
            
        })
        .catch(error => {console.log(error)});
    },

    profile: (req, res) => {
        Users.findByPk(req.params.id, {attributes: { exclude: ['password'] }})
        .then(user => {
            let info = {
                meta: {
                    status : 200,
                    url: '/api/users/profile/:id/'
                },
                data: user
            }
            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    changeLevel: (req, res) => {
        
        Users.update(
            {
                level_id: req.body.level,
            },
            {
                where: {id: req.params.id},
                // include: [{association: 'level'}]
            }
        )
        .then(user => {

            return res.status(200).json({message: 'Permisos modificados con éxito'})
        })
        .catch(error => {console.log(error)});
    },

    destroy: (req, res) => {
        Users.destroy({
            where: {id: req.params.id}
        })
        .then(user => {
            return res.status(200).json({message: 'Usuario eliminado con éxito'})
        })
        .catch(error => {console.log(error)});    
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();      
    }

}

module.exports = controller;