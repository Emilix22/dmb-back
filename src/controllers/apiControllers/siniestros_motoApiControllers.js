const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const transporter = require('../../helpers/mailer')
const { validationResult } = require('express-validator');


//Otra forma de llamar a los modelos
const Siniestros = db.Siniestro_moto;
const Clientes_personas = db.Cliente_persona;
const Clientes_empresas = db.Cliente_empresa;

const controller = {    

    list: (req, res) => {
        Siniestros.findAll({
            include: [{association: 'polizas_siniestro_moto'}, {association: 'clientes_personas_siniestro_moto'}, {association: 'clientes_empresas_siniestro_moto'}]
        })
        .then(siniestros => {
            let info = {
                meta: {
                    status : 200,
                    total: siniestros.length,
                    url: '/api/siniestros_moto'
                },
                data: siniestros
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    create: (req, res) => {

        //console.log(req.body)
        // console.log(req.files.license_front[0].filename)

        const errors = validationResult(req);
        
        if(errors.errors.length > 0){

            return res.status(401).json({error: errors.mapped()});
            
        }else{

            let imgRegistroFront;
            let imgRegistroBack;
            let imgDenuncia;
            
            imgRegistroFront = req.files.license_front[0].filename;
            imgRegistroBack = req.files.license_back[0].filename;

            if (req.files.police_complaint) {
                imgDenuncia = req.files.police_complaint[0].filename;
            } else {
                imgDenuncia = null
            }

            let cliente;
            let clientPeapol;
            let clientCompany;

            if(req.body.id_peapol) {
                clientPeapol = req.body.id_peapol
                Clientes_personas.findOne({
                    where: {id_cliente_persona: req.body.id_peapol},
                })
                .then(client => {
                    
                    cliente = client
                })
            } else {
                clientPeapol = null
            }

            if(req.body.id_company) {
                clientCompany = req.body.id_company
                Clientes_empresas.findOne({
                    where: {id_cliente_empresa: req.body.id_company},
                })
                .then(client => {
                    
                    cliente = client
                })
            } else {
                clientCompany = null
            }

            Siniestros.create({
                cliente_persona_id: clientPeapol,
                cliente_empresa_id: clientCompany,
                fecha_siniestro: req.body.date,
                hora_siniestro: req.body.hour,
                poliza_id: req.body.policy,
                motivo: req.body.raison,
                consecuencia: req.body.consequence,
                denuncia_policial: imgDenuncia,
                lugar_calle: req.body.street,
                lugar_altura: req.body.door,
                lugar_cp: req.body.postalCode,
                lugar_provincia: req.body.state,
                lugar_localidad: req.body.city,
                descripcion_hechos: req.body.description,
                lugar_caracteristicas: req.body.characteristics,
                registro_frente: imgRegistroFront,
                registro_dorso: imgRegistroBack,
                conducia_asegurado: req.body.question1,
                lesionados_dentro_vehiculo: req.body.question2,
                vehiculos_terceros_involucrados: req.body.question4,
                cnc_nombre: req.body.dnc_name,
                cnc_apellido: req.body.dnc_surname,
                cnc_dni: req.body.dnc_DNI,
                cnc_telefono: req.body.dnc_phone,
                cnc_nacimiento: req.body.dnc_birthday,
                cnc_nacionalidad: req.body.dnc_nacionality,
                cnc_calle: req.body.dnc_street,
                cnc_altura: req.body.dnc_door,
                cnc_cp: req.body.dnc_postalCode,
                cnc_provincia: req.body.dnc_state,
                cnc_localidad: req.body.dnc_city,
                ldv_cantidad: req.body.iic_quantity,
                ldv_nombre1: req.body.iic_name1,
                ldv_nombre2: req.body.iic_name2,
                ldv_apellido1: req.body.iic_surname1,
                ldv_apellido2: req.body.iic_surname2,
                ldv_dni1: req.body.iic_dni1,
                ldv_dni2: req.body.iic_dni2,
                ldv_telefono1: req.body.iic_phone1,
                ldv_telefono2: req.body.iic_phone2,
                vehiculos_terceros_inv: req.body.vehiculos_terceros_inv
        
            })
            .then(siniestro_moto => {
                //enviar email
                // transporter.sendMail({
                //     from: 'DMB Consultores siniestros@dmbconsultores.com.ar',
                //     to: [cliente.email, 'siniestros@dmbconsultores.com.ar'],
                //     subject: 'Confirmación Denuncia de siniestro',
                //     html: `<!DOCTYPE html>
                //             <html>
                //                 <head>
                                    
                //                 </head>
                //                 <body>
                //                     <p>Hola ${cliente.nombre ? cliente.nombre+" DNI: "+cliente.dni : cliente.nombre_empresa+" CUIT: "+cliente.cuit}, este es un resumen de la denuncia "Siniestro Auto" realizada en nuestro sitio web.</p>
                //                     <div>
                //                         <label>Fecha del Siniestro: </label>
                //                         <span>${req.body.date}</span>
                //                     </div>
                //                     <div>
                //                         <label>Hora del Siniestro: </label>
                //                         <span>${req.body.hour}</span>
                //                     </div>
                //                     <div>
                //                         <label>Lugar del Siniestro: </label>
                //                         <span>${req.body.street+" "+req.body.door+" "+req.body.city}</span>
                //                     </div>
                //                     <div>
                //                         <label>Motivo: </label>
                //                         <span>${req.body.raison}</span>
                //                     </div>
                //                     <div>
                //                         <label>Consecuencia: </label>
                //                         <span>${req.body.consequence}</span>
                //                     </div>
                //                     <div>
                //                         <label>Descripción de los hechos: </label>
                //                         <p>${req.body.description}</p>
                //                     </div>
                //                 </body>
                //                 <footer>
                                    
                //                 </footer>
                //             </html>`,
                // });
                
                // envia respuesta al front
                let info = {
                    meta: {
                        status : 200,
                        url: '/api/siniestros_moto/crear'
                    },
                    data: siniestro_moto
                }
                return res.status(200).json(info)
            })
            .catch(error => {console.log(error)});
        }
 	},

    findId: (req, res) => {
        Siniestros.findOne({
            where: {id_siniestro: req.body.id},
            include: [{association: 'polizas_siniestro_moto'}, {association: 'clientes_personas_siniestro_moto'}, {association: 'clientes_empresas_siniestro_moto'}]
        })
        .then(siniestro => {

            if (siniestro) {
                let info = {
                meta: {
                    status : 200,
                    url: '/api/siniestros_moto/id'
                },
                data: siniestro 
            };
            return res.status(200).json(info);
            } else {
                return res.status(401).json({error: 'Lo sentimos, no existe en nuestros registros ningun siniestro con ese N° de identificación'})
            }    
        })
        .catch(error => {console.log(error)});
    }

    

};

module.exports = controller;