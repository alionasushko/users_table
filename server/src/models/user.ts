import { IUser } from "../types/user";
import { model, Schema } from "mongoose";

const userSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    gender: {
      type: Boolean,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);
