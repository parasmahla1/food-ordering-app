"use client";
import {signIn} from "next-auth/react"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress,setLoginInProgress]  = useState(false)

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);
    await signIn('credentials',{email,password,callbackUrl:'/'})
    setLoginInProgress(false)
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          name="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loginInProgress}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loginInProgress}
        />
        <button type="submit" disabled={loginInProgress}>
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button type="button" className="flex gap-4 items-center justify-center" onClick={() => signIn('google')}>
          <Image src={"/google.png"} alt="google" width={32} height={32}  />
          Login with google
        </button>
        <div className="text-center my-4 border-t text-gray-500 p-4">
          Don&apos;t have an account?{" "}
          <Link className="underline" href={"/register"}>
            Register here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
