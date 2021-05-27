const router = require('express').Router();
const naveController = require('../controllers/naveController');

router.get('/', async(req, res) => {
    try {
        res.json(await naveController.allNaves());

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.post('/', async(req, res) => {
    try {
        const body = req.body;
        res.json(await naveController.newNave(body));

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.put('/', async(req, res) => {
    try {
        const cuerpoDeDatos = req.body;
        res.json(await naveController.modifyNave(cuerpoDeDatos));

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await naveController.deleteNave(id));

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


module.exports = router;