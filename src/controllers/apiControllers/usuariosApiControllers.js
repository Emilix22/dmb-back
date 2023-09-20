const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

//Otra forma de llamar a los modelos
const Usuarios = db.Usuario; //Users
const Permisos_usuario = db.Permiso_usuario //Levels

const controller = {
    // list: (req, res) => {
    //     Users.findAll({ 
    //         include: ['level'],
    //         attributes: { exclude: ['password'] }
    //     })
    //     .then(users => {
    //         let lastuserIndex = users[users.length - 1]
    //         let lastUser = users.find(user => user.id == lastuserIndex.id)
    //         let info = {
    //             meta: {
    //                 status : 200,
    //                 total: users.length,
    //                 last: lastUser,
    //                 url: '/api/users'
    //             },
    //             data: users
    //         }
    //         return res.status(200).json(info)
    //     })
    //     .catch(error => {console.log(error)});
    // },
                          
    login: (req, res) => {

        const errors = validationResult(req);
        
        if(errors.errors.length > 0){

            return res.status(401).json({error: errors.mapped()});
            
        }else{
          
            Usuarios.findOne({
                where: {dni: req.body.usuario}
            })
            .then(userToLogin => {
                if(userToLogin && bcrypt.compareSync(req.body.password, userToLogin.password)) { 
                    
                    return res.status(200).json({
                        nombre: userToLogin.nombre,
                        apellido: userToLogin.apellido,
                        dni: userToLogin.dni,
                        email: userToLogin.email,
                        imagen: userToLogin.imagen
                    })
                }else {
                    return res.status(401).json({error: 'Usuario o password inválido'})
                }
            })
            .catch(error => {console.log(error)});
        } 
    },

    // removed: (req, res) => {
    //     Users.findAll({
    //         where: {
    //             deletedAt: {
    //                 [Op.not]: null
    //               }
    //             },
    //         paranoid: false      
    //     })
    //     .then(users => {
    //         let info = {
    //             meta: {
    //                 status : 200,
    //                 total: users.length,
    //                 url: '/api/users/removed'
    //             },
    //             data: users
    //         }
    //         return res.status(200).json(info)
    //     })
    //     .catch(error => {console.log(error)})
    // },

    // restore: (req, res) => {
    //     Users.restore({
    //         where: {id: req.params.id}    
    //     })
    //     .then(user => {
    //         let info = {
    //             meta: {
    //                 status : 200,
    //                 url: '/api/users/restore/:id/'
    //             },
    //             data: user
    //         }
    //         return res.status(200).json(info);
    //     })
    //     .catch(error => {console.log(error)})
    // },

    create: (req, res) => {
        
        const errors = validationResult(req);
        
        if(errors.errors.length > 0){

            return res.status(401).json({error: errors.mapped()});
            
        }else{

            Usuarios.findOne({
                where: {dni: req.body.dni}
            })
            .then(userInDB => {
                if(userInDB){
                return res.status(401).json({error: 'Ya existe un usuario registrado con este DNI'});
                }

                let img;

                if(req.file != undefined){
                    img = req.file.filename
                } else {
                    img = 'Foto-perfil-generica.png'
                }

                Usuarios.create({
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    dni: req.body.dni,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    imagen: img,
                    celular: req.body.celular,
                    calle: req.body.calle,
                    altura: req.body.altura,
                    piso: req.body.piso,
                    departamento: req.body.departamento,
                    cp: req.body.cp,
                    localidad: req.body.localidad,
                    provincia: req.body.provincia,
                    nacimiento: req.body.nacimiento,
                    nivel_permiso_id: 1
                })
                .then(user => {

                    let info = {
                        meta: {
                            status : 200,
                            url: '/api/usuarios/crear'
                        },
                        data: {
                            nombre: user.nombre,
                            apellido: user.apellido
                        }
                    }
                    return res.status(200).json(info)
                })
            })
            .catch(error => {console.log(error)});
        }
 	},

    // update: (req, res) => {
    //     let userToEdit  = Users.findByPk(req.params.id);

    //     let img;

	// 	if(req.file != undefined){
	// 		img = req.file.filename
	// 	} else {
	// 		img = userToEdit.image
	// 	}

    //     Users.update(
    //         {
    //             name: req.body.name,
    //             surname: req.body.surname,
    //             email: req.body.email,
    //             image: img
    //         },
    //         {
    //             where: {id: req.params.id},
    //         }
    //     )
    //     .then(result => {
    //         Users.findOne({
    //             where: {id: req.params.id},
    //             include: [{association: 'level'}],
    //             attributes: { exclude: ['password'] }
    //         })
    //         .then(userEdited => {
    //             let info = {
    //                 meta: {
    //                     status : 200,
    //                     url: '/api/users/update/:id/'
    //                 },
    //                 data: userEdited
    //             }
    //             return res.status(200).json(info)
    //         })
            
    //     })
    //     .catch(error => {console.log(error)});
    // },

    // profile: (req, res) => {
    //     Users.findByPk(req.params.id, {attributes: { exclude: ['password'] }})
    //     .then(user => {
    //         let info = {
    //             meta: {
    //                 status : 200,
    //                 url: '/api/users/profile/:id/'
    //             },
    //             data: user
    //         }
    //         return res.status(200).json(info)
    //     })
    //     .catch(error => {console.log(error)});
    // },

    // changeLevel: (req, res) => {
        
    //     Users.update(
    //         {
    //             level_id: req.body.level,
    //         },
    //         {
    //             where: {id: req.params.id},
    //             // include: [{association: 'level'}]
    //         }
    //     )
    //     .then(user => {

    //         return res.status(200).json({message: 'Permisos modificados con éxito'})
    //     })
    //     .catch(error => {console.log(error)});
    // },

    // destroy: (req, res) => {
    //     Users.destroy({
    //         where: {id: req.params.id}
    //     })
    //     .then(user => {
    //         return res.status(200).json({message: 'Usuario eliminado con éxito'})
    //     })
    //     .catch(error => {console.log(error)});    
    // },

    logout: (req, res) => {
        res.clearCookie('dniUsuario');
        req.session.destroy();      
    }

}

module.exports = controller;