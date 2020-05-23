const express = require("express");
const cors = require("cors");
const Router = require("../api");
const verify = require("../utilities/verify");
module.exports = (app) => {
  app.use(express.json());
  app.use(cors());
  const { privateRouter, publicRouter } = Router();
  app.use("/api", publicRouter); // the public routes can be accessed without the token, so no need to put the verify middleware function

  //everytime the user makes a request to the private routes, the request will first go through the verify function
  app.use("/api", verify, privateRouter); // the private routes can only be access if the user has a token, the verify function is used to check that token in the request header
};
