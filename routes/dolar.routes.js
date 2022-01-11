const { dolarControllerMap } = require('../controller/dolarController');
const { setRoute } = require('../util/util');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Dolar routes',
        values: Object.keys(dolarControllerMap).map(v => `/${v}`)
    });
});

router.get('/:type', async (req, res) => {
    setRoute(req, res, dolarControllerMap);
});

module.exports = router;
