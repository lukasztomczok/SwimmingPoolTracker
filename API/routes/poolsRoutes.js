const express = require('express');
const poolsController = require('../controllers/poolsController');

const router = express.Router();

router.get('/:poolId', poolsController.getPool);

module.exports = router;