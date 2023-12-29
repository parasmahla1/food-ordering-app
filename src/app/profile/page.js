"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UserTabs from "../../components/layout/UserTabs"

export default function ProfilePage() {
  const session = useSession();
  const { status } = session;

  const [userName, setUserName] = useState("");
  const [phone,setPhone] = useState('')
  const [stAddress,setStAddress] = useState('')
  const [postalCode,setPostalCode] = useState('')
  const [city,setCity] = useState('')
  const [isAdmin,setIsAdmin] = useState(false)
  const [profileFetched, setProfileFetched] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
      fetch('/api/profile').then(response => {
        response.json().then(data => {
          setPhone(data.phone);
          setCity(data.city)
          setStAddress(data.stAddress)
          setPostalCode(data.postalCode)
          setIsAdmin(data.admin)
          setProfileFetched(true)
        })
      })
    }
  }, [session, status]);

  const handleProfileInfoUpdate = async (e) => {
    e.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName,stAddress,city,phone,postalCode }),
      });
      if (response.ok) resolve();
      else reject();
    });
    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Profile saved!",
      error: "Error",
    });
  };

  if (status === "loading" || !profileFetched) {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }


  return (
    <section className="mt-8">
    <UserTabs isAdmin={isAdmin}/>
      <div className="max-w-md mx-auto mt-8">
        <div className="flex gap-2 items-center">
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={userName}
              onChange={(ev) => setUserName(ev.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              value={session.data.user.email}
              placeholder="email"
              disabled={true}
            />
            <label>Phone</label>
            <input
              type="tel"
              placeholder="Phone No."
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            />
            <label>Street Address</label>
            <input
              type="text"
              placeholder="Street Address"
              value={stAddress}
              onChange={(ev) => setStAddress(ev.target.value)}
            />

            <div className="flex gap-4">
              <div>
                <label>City</label>

                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(ev) => setCity(ev.target.value)}
                />
              </div>
              <div>
                <label>Postal Code</label>
              <input
                type="text"
                placeholder="Postal code"
                value={postalCode}
                onChange={(ev) => setPostalCode(ev.target.value)}
                />
                </div>
            </div>
            <button type="submit" className=" w-[30%] m-auto ">
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
