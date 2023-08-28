module.exports = (sequelize, dataTypes) => {

    let alias = 'Siniestro_auto';

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
        motivo: {
            type: dataTypes.STRING
        },
        consecuencia: {
            type: dataTypes.STRING
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
            type: dataTypes.INTEGER
        },
        lugar_caracteristicas: {
            type: dataTypes.INTEGER
        },
        registro_frente: {
            type: dataTypes.STRING
        },
        registro_dorso: {
            type: dataTypes.STRING
        },
        conducia_asegurado: {
            type: dataTypes.STRING
        },
        lesionados_dentro_vehiculo: {
            type: dataTypes.STRING
        },
        lesionados_fuera_vehiculo: {
            type: dataTypes.STRING
        },
        vehiculos_terceros_involucrados: {
            type: dataTypes.STRING
        },
        cnc_nombre: {
            type: dataTypes.STRING
        },
        cnc_apellido: {
            type: dataTypes.STRING
        },
        cnc_dni: {
            type: dataTypes.STRING
        },
        cnc_telefono: {
            type: dataTypes.STRING
        },
        cnc_nacimiento: {
            type: dataTypes.DATE
        },
        cnc_nacionalidad: {
            type: dataTypes.STRING
        },
        cnc_calle: {
            type: dataTypes.STRING
        },
        cnc_altura: {
            type: dataTypes.STRING
        },
        cnc_cp: {
            type: dataTypes.STRING
        },
        cnc_provincia: {
            type: dataTypes.STRING
        },
        cnc_localidad: {
            type: dataTypes.STRING
        },
        ldv_cantidad: {
            type: dataTypes.STRING
        },
        ldv_nombre1: {
            type: dataTypes.STRING
        },
        ldv_nombre2: {
            type: dataTypes.STRING
        },
        ldv_nombre3: {
            type: dataTypes.STRING
        },
        ldv_nombre4: {
            type: dataTypes.STRING
        },
        ldv_nombre5: {
            type: dataTypes.STRING
        },
        ldv_apellido1: {
            type: dataTypes.STRING
        },
        ldv_apellido2: {
            type: dataTypes.STRING
        },
        ldv_apellido3: {
            type: dataTypes.STRING
        },
        ldv_apellido4: {
            type: dataTypes.STRING
        },
        ldv_apellido5: {
            type: dataTypes.STRING
        },
        ldv_dni1: {
            type: dataTypes.STRING
        },
        ldv_dni2: {
            type: dataTypes.STRING
        },
        ldv_dni3: {
            type: dataTypes.STRING
        },
        ldv_dni4: {
            type: dataTypes.STRING
        },
        ldv_dni5: {
            type: dataTypes.STRING
        },
        ldv_telefono1: {
            type: dataTypes.STRING
        },
        ldv_telefono2: {
            type: dataTypes.STRING
        },
        ldv_telefono3: {
            type: dataTypes.STRING
        },
        ldv_telefono4: {
            type: dataTypes.STRING
        },
        ldv_telefono5: {
            type: dataTypes.STRING
        },
        lfv_cantidad: {
            type: dataTypes.STRING
        },
        lfv_nombre1: {
            type: dataTypes.STRING
        },
        lfv_nombre2: {
            type: dataTypes.STRING
        },
        lfv_nombre3: {
            type: dataTypes.STRING
        },
        lfv_nombre4: {
            type: dataTypes.STRING
        },
        lfv_nombre5: {
            type: dataTypes.STRING
        },
        lfv_apellido1: {
            type: dataTypes.STRING
        },
        lfv_apellido2: {
            type: dataTypes.STRING
        },
        lfv_apellido3: {
            type: dataTypes.STRING
        },
        lfv_apellido4: {
            type: dataTypes.STRING
        },
        lfv_apellido5: {
            type: dataTypes.STRING
        },
        lfv_dni1: {
            type: dataTypes.STRING
        },
        lfv_dni2: {
            type: dataTypes.STRING
        },
        lfv_dni3: {
            type: dataTypes.STRING
        },
        lfv_dni4: {
            type: dataTypes.STRING
        },
        lfv_dni5: {
            type: dataTypes.STRING
        },
        lfv_telefono1: {
            type: dataTypes.STRING
        },
        lfv_telefono2: {
            type: dataTypes.STRING
        },
        lfv_telefono3: {
            type: dataTypes.STRING
        },
        lfv_telefono4: {
            type: dataTypes.STRING
        },
        lfv_telefono5: {
            type: dataTypes.STRING
        },
        vti_patente: {
            type: dataTypes.STRING
        },
        vti_aseguradora: {
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
        tableName: 'siniestros_auto',
        timestamps: true,
        paranoid: true
    };

    const Siniestro_auto = sequelize.define(alias, cols, config)

    Siniestro_auto.associate = function(models) {
        Siniestro_auto.belongsTo(models.Cliente_persona,{
            foreignKey: 'cliente_persona_id',
            as: 'clientes_personas_siniestro_auto'
        }),

        Siniestro_auto.belongsTo(models.Cliente_empresa,{
            foreignKey: 'cliente_empresa_id',
            as: 'clientes_empresas_siniestro_auto'
        })
    }

    return Siniestro_auto;
}