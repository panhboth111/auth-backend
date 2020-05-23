const { Router } = require("express");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const todoRoute = require("./routes/todo");
module.exports = () => {
  // there are two types of routes, public and private
  // the private routes are the ones that can only be accessed if the user has a token (which means he/she is already signed in)
  const privateRouter = Router();
  // the public routes are the ones that can be accessed without having the token such as signin or signup
  const publicRouter = Router();
  authRoute(publicRouter);
  userRoute(privateRouter);
  todoRoute(privateRouter);
  return { privateRouter, publicRouter };
};
