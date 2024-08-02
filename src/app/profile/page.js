'use client';
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import {useState, useEffect} from "react";

export default function ProfilePage() {
  const session = useSession();
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const {status} = session;

  useEffect(() => {
    if (status === 'authenticated') {
      setUserName(session.data.user.name)
    }
  }, [session, status])

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name:userName}),
    });

  }
  console.log(session);

  if (status === 'loading') {
    return 'Loading...';
  }

   // if (status === 'unauthenticated') {
   //  redirect('/login');
   // }

  return (
    <section className="mt-10">
      <h1 className="text-center text-red-500 text-4xl
      mb-4">
        Profile
      </h1>
      <div className="max-w-xs mx-auto">
        <h2 className="text-center bg-green-100 p-4 rounded-lg border
         border-green-300">
          Profile saved!
        </h2>
        <div className="items-center">
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <label>
              First and Last Name
            </label>
            <input
              type="text"
              placeholder="First and last name"
              value={userName} onChange={ev => setUserName(ev.target.value)}/>

            <label>Email</label>
            {/*<input type="email"
            disabled={true}*/}
            {/*value={session.data.user.email}*/}
            {/*placeholder={'email'}*/}
            {/*/>*/}

            <label>Phone</label>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone} onChange={ev => setPhone(ev.target.value)}/>

            <label>Street Address</label>
            <input
              type="text"
              placeholder="Street Address"
              value={streetAddress} onChange={ev => setStreetAddress(ev.target.value)}/>

            <div className="flex gap-2">
              <div>
                <label>Postal Code</label>
                <input
                  type="text"
                  placeholder="Postal code"
                  value={postalCode} onChange={ev => setPostalCode(ev.target.value)}/>
              </div>
              <div>
                <label>City</label>
                <input
                  type="text"
                  placeholder="City"
                  value={city} onChange={ev => setCity(ev.target.value)}/>
              </div>
            </div>

            <label>Country</label>
            <input
              type="text"
              placeholder="Country"
              value={country} onChange={ev => setCountry(ev.target.value)}/>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  )
}