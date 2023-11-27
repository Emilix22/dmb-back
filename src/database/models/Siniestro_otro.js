module.exports = (sequelize, dataTypes) => {

    let alias = 'Siniestro_otro';

    let cols = {
        id_siniestro: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente_persona_id: {
            type: dataTypes.INTEGER
        },
        cliente_empresa_id: {
            type: dataTypes.INTEGER
        },
        fecha_siniestro: {
            type: dataTypes.DATE
        },
        hora_siniestro: {
            type: dataTypes.STRING
        },
        poliza_id: {
            type: dataTypes.INTEGER
        },
        lugar_calle: {
            type: dataTypes.STRING
        },
        lugar_altura: {
            type: dataTypes.STRING
        },
        lugar_cp: {
            type: dataTypes.STRING
        },
        lugar_provincia: {
            type: dataTypes.STRING
        },
        lugar_localidad: {
            type: dataTypes.STRING
        },
        descripcion_hechos: {
            type: dataTypes.STRING
        },
        equipos_objetos_siniestrados: {
            type: dataTypes.STRING
        },
        denuncia_policial: {
            type: dataTypes.STRING
        },
        estado: {
            type: dataTypes.STRING
        },
        observaciones: {
            type: dataTypes.STRING
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
        tableName: 'siniestros_otro',
        timestamps: true,
        paranoid: true
    };

    const Siniestro_otro = sequelize.define(alias, cols, config)

    Siniestro_otro.associate = function(models) {
        Siniestro_otro.belongsTo(models.Cliente_persona,{
            foreignKey: 'cliente_persona_id',
            as: 'clientes_personas_siniestro_otro'
        }),

        Siniestro_otro.belongsTo(models.Cliente_empresa,{
            foreignKey: 'cliente_empresa_id',
            as: 'clientes_empresas_siniestro_otro'
        }),

        Siniestro_otro.belongsTo(models.Poliza,{
            foreignKey: 'poliza_id',
            as: 'polizas_siniestro_otro'
        })
    }

    return Siniestro_otro;
}