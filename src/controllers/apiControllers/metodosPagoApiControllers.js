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

}

module.exports = controller;