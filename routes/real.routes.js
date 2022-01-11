const router = require('express').Router();
const { realControllerMap } = require('../controller/realController');
const { setRoute } = require('../util/util');

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Real routes',
        values: Object.keys(realControllerMap).map(v => `/${v}`)
    });
});
router.get("/:type", async (req, res) => {
    setRoute(req, res, realControllerMap);
});

module.exports = router;
