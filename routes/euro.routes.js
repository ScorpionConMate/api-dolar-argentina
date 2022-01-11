const { euroControllerMap } = require('../controller/euroController');
const { setRoute } = require('../util/util');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Euro routes',
        values: Object.keys(euroControllerMap).map(v => `/${v}`)
    });
});

router.get('/:type', async (req, res) => {
    setRoute(req, res, euroControllerMap);
});

module.exports = router;
