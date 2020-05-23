const jwt = require("jsonwebtoken");
const configs = require("./configs");
module.exports = function auth(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.json({ token_failed: "Access Denied" });
  try {
    const verified = jwt.verify(token, configs.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.json(err.message);
  }
};
