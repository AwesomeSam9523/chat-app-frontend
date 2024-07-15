"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image";
import { ButtonHTMLAttributes } from "react";
export default function AppBar() {
    const session = useSession()
    return <div className="flex justify-end gap-4 bg-purple-900 pr-4 py-4 text-white ">
        {session.status === "authenticated" ? (
            <div className="flex w-full pl-4 justify-between gap-8 items-center">
                <div className="flex justify-start gap-2 items-center">
                    <div><Image src={`${session.data.user?.image}`} width="30" height="30" alt="profile image" /></div>

                    <div>{session.data.user?.name}</div>
                </div>
                <button className="hover:scale-110 hover:shadow-md" onClick={() => signOut()}>Logout</button>
            </div>
        ) : null}
        {session.status === "unauthenticated" ? (<button className="hover:scale-110 hover:shadow-md" onClick={() => signIn()}>Login</button>) : null}
        {session.status === "unauthenticated" ? (<button className="hover:scale-110 hover:shadow-md" onClick={() => signIn()}>Register</button>) : null}
    </div>
}

