const router = require('express').Router();
const { dolarController } = require('../controller/dolarController');
const { euroController } = require('../controller/euroController');
const { realController } = require('../controller/realController');
const { setRoute } = require('../util/util');

const evolucionMap = {
    dolaroficial: dolarController.getEvolucionDolarOficial,
    dolarblue: dolarController.getEvolucionDolarBlue,
    realoficial: realController.getEvolucionReal,
    eurooficial: euroController.getEvolucionEuro,
};

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Evolucion routes',
        values: Object.keys(evolucionMap).map(v => `/${v}`)
    });
});

router.get('/:type', async (req, res) => {
    setRoute(req, res, evolucionMap);
});

module.exports = router;
