import mongoose from "mongoose";
import app from "../server";
import config from "../config/config";

const dbConnection = async () => {
  await mongoose.connect(config.dbUri as string);
  app.listen(config.port, () => {
    console.log("db is running on port", config.port);
  });
};

export default dbConnection