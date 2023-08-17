module.exports = (sequelize, dataTypes) => {

    let alias = 'Cbu_cuenta';

    let cols = {
        id_cbu_cuenta: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cbu_numero: {
            type: dataTypes.STRING
        },
        cuenta_numero: {
            type: dataTypes.STRING
        },
        cuenta_tipo: {
            type: dataTypes.STRING
        },
        banco: {
            type: dataTypes.STRING
        },
        cliente_persona_id: {
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: 'cbu_cuentas',
        timestamps: true,
        paranoid: true
    };

    const Cbu_cuenta = sequelize.define(alias, cols, config)

    Cbu_cuenta.associate = function(models) {

        Cbu_cuenta.belongsTo(models.Cliente_persona,{
            foreignKey: 'cliente_persona_id',
            as: 'clientes_personas_cbu_cuenta'
        })
    }   

    return Cbu_cuenta;
}