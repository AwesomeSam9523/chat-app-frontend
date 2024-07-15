// server.js

import { NextRequest, NextResponse } from "next/server";
import { Server as SocketIOServer, Socket } from "socket.io";

export default function POST() {
    const io = new SocketIOServer();

    io.on("connection", (socket) => {
        console.log("User connected");

        socket.on("message", (message, roomName, id, currentTime, username) => {
            io.to(roomName).emit("message", message, id, currentTime, username);
        });

        socket.on("joinRoom", (roomName) => {
            console.log("Joining room: " + roomName);
            socket.join(roomName);
        });

        socket.on("enter", (roomName, userName) => {
            console.log(userName + " entered room: " + roomName);
            io.to(roomName).emit("enter", userName);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });
}

