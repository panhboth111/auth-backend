const express = require("express");
const cors = require("cors");
const Router = require("../api");
const verify = require("../utilities/verify");
module.exports = (app) => {
  app.use(express.json());
  app.use(cors());
  const { privateRouter, publicRouter } = Router();
  app.use("/api", publicRouter);
  app.use("/api", verify, privateRouter);
};
