import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import mongoose from "mongoose";
import {getServerSession} from "next-auth";
import {User} from "@/models/User";

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const session = await getServerSession(authOptions);
  const email = session.user.email;

  if('name' in data) {
    //update user name
    console.log({email, update:{name:data.name}});
    await User.updateOne({email}, {name:data.name})
  }

  return Response.json(true);
}