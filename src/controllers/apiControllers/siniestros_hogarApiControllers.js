const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Otra forma de llamar a los modelos
const Siniestros_hogar = db.Siniestro_hogar;
const Clientes_personas = db.Cliente_persona;

const controller = {    

    list: (req, res) => {
        Siniestros_hogar.findAll({
            include: [{association: 'clientes_personas_siniestro_hogar'}, {association: 'clientes_empresas_siniestro_hogar'}]
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

        // console.log(req.body)
        // console.log(req.files.license_front[0].filename)

		//let imgRegistroFront;
        //let imgRegistroBack;
        //let imgDenuncia;
		
        //imgRegistroFront = req.files.license_front[0].filename;
        //imgRegistroBack = req.files.license_back[0].filename;
        //imgDenuncia = req.body.complaint.name; 

		Siniestros_hogar.create({

            cliente_persona_id: req.body.id_client,
            cliente_empresa_id: null,
            motivo: req.body.raison,
            descripcion_hechos: req.body.description,
            bienes_afectados: req.body.affected_objects
            
             
        })
        .then(siniestro_hogar => {
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

    

};

module.exports = controller;