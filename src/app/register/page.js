"use client";
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";
export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);

  async function handleFormSubmit(event) {
    event.preventDefault();
    setCreatingUser(true);
    await fetch('/api/register',{
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
    });
    setCreatingUser(false);
    setUserCreated(true);
  }

  return(
    <section className="mt-8">
      <h1 className="text-center text-red-500 text-4xl
      mb-4">
        Register
      </h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created.<br />
          Now you can{' '}
          <Link className="underline" href={'/login'}>Login &raquo;</Link>
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" placeholder="email" value={email}
               disabled={creatingUser}
         onChange={event => setEmail(event.target.value)}/>
        <input type="password" placeholder="password" value={password}
               disabled={creatingUser}
        onChange={event => setPassword(event.target.value)}/>
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={'/google.png'} alt={''} width={24} height={32}/>
          Login with Google
        </button>
      </form>
    </section>
  );
}