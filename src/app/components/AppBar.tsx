"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image";
export default function AppBar() {
    const session = useSession()
    return <div className="flex justify-end gap-4 bg-white rounded-md bg-opacity-55  pr-4 py-6 text-white  backdrop-blur-md">
        {session.status === "authenticated" ? (
            <div className="flex w-full pl-4 justify-between gap-8 items-center">
                <div className="flex justify-start gap-2 items-center">
                    <div><Image src={`${session.data.user?.image}`} width="30" height="30" alt="profile image" /></div>

                    <div className="text-black">{session.data.user?.name}</div>
                </div>
                <button className="hover:text-blue-800 text-black" onClick={() => signOut()}>Logout</button>
            </div>
        ) : null}
        {session.status === "unauthenticated" ? (<button className="hover:text-blue-800  text-black" onClick={() => signIn()}>Login</button>) : null}
        {session.status === "unauthenticated" ? (<button className=" hover:text-blue-800  text-black" onClick={() => signIn()}>Register</button>) : null}
    </div>
}

