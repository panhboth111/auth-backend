const databaseLoader = require("./database");
const expressLoader = require("./express");
module.exports = async (app) => {
  await databaseLoader();
  console.log("database initialized");
  await expressLoader(app);
  console.log("express initialized");
};
