const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const transporter = require('../../helpers/mailer');
const { validationResult } = require('express-validator');


//Otra forma de llamar a los modelos
const Siniestros_otro = db.Siniestro_otro;
const Clientes_personas = db.Cliente_persona;
const Clientes_empresas = db.Cliente_empresa;

const controller = {    

    list: (req, res) => {
        Siniestros_otro.findAll({
            include: [{association: 'polizas_siniestro_otro'}, {association: 'clientes_personas_siniestro_otro'}, {association: 'clientes_empresas_siniestro_otro'}]
        })
        .then(siniestros => {
            let info = {
                meta: {
                    status : 200,
                    total: siniestros.length,
                    url: '/api/siniestros_otro'
                },
                data: siniestros
            }

            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    create: (req, res) => {

        //console.log(req.body)

        const errors = validationResult(req);
        
        if(errors.errors.length > 0){

            return res.status(401).json({error: errors.mapped()});
            
        }else{

            let imgDenuncia_policial;
            
            if (req.files.denuncia_policial) {
                imgDenuncia_policial = req.files.denuncia_policial[0].filename;
            } else {
                imgDenuncia_policial = null
            }

            let cliente;
            let clientPeapol;
            let clientCompany;

            if(req.body.id_client) {
                clientPeapol = req.body.id_client
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

            Siniestros_otro.create({

                cliente_persona_id: clientPeapol,
                cliente_empresa_id: clientCompany,
                fecha_siniestro: req.body.date,
                hora_siniestro: req.body.hour + ":" + req.body.minutes,
                poliza_id: req.body.policy,
                lugar_calle: req.body.street,
                lugar_altura: req.body.door,
                lugar_cp: req.body.postalCode,
                lugar_provincia: req.body.state,
                lugar_localidad: req.body.city,
                descripcion_hechos: req.body.description,
                equipos_objetos_siniestrados: req.body.equipos_objetos_siniestrados,    
                denuncia_policial: imgDenuncia_policial
            })
            .then(siniestro_otro => {
                //enviar email
                transporter.sendMail({
                    from: 'DMB Consultores torresdragon@hotmail.com',
                    to: [cliente.email, 'emideborregos@gmail.com'],
                    subject: 'Confirmación Denuncia de siniestro',
                    html: `<!DOCTYPE html>
                            <html>
                                <head>
                                    
                                </head>
                                <body>
                                    <p>Hola ${cliente.nombre ? cliente.nombre+" DNI: "+cliente.dni : cliente.nombre_empresa+" CUIT: "+cliente.cuit}, este es un resumen de la denuncia "Siniestro Consorcio" realizada en nuestro sitio web.</p>
                                    <div>
                                        <label>Fecha del Siniestro: </label>
                                        <span>${req.body.date}</span>
                                    </div>
                                    <div>
                                        <label>Hora del Siniestro: </label>
                                        <span>${req.body.hour + ":" + req.body.minutes}</span>
                                    </div>
                                    <div>
                                        <label>Descripción de los hechos: </label>
                                        <p>${req.body.description}</p>
                                    </div>
                                </body>
                                <footer>
                                    
                                </footer>
                            </html>`,
                });
                
                // envia respuesta al front
                let info = {
                    meta: {
                        status : 200,
                        url: '/api/siniestros_otro/crear'
                    },
                    data: siniestro_otro
                }
                return res.status(200).json(info)
            })
            .catch(error => {console.log(error)});
        }
 	}

    

};

module.exports = controller;