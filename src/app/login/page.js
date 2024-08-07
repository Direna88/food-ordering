'use client';
import {useState} from "react";
import {getSession, signIn} from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);

    const response = await fetch("/api/login/", {
      method: "POST",
      body: JSON.stringify({email, password})
    })

    console.log("response", response)
    if (response.ok) {
      console.log("login successful")
      setLoginInProgress(false);
      // redirect here
      window.location.href = "/"
    }
    setLoginInProgress(false);

    //await signIn('credentials', {email, password});
  }
  return (
    <section className="mt-10">
      <h1 className="text-center text-red-500 text-4xl
      mb-4">
        Login
      </h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" name="email" placeholder="email" value={email}
               disabled={loginInProgress}
               onChange={ev => setEmail(ev.target.value)}/>
        <input type="password" name="password" placeholder="password" value={password}
               disabled={loginInProgress}
               onChange={ev => setPassword(ev.target.value)}/>
        <button disabled={loginInProgress} type="submit">Login</button>
      </form>
    </section>
  );
}