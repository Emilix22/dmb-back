const express = require('express');
const router = express.Router();

const metodosPago = require('../../controllers/apiControllers/metodosPagoApiControllers');

router.get('/', metodosPago.list);

module.exports = router;