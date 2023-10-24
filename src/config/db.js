import mongoose from "mongoose";
import { exit } from "process";

const mongoDBConn = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `MongoDB Server is Connected Successfully ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Server connection faild ${error}`);
    exit(1);
  }
};

export default mongoDBConn;
