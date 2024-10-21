import mongoose  from "mongoose";
const {Schema } = mongoose ;

export const userSchema = new Schema ({
  fullName: String,
  email: String,
  password: String,
});