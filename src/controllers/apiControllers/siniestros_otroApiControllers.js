const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Otra forma de llamar a los modelos
const Siniestros_otro = db.Siniestro_otro;
const Clientes_personas = db.Cliente_persona;

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

		let imgDenuncia_policial;
		
        if (req.files.denuncia_policial) {
            imgDenuncia_policial = req.files.denuncia_policial[0].filename;
        } else {
            imgDenuncia_policial = null
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

    

};

module.exports = controller;