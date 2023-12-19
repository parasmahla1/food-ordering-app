import { Schema } from "moongose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: {type: String, required: true, validate: () => {}}
});
