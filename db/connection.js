import mongoose from "mongoose";

const url = process.env.MONGODB_URL;

export async function ConnectDB() {
  mongoose.connect(url);
}
