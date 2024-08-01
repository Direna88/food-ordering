import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export async function GET() {
    const session = await getIronSession(cookies(), { 
        password: process.env.SESSION_SECRET,
        cookieName: "user-session",
    })

    // Remove session from browser
    session.destroy()
    return new NextResponse(JSON.stringify({msg: "Sign out successful"}))
}

