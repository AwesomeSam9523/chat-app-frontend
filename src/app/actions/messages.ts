"use server"

import client from "../../../db/db"


export async function createMessage(message : string){
    await client.chat.create({
        data : {
            message : message
        }
    })
    return true
}