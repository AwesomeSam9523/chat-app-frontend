"use server"

import getClient from "../../../db/db"


export async function createMessage(message : string){
    const client = await getClient();
    await client.chat.create({
        data : {
            message : message
        }
    })
    return true
}