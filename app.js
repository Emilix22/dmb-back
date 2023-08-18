const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const indexRoutes = require('./src/routes/indexRoutes');
const productsApiRoutes = require('./src/routes/apiRoutes/productsApiRoutes');//eliminar luego
const polizasApiRoutes = require('./src/routes/apiRoutes/polizasApiRoutes');
const clientesApiRoutes = require('./src/routes/apiRoutes/clientesApiRoutes');
const siniestros_autoApiRoutes = require('./src/routes/apiRoutes/siniestros_autoApiRoutes');

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
app.use(cors());// hacer lista blanca de sitios

app.use(express.static("public"));

app.use('/', indexRoutes);
app.use('/api/products', productsApiRoutes);// eliminar luego
app.use('/api/polizas', polizasApiRoutes);
app.use('/api/clientes', clientesApiRoutes);
app.use('/api/siniestros_auto', siniestros_autoApiRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor corriendo en puerto', port);
});