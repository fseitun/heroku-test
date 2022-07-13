const getAll = (req, res) => {
  res.send({ param: req.params, query: req.query });
};

module.exports = { getAll };
