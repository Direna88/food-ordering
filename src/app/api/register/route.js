import {User} from "@/models/User";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();
  console.log(body);
  console.log(User);
  mongoose.connect(process.env.MONGO_URL);
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}