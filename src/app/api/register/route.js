import {User} from "@/models/User";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import {application} from "express";

export async function POST(req) {
  const body = await req.json();
  console.log(body);

  //Ensure the password is hashed
  const hashedPassword = hashPassword(body.password);
  console.log(body);

  //Create the new user object
  const newUser = {
    email: body.email,
    name: body.name,
    password: hashPassword(body.password)
  }
  await mongoose.connect(process.env.MONGO_URL);
  const createdUser = await User.create(newUser);
  return Response.json(createdUser);
}

/** Hash a Password */
function hashPassword(password) {
  const hashedPassword = bcrypt.hashSync(password, 10);
  return hashedPassword;
}

// TODO: cut and paste in Login Route
/** Verify a hashed password */
function verifyPassword(password, hashedPassword) {
  const isValid = bcrypt.compareSync(password, hashedPassword)
  return isValid
}