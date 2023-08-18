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

        console.log(req.body.formData)        
		// let imgRegistroFront;
        // let imgRegistroBack;
        // //let imgDenuncia;
		
		// //imgRegistroFront = req.file.filename;
        // //imgRegistroBack = req.file.filename;
        // //imgDenuncia = req.body.complaint.name; 

		// Siniestros_auto.create({

        //     cliente_persona_id: req.body.formData.id_client,
        //     cliente_empresa_id: null,
        //     motivo: req.body.formData.raison,
        //     consecuencia: req.body.formData.consequence,
        //     lugar_calle: req.body.formData.street,
        //     lugar_altura: req.body.formData.door,
        //     lugar_cp: req.body.formData.postalCode,
        //     lugar_provincia: req.body.formData.state.name,
        //     lugar_localidad: req.body.formData.city,
        //     descripcion_hechos: req.body.formData.description,
        //     lugar_caracteristicas: req.body.formData.characteristics,
        //     registro_frente: 'sasss',
        //     registro_dorso: 'sasasas',
        //     conducia_asegurado: req.body.formData.question1,
        //     lesionados_dentro_vehiculo: req.body.formData.question2,
        //     lesionados_fuera_vehiculo: req.body.formData.question3,
        //     vehiculos_terceros_involucrados: req.body.formData.question4,
        //     cnc_nombre: req.body.formData.driver_not_client.dnc_name,
        //     cnc_apellido: req.body.formData.driver_not_client.dnc_surname,
        //     cnc_dni: req.body.formData.driver_not_client.dnc_DNI,
        //     cnc_telefono: req.body.formData.driver_not_client.dnc_phone,
        //     cnc_nacimiento: req.body.formData.driver_not_client.dnc_birthday,
        //     cnc_nacionalidad: req.body.formData.driver_not_client.dnc_nacionality,
        //     cnc_calle: req.body.formData.driver_not_client.dnc_street,
        //     cnc_altura: req.body.formData.driver_not_client.dnc_door,
        //     cnc_cp: req.body.formData.driver_not_client.dnc_postalCode,
        //     cnc_provincia: req.body.formData.driver_not_client.dnc_state.name,
        //     cnc_localidad: req.body.formData.driver_not_client.dnc_city,
        //     ldv_cantidad: req.body.formData.injured_in_car.iic_quantity,
        //     ldv_nombre1: req.body.formData.injured_in_car.iic_name1,
        //     ldv_nombre2: req.body.formData.injured_in_car.iic_name2,
        //     ldv_nombre3: req.body.formData.injured_in_car.iic_name3,
        //     ldv_nombre4: req.body.formData.injured_in_car.iic_name4,
        //     ldv_nombre5: req.body.formData.injured_in_car.iic_name5,
        //     ldv_apellido1: req.body.formData.injured_in_car.iic_surname1,
        //     ldv_apellido2: req.body.formData.injured_in_car.iic_surname2,
        //     ldv_apellido3: req.body.formData.injured_in_car.iic_surname3,
        //     ldv_apellido4: req.body.formData.injured_in_car.iic_surname4,
        //     ldv_apellido5: req.body.formData.injured_in_car.iic_surname5,
        //     ldv_dni1: req.body.formData.injured_in_car.iic_dni1,
        //     ldv_dni2: req.body.formData.injured_in_car.iic_dni2,
        //     ldv_dni3: req.body.formData.injured_in_car.iic_dni3,
        //     ldv_dni4: req.body.formData.injured_in_car.iic_dni4,
        //     ldv_dni5: req.body.formData.injured_in_car.iic_dni5,
        //     ldv_telefono1: req.body.formData.injured_in_car.iic_phone1,
        //     ldv_telefono2: req.body.formData.injured_in_car.iic_phone2,
        //     ldv_telefono3: req.body.formData.injured_in_car.iic_phone3,
        //     ldv_telefono4: req.body.formData.injured_in_car.iic_phone4,
        //     ldv_telefono5: req.body.formData.injured_in_car.iic_phone5,
        //     lfv_cantidad: req.body.formData.injured_out_car.ioc_quantity,
        //     lfv_nombre1: req.body.formData.injured_out_car.iic_name1,
        //     lfv_nombre2: req.body.formData.injured_out_car.iic_name2,
        //     lfv_nombre3: req.body.formData.injured_out_car.iic_name3,
        //     lfv_nombre4: req.body.formData.injured_out_car.iic_name4,
        //     lfv_nombre5: req.body.formData.injured_out_car.iic_name5,
        //     lfv_apellido1: req.body.formData.injured_out_car.iic_surname1,
        //     lfv_apellido2: req.body.formData.injured_out_car.iic_surname2,
        //     lfv_apellido3: req.body.formData.injured_out_car.iic_surname3,
        //     lfv_apellido4: req.body.formData.injured_out_car.iic_surname4,
        //     lfv_apellido5: req.body.formData.injured_out_car.iic_surname5,
        //     lfv_dni1: req.body.formData.injured_out_car.iic_dni1,
        //     lfv_dni2: req.body.formData.injured_out_car.iic_dni2,
        //     lfv_dni3: req.body.formData.injured_out_car.iic_dni3,
        //     lfv_dni4: req.body.formData.injured_out_car.iic_dni4,
        //     lfv_dni5: req.body.formData.injured_out_car.iic_dni5,
        //     lfv_telefono1: req.body.formData.injured_out_car.iic_phone1,
        //     lfv_telefono2: req.body.formData.injured_out_car.iic_phone2,
        //     lfv_telefono3: req.body.formData.injured_out_car.iic_phone3,
        //     lfv_telefono4: req.body.formData.injured_out_car.iic_phone4,
        //     lfv_telefono5: req.body.formData.injured_out_car.iic_phone5,
        //     vti_patente: req.body.formData.other_car.oc_patent,
        //     vti_aseguradora: req.body.formData.other_car.oc_insurance,
             
        // })
        // .then(siniestro_auto => {
        //     let info = {
        //         meta: {
        //             status : 200,
        //             url: '/api/siniestros_auto/crear'
        //         },
        //         data: siniestro_auto
        //     }
        //     return res.status(200).json(info)
        // })
        // .catch(error => {console.log(error)});
 	}

    

};

module.exports = controller;