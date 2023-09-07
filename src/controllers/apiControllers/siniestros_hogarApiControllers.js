const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Otra forma de llamar a los modelos
const Siniestros_hogar = db.Siniestro_hogar;
const Clientes_personas = db.Cliente_persona;

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

        console.log(req.body)
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

		Siniestros_hogar.create({

            cliente_persona_id: clientPeapol,
            cliente_empresa_id: clientCompany,
            fecha_siniestro: req.body.date,
            hora_siniestro: req.body.hour + ":" + req.body.minutes,
            poliza_id: req.body.policy,
            incendio_contenido: req.body.incendio_contenido,
            incendio_edificio: req.body.incendio_edificio,
            incendio_edificio_parcial: req.body.incendio_edificio_parcial,
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