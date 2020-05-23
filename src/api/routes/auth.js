const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const configs = require("../../utilities/configs");
module.exports = (router) => {
  router.post("/auth/signup", async (req, res) => {
    try {
      const { username, password } = req.body;
      const userExists = await User.findOne({ username });
      if (userExists) {
        return res.json("Username is already taken");
      }
      const newUser = new User({ username, password });
      await newUser.save();
      return res.json("Signed up successfully!");
    } catch (error) {
      return res.json(err.message);
    }
  });
  router.post("/auth/signin", async (req, res) => {
    try {
      const { username, password } = req.body;
      const userExists = await User.findOne({ username });
      if (!userExists) {
        return res.json("Incorrect username!");
      }
      const token = jwt.sign({ username, password }, configs.JWT_SECRET);
      return res.json(token);
    } catch (error) {}
  });
};
