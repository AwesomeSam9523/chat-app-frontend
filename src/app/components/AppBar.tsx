"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link"
export default function AppBar() {
  const session = useSession();
  return (
    <div className="flex justify-end gap-4 bg-white rounded-md bg-opacity-55  pr-4 py-6 text-white  backdrop-blur-md text-2xl fixed top-0 left-0 right-0">
      {session.status === "authenticated" ? (
        <div className="flex w-full pl-4 justify-between gap-8 items-center">
          <div className="flex justify-start gap-2 items-center">
            <div>
              <Image
                className="rounded-full"
                src={`${session.data.user?.image}`}
                width="50"
                height="50"
                alt="profile image"
              />
            </div>

            <div className="text-black px-4">{session.data.user?.name}</div>
          </div>
          <button
            className="hover:text-blue-800 text-black"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      ) : null}
      {session.status === "unauthenticated" ? (
        <button
          className="hover:text-blue-800  text-black"
          onClick={() => signIn()}
        >
          Login
        </button>
      ) : null}
      {session.status === "unauthenticated" ? (
        <button
          className=" hover:text-blue-800  text-black"
          onClick={() => signIn()}
        >
          Register
        </button>
      ) : null}
      {
        <Link href="/therapist" >
          <button className="text-black">Therapy</button>
        </Link>
      }
    </div>
  );
}
