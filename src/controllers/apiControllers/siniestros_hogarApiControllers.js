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

        console.log(req.body)
        // console.log(req.files.license_front[0].filename)

		//let imgRegistroFront;
        //let imgRegistroBack;
        //let imgDenuncia;
		
        //imgRegistroFront = req.files.license_front[0].filename;
        //imgRegistroBack = req.files.license_back[0].filename;
        //imgDenuncia = req.body.complaint.name;
        let clientPeapol;
        let clientCompany;

        if(req.body.id_client) {
            clientPeapol = req.body.id_client
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
            incendio_contenido_total: req.body.consequence.incendio_contenido_total,
            incendio_contenido_parcial: req.body.consequence.incendio_contenido_parcial,
            incendio_edificio_total: req.body.consequence.incendio_edificio_total,
            incendio_edificio_parcial: req.body.consequence.incendio_edificio_parcial,
            granizo: req.body.consequence.granizo,
            vientos_fuertes: req.body.consequence.vientos_fuertes,
            impacto_en_vehiculos_terrestres: req.body.consequence.impacto_en_vehículos_terrestres,
            rayo_directo: req.body.consequence.rayo_directo,
            linderos: req.body.consequence.linderos,
            cristales_rotura_accidental: req.body.consequence.cristales_rotura_accidental,
            cristales_rajadura_accidental: req.body.consequence.cristales_rajadura_accidental,
            mobiliario_daño_parcial: req.body.consequence.mobiliario_daño_parcial,
            mobiliario_robo_parcial: req.body.consequence.mobiliario_robo_parcial,
            mobiliario_robo_total: req.body.consequence.mobiliario_robo_total,
            objetos_daño_parcial: req.body.consequence.objetos_daño_parcial,
            objetos_daño_total: req.body.consequence.objetos_daño_total,
            objetos_robo_total: req.body.consequence.objetos_robo_total,
            notebook_daño_parcial: req.body.consequence.notebook_daño_parcial,
            notebook_daño_total: req.body.consequence.notebook_daño_total,
            notebook_robo_parcial: req.body.consequence.notebook_robo_parcial,
            notebook_robo_total: req.body.consequence.notebook_robo_total,
            electronicos_robo: req.body.consequence.electrónicos_robo,
            electronicos_daño_parcial_accidente: req.body.consequence.electrónicos_daño_parcial_accidente,
            electronicos_daño_parcial_alta_baja_tension: req.body.consequence.electrónicos_daño_parcial_alta_baja_tensión,
            electronicos_daño_total_accidente: req.body.consequence.electrónicos_daño_total_accidente,
            electronicos_daño_total_alta_baja_tension: req.body.consequence.electrónicos_daño_total_alta_baja_tensión,
            bicicletas_robo: req.body.consequence.bicicletas_robo,
            bicicletas_incendio: req.body.consequence.bicicletas_incendio,
            por_agua_daños_al_mobiliario: req.body.consequence.por_agua_daños_al_mobiliario,
            daños_a_objetos: req.body.consequence.daños_a_objetos,
            lesiones_a_personas: req.body.consequence.lesiones_a_personas,
            muerte_a_personas: req.body.consequence.muerte_a_personas,
            otro_tipo_de_bienes: req.body.consequence.otro_tipo_de_bienes,
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