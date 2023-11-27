const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const transporter = require('../../helpers/mailer')
const { validationResult } = require('express-validator');

//Otra forma de llamar a los modelos
const Siniestros_hogar = db.Siniestro_hogar;
const Clientes_personas = db.Cliente_persona;
const Clientes_empresas = db.Cliente_empresa;

const controller = {    

    list: (req, res) => {
        Siniestros_hogar.findAll({
            include: [{association: 'polizas_siniestro_hogar'}, {association: 'clientes_personas_siniestro_hogar'}, {association: 'clientes_empresas_siniestro_hogar'}]
        })
        .then(siniestros => {
            let info = {
                meta: {
                    status : 200,
                    total: siniestros.length,
                    url: '/api/siniestros_hogar'
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
/***************************denuncias policiales*********************************** */
            let imgDenuncia_mobiliario;
            let imgDenuncia_notebook;
            let imgDenuncia_electro;
            let imgDenuncia_bicicleta;
            
            if (req.files.denuncia_mobiliario[0]) {
                imgDenuncia_mobiliario = req.files.denuncia_mobiliario[0].filename;
            } else {
                imgDenuncia_mobiliario = null
            }

            if (req.files.denuncia_notebook[0]) {
                imgDenuncia_notebook = req.files.denuncia_notebook[0].filename;
            } else {
                imgDenuncia_notebook = null
            }
            
            if (req.files.denuncia_electro[0]) {
                imgDenuncia_electro = req.files.denuncia_electro[0].filename;
            } else {
                imgDenuncia_electro = null
            }
            if (req.files.denuncia_bicicleta[0]) {
                imgDenuncia_bicicleta = req.files.denuncia_bicicleta[0].filename;
            } else {
                imgDenuncia_bicicleta = null
            }

    /*******************************cliente persona o empresa****************************** */
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

            Siniestros_hogar.create({

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
                notebook_rotura: req.body.notebook_rotura,
                notebook_robo: req.body.notebook_robo,
                denuncia_notebook: imgDenuncia_notebook,
                electrodomesticos_rotura: req.body.electrodomesticos_rotura,
                electrodomesticos_robo: req.body.electrodomesticos_robo,
                denuncia_electro: imgDenuncia_electro,
                bicicletas_robo: req.body.bicicletas_robo,
                denuncia_bicicleta: imgDenuncia_bicicleta,
                por_agua_daños_al_mobiliario: req.body.por_agua_daños_al_mobiliario,
                otro_tipo_de_bienes: req.body.otro_tipo_de_bienes,
                descripcion_hechos: req.body.descripcion_hechos,
                bienes_afectados: req.body.bienes_afectados    
                
            })
            .then(siniestro_hogar => {
                //enviar email
                transporter.sendMail({
                    from: 'DMB Consultores siniestros@dmbconsultores.com.ar',
                    to: [cliente.email, 'siniestros@dmbconsultores.com.ar'],
                    subject: 'Confirmación Denuncia de siniestro',
                    html: `<!DOCTYPE html>
                            <html>
                                <head>
                                    
                                </head>
                                <body>
                                    <p>Hola ${cliente.nombre ? cliente.nombre+" DNI: "+cliente.dni : cliente.nombre_empresa+" CUIT: "+cliente.cuit}, este es un resumen de la denuncia realizada en nuestro sitio web.</p>
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
                        url: '/api/siniestros_hogar/crear'
                    },
                    data: siniestro_hogar
                }
                return res.status(200).json(info)
            })
            .catch(error => {console.log(error)});
        }
 	},

    findId: (req, res) => {
        Siniestros_hogar.findOne({
            where: {id_siniestro_hogar: req.body.id},
            include: [{association: 'polizas_siniestro_hogar'}, {association: 'clientes_personas_siniestro_hogar'}, {association: 'clientes_empresas_siniestro_hogar'}]
        })
        .then(siniestro => {

            if (siniestro) {
                let info = {
                meta: {
                    status : 200,
                    url: '/api/siniestros_hogar/id'
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