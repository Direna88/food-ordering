"use client";
import {useState} from "react";
import Link from "next/link";
export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(event) {
    event.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
      const response = await fetch('/api/register',{
        method: 'POST',
        body: JSON.stringify({name, email, password}),
        headers: {'Content-Type': 'application/json'},
      });
    if (response.ok) {
      setUserCreated(true);
    }
    else {
      setError(true);
    }
    setCreatingUser(false);
  }

  return(
    <section className="mt-10">
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
      {error && (
        <div className="my-4 text-center">
          An error has occurred. <br/>
          Please try again later
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input type="text" placeholder="name" defaultValue={name}
               disabled={creatingUser}
         onChange={event => setName(event.target.value)}/>
        <input type="email" placeholder="email" defaultValue={email}
               disabled={creatingUser}
         onChange={event => setEmail(event.target.value)}/>
        <input type="password" placeholder="password" defaultValue={password}
               disabled={creatingUser}
        onChange={event => setPassword(event.target.value)}/>
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{' '}
          <Link className="underline" href={'/login'}>Login here &raquo;</Link>
        </div>
      </form>
    </section>
  );
}