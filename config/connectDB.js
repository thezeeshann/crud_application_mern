import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connectWithDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log(error);
      console.log("db facing connection issue");
      process.exit(1);
    });
};

export default connectWithDB;
