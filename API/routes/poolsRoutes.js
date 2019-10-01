const express = require('express');
const poolsController = require('../controllers/poolsController');

const router = express.Router();

router.get('/', poolsController.getPools);

router.get('/:poolId/lastoccupancy', poolsController.getLastOccupancy);

router.get('/:poolId/occupancy?', poolsController.getOccupancy);

router.get('/:poolId', poolsController.getPool);

module.exports = router;
