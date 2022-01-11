// routes
const router = require('express').Router();
const dolarRouter = require('./dolar.routes');
const bancoRouter = require('./banco.routes');
const euroRouter = require('./euro.routes');
const realRouter = require('./real.routes');
const bcraRouter = require('./bcra.routes');
const evolucionRouter = require('./evolucion.routes');
const casasRouter = require('./casas.routes');
// controllers
const riesgoController = require('../controller/riesgoController');
const { dolarController } = require('../controller/dolarController');

/**
 * @description Rutas dolar
 */
router.use('/dolar', dolarRouter);

/**
 * @description Rutas bancos
 */

router.use('/bancos', bancoRouter);

/**
 * @description Ruta riesgo pais
 */
router.get('/riesgopais', riesgoController.getRiesgoPais)

/**
 * @description Rutas euro
 */
router.use('/euro', euroRouter);

/**
 * @description Rutas real
 */
router.use('/real', realRouter);

/**
 * @description Rutas Reservas y Circulante
 */
router.use('/bcra', bcraRouter);

/**
 * @description Rutar casas de cambio
 */
router.use('/casas', casasRouter);

/**
 * @description Rutas evolución mensual
 */
router.use('/evolucion', evolucionRouter);

router.get('/all', dolarController.getAllValues);

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Routes',
        values: [
            '/dolar',
            '/bancos',
            '/euro',
            '/real',
            '/bcra',
            '/evolucion',
            '/casas',
            '/all',
            '/riesgopais'
        ]
    });
});

module.exports = router
