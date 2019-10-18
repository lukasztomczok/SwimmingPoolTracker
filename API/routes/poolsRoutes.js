const express = require('express');

module.exports = ({poolsController}) => {
  const router = express.Router();

  router.get('/', poolsController.getPools);

  router.get('/:poolId/lastoccupancy', poolsController.getLastOccupancy);

  router.get('/:poolId/occupancy?', poolsController.getOccupancy);

  router.get('/:poolId', poolsController.getPool);
  
  return router;
}
