const loaders = require("./loaders");
const express = require("express");
const configs = require("./utilities/configs");
const startServer = async () => {
  // creating an express app
  const app = express();
  const PORT = parseInt(configs.PORT);
  await loaders(app); //passing the app to the loaders so that the expressLoader can have that app
  app.listen(PORT, () => console.log(`server running on port ${PORT}..`));
};
startServer();
