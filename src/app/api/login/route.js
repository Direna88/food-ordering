import {NextResponse} from "next/server";
import {User} from "@/models/User";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

// TODO: cut and paste in Login Route
/** Verify a hashed password */
function verifyPassword(password, hashedPassword) {
  const isValid = bcrypt.compareSync(password, hashedPassword)
  return isValid
}

export async function POST(request) {
  const body = await request.json()
  mongoose.connect(process.env.MONGO_URL);

  let user = await User.findOne({email: body.email})
  if (verifyPassword(body.password, user.password)) {
    console.log("YESS!!!!")
    return new NextResponse(JSON.stringify({msg: "Login successful"}))
  } else {
    console.log("Noooooooo")
    console.log("Incorrect Password")
    return new NextResponse(JSON.stringify({msg: "Incorrect password"}), {
      status: 401
    })
  }




  console.log(user)

  return new NextResponse("Direna", {status: 201})
}