import { Schema,model, models } from "mongoose";

const UserSchema = new Schema({
  name: {type: String},
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
  },
  phone: {type: String},
  stAddress: {type: String},
  city: {type: String},
  postalCode: {type: String},
  admin: {type: Boolean, default: false}, 
},{timestamps: true});

export const User = models?.User ||  model('User', UserSchema)
