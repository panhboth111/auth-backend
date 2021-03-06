const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const configs = require("../../utilities/configs");
module.exports = (router) => {
  router.post("/auth/signup", async (req, res) => {
    console.log(req.body);
    try {
      // destructuring the username and password from the req.body
      const { username, password } = req.body;
      // use the given username to query the database to see if the username is already taken
      // if a user with the username is found, it means the username is already taken
      const userExists = await User.findOne({ username });
      if (userExists) {
        return res.json({ success: false, msg: "Username is already taken" });
      }
      //save user into the database
      const newUser = new User({ username, password });
      await newUser.save();
      return res.json({ success: true, msg: "Signed up successfully!" });
    } catch (error) {
      console.log(error.message);
      return res.json({ success: false, msg: error.message });
    }
  });
  router.post("/auth/signin", async (req, res) => {
    try {
      const { username, password } = req.body;
      //check if any user has that username
      //if no user is found, it means the given username is incorrect
      const userExists = await User.findOne({ username });
      if (!userExists) {
        return res.json({
          success: false,
          msg: "Incorrect username!",
          token: null,
        });
      }
      //creating a token which is composed of the username and password, and uses a JWT_SECRET key to encrypt it
      const token = jwt.sign({ username, password }, configs.JWT_SECRET);
      //return the token to the frontend

      return res.json({ success: true, msg: "signed in successfully", token });
    } catch (error) {
      console.log(error.message);
      return res.json({ success: false, msg: error.message, token: null });
    }
  });
};
