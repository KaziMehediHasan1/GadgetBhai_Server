import mongoose from "mongoose";
import { userType } from "./user.validation";

const userModel = new mongoose.Schema<userType>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<userType>("User", userModel);
