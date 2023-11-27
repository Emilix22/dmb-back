const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const Clientes_personas = db.Cliente_persona;
const Clientes_empresas = db.Cliente_empresa;

const controller = {

    AddClienteMercantilAndina: (req, res) => {

        return console.log(req.body)

        Clientes_personas.findOne({
            where: {dni: req.body.dni}
        })
        .then(userInDB => {
            if(userInDB){
            return res.status(401).json({error: 'Ya existe un cliente registrado con este N° de DNI'});
            }

            Clientes_personas.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                dni: req.body.dni,
                email: req.body.email,
                celular: req.body.celular,
                // tarjeta_circula: img,
                telefono_fijo: req.body.telefono_fijo,
                calle: req.body.calle,
                altura: req.body.altura,
                piso: req.body.piso,
                departamento: req.body.departamento,
                cp: req.body.cp,
                localidad: req.body.localidad,
                provincia: req.body.provincia,
                metodo_pago_id: req.body.metodo_pago_id,
                vendedor_id: req.body.vendedor_id

            })
            .then(cliente => {

                let info = {
                    meta: {
                        status : 200,
                        url: '/api/reportes/AddClienteMercantilAndina'
                    },
                    data: cliente
                }
                return res.status(200).json(info)
            })
        })
        .catch(error => {console.log(error)});
 	},
}

module.exports = controller;