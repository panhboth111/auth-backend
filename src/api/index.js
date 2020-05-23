const { Router } = require("express");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
module.exports = () => {
  const privateRouter = Router();
  const publicRouter = Router();
  authRoute(publicRouter);
  userRoute(privateRouter);
  return { privateRouter, publicRouter };
};
