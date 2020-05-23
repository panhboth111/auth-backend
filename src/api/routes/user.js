module.exports = (router) => {
  router.get("/user", (req, res) => {
    return res.json(req.user);
  });
};
