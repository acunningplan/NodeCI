const { clearHash } = require("../services/cache");

module.exports = async (req, res, next) => {
  // Wait till function is completed before calling middleware (clearing the cache)
  await next();

  clearHash(req.user.id);
};
