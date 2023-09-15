const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const transporter = require('../../helpers/mailer')
const { validationResult } = require('express-validator');

//Otra forma de llamar a los modelos
const Siniestros_consorcio = db.Siniestro_consorcio;
const Clientes_personas = db.Cliente_persona;
const Clientes_empresas = db.Cliente_empresa;

const controller = {    

    list: (req, res) => {
        Siniestros_consorcio.findAll({
            include: [{association: 'polizas_siniestro_consorcio'}, {association: 'clientes_personas_siniestro_consorcio'}, {association: 'clientes_empresas_siniestro_consorcio'}]
        })
        .then(siniestros => {
            let info = {
                meta: {
                    status : 200,
                    total: siniestros.length,
                    url: '/api/siniestros_consorcio'
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
        
            let imgDenuncia_mobiliario;
            
            if (req.files.denuncia_mobiliario) {
                imgDenuncia_mobiliario = req.files.denuncia_mobiliario[0].filename;
            } else {
                imgDenuncia_mobiliario = null
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

            Siniestros_consorcio.create({

                cliente_persona_id: clientPeapol,
                cliente_empresa_id: clientCompany,
                fecha_siniestro: req.body.date,
                hora_siniestro: req.body.hour + ":" + req.body.minutes,
                poliza_id: req.body.policy,
                incendio_contenido: req.body.incendio_contenido,
                incendio_edificio: req.body.incendio_edificio,
                cristales_rotura_accidental: req.body.cristales_rotura_accidental,
                cristales_rajadura_accidental: req.body.cristales_rajadura_accidental,
                robo_mobiliario: req.body.robo_mobiliario,
                denuncia_mobiliario : imgDenuncia_mobiliario,
                por_agua_daños_al_mobiliario: req.body.por_agua_daños_al_mobiliario,
                otro_tipo_de_bienes: req.body.otro_tipo_de_bienes,
                descripcion_hechos: req.body.descripcion_hechos,
                bienes_afectados: req.body.bienes_afectados    
                
            })
            .then(siniestro_consorcio => {
                //enviar email
                transporter.sendMail({
                    from: 'DMB Consultores torresdragon@hotmail.com',
                    to: [cliente.email, 'siniestros@dmbconsultores.com.ar'],
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
                                        <p>${req.body.descripcion_hechos}</p>
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
                        url: '/api/siniestros_consorcio/crear'
                    },
                    data: siniestro_consorcio
                }
                return res.status(200).json(info)
            })
            .catch(error => {console.log(error)});
        }    
 	}

    

};

module.exports = controller;