import {User}from "@/models/User";
import mongoose from "mongoose";
import "dotenv/config";

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const pass = body.password;
  if(!pass?.length || pass.length < 5) {
    new Error('password must be atleast 5 characters')
  }
  const newUser = await User.create(body);
  return Response.json(newUser);
}
