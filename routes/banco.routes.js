const { bancosControllerMap } = require('../controller/bancosController');
const { setRoute } = require('../util/util');

const router = require('express').Router();
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bancos routes',
        values: Object.keys(bancosControllerMap).map(v => `/${v}`)
    });
})
router.get('/:type', async (req, res) => {
    await setRoute(req, res, bancosControllerMap);
});

module.exports = router;
