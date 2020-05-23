const mongoose = require("mongoose");
const configs = require("../utilities/configs");
module.exports = async () => {
  const connection = await mongoose.connect(configs.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return connection.connection.db;
};
