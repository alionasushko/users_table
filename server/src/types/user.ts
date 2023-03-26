import { Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  phone: string;
  gender: boolean;
  age: number;
}
