const getPool = (req, res) => {
  console.log('');
  return res.send(req.params.poolId);
};

module.exports = { getPool };
