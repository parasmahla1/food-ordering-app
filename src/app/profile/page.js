"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function ProfilePage() {
  const session = useSession();
  const { status } = session;

  const [userName, setUserName] = useState("");
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
    }
  }, [session, status]);

  const handleProfileInfoUpdate = async (e) => {
    e.preventDefault();
    setSaved(false);
    setIsSaving(true);
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName }),
    });
    if (response.ok) {
      setIsSaving(false);
      setSaved(true);
    }
  };



  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session.data.user.image;

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
      <div className="max-w-md mx-auto">
        {saved && (
          <h2 className="text-center bg-green-100 p-4 rounded-lg border border-green-300 ">
            Profile Saved!
          </h2>
        )}
        {isSaving && (
          <h2 className="text-center bg-blue-100 p-4 rounded-lg border border-blue-300 ">
            Saving...
          </h2>
        )}
        <div className="flex gap-2 items-center">
        
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              type="text"
              placeholder="Name"
              value={userName}
              onChange={(ev) => setUserName(ev.target.value)}
            />
            <input
              type="email"
              value={session.data.user.email}
              disabled={true}
            />
            <button type="submit" className=" w-[30%] m-auto ">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
