const { casasControllerMap } = require('../controller/casasController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Casas routes',
        values: Object.keys(casasControllerMap).map(v => `/${v}`)
    });
});

router.get('/:casa', (req, res) => {
    const { casa } = req.params;
    res.status(200).json({
        message: `Casas routes ${casa}`,
        values: Object.keys(casasControllerMap[casa]).map(v => `/${v}`)
    });
});

router.get('/:casa/:name', async (req, res) => {
    const { casa, name } = req.params;

    if (!casasControllerMap[casa]) {
        res.status(404).send({
            message: `La casa ${casa} no existe`
        });
    }

    const method = casasControllerMap[casa][name];
    if (!method) {
        res.status(404).send({
            message: `El metodo ${name} no existe`
        });
    }
    await method(req, res);


});

module.exports = router;
