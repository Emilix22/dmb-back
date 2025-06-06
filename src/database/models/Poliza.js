module.exports = (sequelize, dataTypes) => {
    let alias = 'Poliza';

    let cols = {
        id_poliza: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero_poliza: {
            type: dataTypes.STRING
        },
        cobertura: {
            type: dataTypes.STRING
        },
        vigencia_desde: {
            type: dataTypes.DATE
        },
        vigencia_hasta: {
            type: dataTypes.DATE
        },
        tipo_poliza_id: {
            type: dataTypes.INTEGER
        },
        cliente_persona_id: {
            type: dataTypes.INTEGER
        },
        cliente_empresa_id: {
            type: dataTypes.INTEGER
        },
        auto_id: {
            type: dataTypes.INTEGER
        },
        moto_id: {
            type: dataTypes.INTEGER
        },
        ubicacion_riesgo_id: {
            type: dataTypes.INTEGER
        },
        aseguradora_id: {
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
        tableName: 'polizas',
        timestamps: true,
        paranoid: true
    };

    const Poliza = sequelize.define(alias, cols, config)

    Poliza.associate = function(models) {

        Poliza.belongsTo(models.Tipo_poliza,{
            foreignKey: 'tipo_poliza_id',
            as: 'tipos_polizas'
        }),

        Poliza.belongsTo(models.Cliente_persona,{
            foreignKey: 'cliente_persona_id',
            as: 'clientes_personas_poliza'
        }),

        Poliza.belongsTo(models.Auto,{
            foreignKey: 'auto_id',
            as: 'autos'
        }),

        Poliza.belongsTo(models.Moto,{
            foreignKey: 'moto_id',
            as: 'motos'
        }),

        Poliza.belongsTo(models.Ubicacion_riesgo,{
            foreignKey: 'ubicacion_riesgo_id',
            as: 'ubicaciones_riesgos'
        }),

        Poliza.belongsTo(models.Embarcacion,{
            foreignKey: 'embarcacion_id',
            as: 'embarcaciones'
        }),

        Poliza.belongsTo(models.Aseguradora,{
            foreignKey: 'aseguradora_id',
            as: 'aseguradoras'
        }),

        Poliza.belongsTo(models.Cliente_empresa,{
            foreignKey: 'cliente_empresa_id',
            as: 'clientes_empresas_poliza'
        }),

        Poliza.hasMany(models.Siniestro_hogar,{
            foreignKey: 'poliza_id',
            as: 'polizas_siniestro_hogar'
        }),

        Poliza.hasMany(models.Siniestro_consorcio,{
            foreignKey: 'poliza_id',
            as: 'polizas_siniestro_consorcio'
        }),

        Poliza.hasMany(models.Siniestro_auto,{
            foreignKey: 'poliza_id',
            as: 'polizas_siniestro_auto'
        }),

        Poliza.hasMany(models.Siniestro_moto,{
            foreignKey: 'poliza_id',
            as: 'polizas_siniestro_moto'
        })
        
    }   

    return Poliza;
}