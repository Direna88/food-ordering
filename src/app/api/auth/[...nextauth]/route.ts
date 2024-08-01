import bcrypt from 'bcrypt';
import * as mongoose from "mongoose";
import {User} from '@/models/User';
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      //name: 'credentials',
      id: 'credentials',
      credentials: {
        //name: { label: "Name", type: "text", placeholder: "john"},
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        //const name = credentials?.name;
        const email = credentials?.username;
        const password = credentials?.password;

        mongoose.connect(process.env.MONGO_URL);
        //const userName = await User.findOne({name});
        const user = await User.findOne({email, password});
        const passwordOk = user && bcrypt.compareSync(password, user.password);

        if (passwordOk) {
          return user;
        } else {
          return null
        }
      }
    })
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
