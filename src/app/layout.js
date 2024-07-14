import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../../src/components/layout/Header";
import { SessionProvider } from "next-auth/react";
import { AppProvider } from "@/components/AppContext";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export const metadata = {
  title: "Food Ordering",
  description: "",
};


export default async function RootLayout({ children }) {
  const session = await getIronSession(cookies(), { password: process.env.SESSION_SECRET, cookieName: "user-session" })
  
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          {/*<AppProvider>*/}
          <Header status={session.profile ? "authenticated" : "" } profile = {session.profile} />
          {children}
          <footer className="border-t p-8 text-center text-gray-500 mt-16">
            &copy; 2024 All rights reserved
          </footer>
          {/*</AppProvider>*/}
        </main>

      </body>
    </html>
  );
}
