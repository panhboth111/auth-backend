const loaders = require("./loaders");
const express = require("express");
const configs = require("./utilities/configs");
const startServer = async () => {
  const app = express();
  const PORT = parseInt(configs.PORT);
  await loaders(app);
  app.listen(PORT, () => console.log(`server running on port ${PORT}..`));
};
startServer();
