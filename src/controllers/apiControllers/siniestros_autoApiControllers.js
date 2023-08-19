const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Otra forma de llamar a los modelos
const Siniestros_auto = db.Siniestro_auto;
const Clientes_personas = db.Cliente_persona;

const controller = {    

    list: (req, res) => {
        Siniestros_auto.findAll({
            include: [{association: 'clientes_personas_siniestro_auto'}, {association: 'clientes_empresas_siniestro_auto'}]
        })
        .then(siniestros => {
            let info = {
                meta: {
                    status : 200,
                    total: siniestros.length,
                    url: '/api/siniestros_auto'
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

		let imgRegistroFront;
        let imgRegistroBack;
        //let imgDenuncia;
		
        imgRegistroFront = req.files.license_front[0].filename;
        imgRegistroBack = req.files.license_back[0].filename;
        //imgDenuncia = req.body.complaint.name; 

		Siniestros_auto.create({

            cliente_persona_id: req.body.id_client,
            cliente_empresa_id: null,
            motivo: req.body.raison,
            consecuencia: req.body.consequence,
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
            lesionados_fuera_vehiculo: req.body.question3,
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
            ldv_nombre3: req.body.iic_name3,
            ldv_nombre4: req.body.iic_name4,
            ldv_nombre5: req.body.iic_name5,
            ldv_apellido1: req.body.iic_surname1,
            ldv_apellido2: req.body.iic_surname2,
            ldv_apellido3: req.body.iic_surname3,
            ldv_apellido4: req.body.iic_surname4,
            ldv_apellido5: req.body.iic_surname5,
            ldv_dni1: req.body.iic_dni1,
            ldv_dni2: req.body.iic_dni2,
            ldv_dni3: req.body.iic_dni3,
            ldv_dni4: req.body.iic_dni4,
            ldv_dni5: req.body.iic_dni5,
            ldv_telefono1: req.body.iic_phone1,
            ldv_telefono2: req.body.iic_phone2,
            ldv_telefono3: req.body.iic_phone3,
            ldv_telefono4: req.body.iic_phone4,
            ldv_telefono5: req.body.iic_phone5,
            lfv_cantidad: req.body.ioc_quantity,
            lfv_nombre1: req.body.iic_name1,
            lfv_nombre2: req.body.iic_name2,
            lfv_nombre3: req.body.iic_name3,
            lfv_nombre4: req.body.iic_name4,
            lfv_nombre5: req.body.iic_name5,
            lfv_apellido1: req.body.iic_surname1,
            lfv_apellido2: req.body.iic_surname2,
            lfv_apellido3: req.body.iic_surname3,
            lfv_apellido4: req.body.iic_surname4,
            lfv_apellido5: req.body.iic_surname5,
            lfv_dni1: req.body.iic_dni1,
            lfv_dni2: req.body.iic_dni2,
            lfv_dni3: req.body.iic_dni3,
            lfv_dni4: req.body.iic_dni4,
            lfv_dni5: req.body.iic_dni5,
            lfv_telefono1: req.body.iic_phone1,
            lfv_telefono2: req.body.iic_phone2,
            lfv_telefono3: req.body.iic_phone3,
            lfv_telefono4: req.body.iic_phone4,
            lfv_telefono5: req.body.iic_phone5,
            vti_patente: req.body.oc_patent,
            vti_aseguradora: req.body.oc_insurance
             
        })
        .then(siniestro_auto => {
            let info = {
                meta: {
                    status : 200,
                    url: '/api/siniestros_auto/crear'
                },
                data: siniestro_auto
            }
            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
 	}

    

};

module.exports = controller;