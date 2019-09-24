const express = require('express');
const poolsController = require('../controllers/poolsController');

const router = express.Router();

router.get('/', poolsController.getPools);

router.get('/:poolId', poolsController.getPool);

router.post('/', poolsController.addPool);

module.exports = router;