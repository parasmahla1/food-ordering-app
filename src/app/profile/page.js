"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const session = useSession();
  const { status } = session;

  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
    }
  }, [session, status]);

  const handleProfileInfoUpdate = async (e) => {
    e.preventDefault();

    

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName }),
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
            <button type="submit" className=" w-[30%] m-auto ">
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
