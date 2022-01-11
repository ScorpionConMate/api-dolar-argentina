const router = require('express').Router();
const { setRoute } = require('../util/util');
const { bcraControllerMap } = require('../controller/bcraController');

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bcra routes',
        values: Object.keys(bcraControllerMap).map(v => `/${v}`)
    });
});

router.get('/:type', async (req, res) => {
    setRoute(req, res, bcraControllerMap);
});

module.exports = router;
