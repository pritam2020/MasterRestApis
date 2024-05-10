import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
     try {
          mongoose.connection.on("connected", () => {
               console.log("connected mongo database successfully");
          });

          mongoose.connection.on("error", (err) => {
               console.log("Error in connection mongo DB. " + err);
          });
          await mongoose.connect(config.databaseUrl as string);
     } catch (err) {
          console.error(
               "Failed to connect to mongoose database during app start up"
          );
          // process.exit(1);
     }
};
export default connectDB;
