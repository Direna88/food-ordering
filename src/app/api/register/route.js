import {User} from "@/models/User";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export async function POST(req) {
  const body = await req.json();
  hashPassword(body.password)
  console.log(body);
  const newUser  = {
    email: body.email,
    password:   hashPassword(body.password)
  }
  mongoose.connect(process.env.MONGO_URL);
  const createdUser = await User.create(newUser);
  return Response.json(createdUser);
}

/** Hash a Password */
function hashPassword(password) {
  const hashedPassword = bcrypt.hashSync(password, 10)
  return hashedPassword
}

// TODO: cut and paste in Login Route
/** Verify a hashed password */
function verifyPassword(password, hashedPassword) {
  const isValid = bcrypt.compareSync(password, hashedPassword)
  return isValid
}