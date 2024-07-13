import { NextResponse } from "next/server";
import { User } from "@/models/User";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { cookies } from "next/headers"
import { getIronSession } from "iron-session";


// TODO: cut and paste in Login Route
/** Verify a hashed password */
function verifyPassword(password, hashedPassword) {
  const isValid = bcrypt.compareSync(password, hashedPassword)
  return isValid
}

export async function POST(request) {
  const body = await request.json()
  mongoose.connect(process.env.MONGO_URL);

  let user = await User.findOne({ email: body.email })
  if (verifyPassword(body.password, user.password)) {
    const session = await getIronSession(cookies(), {
      cookieName: "user-session",
      password: process.env.SESSION_SECRET,
      cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Only for https
        maxAge: 60 * 60 * 24 * 7 // 7 days
      }
    })

    // add other user data here
    const profile = {
      username: body.email
    }
    session.profile = profile

    await session.save()
    return new NextResponse(JSON.stringify({ msg: "Login successful" }))
  } else {
    console.log("Incorrect Password")
    return new NextResponse(JSON.stringify({ msg: "Incorrect password" }), {
      status: 401
    })
  }




  console.log(user)

  return new NextResponse("Direna", { status: 201 })
}