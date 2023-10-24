const db = require('../../database/models');
const sequelize = db.sequelize;

const Metodos_pago = db.Metodo_pago;

const controller = {

    list: (req, res) => {
        Metodos_pago.findAll()
        .then(metodos => {
            
            let info = {
                meta: {
                    status : 200,
                    total: metodos.length,
                    url: '/api/metodosPago'
                },
                data: metodos
            }
            return res.status(200).json(info)
        })
        .catch(error => {console.log(error)});
    },

    create: (req, res) => {
        
        const errors = validationResult(req);
        
        if(errors.errors.length > 0){

            return res.status(401).json({error: errors.mapped()});
            
        }else{

            Metodos_pago.findOne({
                where: {nombre_metodo_pago: req.body.nombre_metodo_pago}
            })
            .then(metodoInDB => {
                if(metodoInDB){
                return res.status(401).json({error: 'Ya existe un método de pago registrado con este nombre'});
                }

                Metodos_pago.create({
                    nombre_metodo_pago: req.body.nombre_metodo_pago

                })
                .then(metodo => {

                    let info = {
                        meta: {
                            status : 200,
                            url: '/api/metodosPago/crear'
                        },
                        data: metodo
                    }
                    return res.status(200).json(info)
                })
            })
            .catch(error => {console.log(error)});
        }
 	},

}

module.exports = controller;