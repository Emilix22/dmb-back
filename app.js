const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fs = require('fs');
const https = require('https')

const indexRoutes = require('./src/routes/indexRoutes');
const polizasApiRoutes = require('./src/routes/apiRoutes/polizasApiRoutes');
const clientesApiRoutes = require('./src/routes/apiRoutes/clientesApiRoutes');
const siniestros_autoApiRoutes = require('./src/routes/apiRoutes/siniestros_autoApiRoutes');
const siniestros_motoApiRoutes = require('./src/routes/apiRoutes/siniestros_motoApiRoutes');
const siniestros_hogarApiRoutes = require('./src/routes/apiRoutes/siniestros_hogarApiRoutes');
const siniestros_consorcioApiRoutes = require('./src/routes/apiRoutes/siniestros_consorcioApiRoutes');
const siniestros_otroApiRoutes = require('./src/routes/apiRoutes/siniestros_otroApiRoutes');
const usuariosApiRoutes = require('./src/routes/apiRoutes/usuariosApiRoutes');
const metodosPagoApiRoutes = require('./src/routes/apiRoutes/metodosPagoApiRoutes');
const reportesApiRoutes = require('./src/routes/apiRoutes/reportesApiRoutes');

/****************************************** Configuración CORS ***************************************/
const listaBlanca = ['http://localhost:5173/', 'https://emilixweb.com/'];
const corsOptions = {
    origin: (origin, callback) => {
        if (listaBlanca.indexOf(origin != -1)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
/*************************************************************************************************** */

app.set('view engine', 'ejs');// si no va a tener vistas desinstalar
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: 'Esto es secreto!!',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(express.static("public"));

app.use('/', indexRoutes);
app.use('/api/polizas', polizasApiRoutes);
app.use('/api/clientes', clientesApiRoutes);
app.use('/api/siniestros_auto', siniestros_autoApiRoutes);
app.use('/api/siniestros_moto', siniestros_motoApiRoutes);
app.use('/api/siniestros_hogar', siniestros_hogarApiRoutes);
app.use('/api/siniestros_consorcio', siniestros_consorcioApiRoutes);
app.use('/api/siniestros_otro', siniestros_otroApiRoutes);
app.use('/api/usuarios', usuariosApiRoutes);
app.use('/api/metodosPago', metodosPagoApiRoutes);
app.use('/api/reportes', reportesApiRoutes);

/**************************servidor para https****************** */
// const port = process.env.PORT || 3000;
// https.createServer({
//     cert: fs.readFileSync('fullchain.pem'),
//     key: fs.readFileSync('privkey.pem')
// }, app).listen(port, () => {
//     console.log('Servidor corriendo en puerto', port);
// });
/***************************************************************** */

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor corriendo en puerto', port);
});
