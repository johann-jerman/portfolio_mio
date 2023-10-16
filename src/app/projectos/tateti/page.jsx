"use client";

import { socketServer } from "@/services/config";
import { io } from "socket.io-client";
import Room from "./Room";
import Chat from "./Chat";
import { ChatProvider } from "@/app/context/chatContex";
import Game from "./Game";
import Wins from "./Wins";

export default function Tateti() {
  const socket = io(socketServer);
  return (
    <>
      <ChatProvider>
        <Room socket={socket} />
        <Game socket={socket} />
        <Chat socket={socket} />
        <Wins />
      </ChatProvider>
    </>
  );
}
