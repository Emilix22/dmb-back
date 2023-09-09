const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Otra forma de llamar a los modelos
const Siniestros_consorcio = db.Siniestro_consorcio;
const Clientes_personas = db.Cliente_persona;

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

		let imgDenuncia_mobiliario;
		
        if (req.files.denuncia_mobiliario) {
            imgDenuncia_mobiliario = req.files.denuncia_mobiliario[0].filename;
        } else {
            imgDenuncia_mobiliario = null
        }


        let clientPeapol;
        let clientCompany;

        if(req.body.id_client) {
            clientPeapol = req.body.id_client
        } else {
            clientPeapol = null
        }

        if(req.body.id_company) {
            clientCompany = req.body.id_company
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

    

};

module.exports = controller;