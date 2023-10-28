"use client";

import { socketServer } from "../../../services/config.jsx";
import { io } from "socket.io-client";
import Room from "./Room";
import Chat from "./Chat";
import { ChatProvider } from "../../context/chatContex";
import Game from "./Game";
import Wins from "./Wins";

export default function Tateti() {
  const socket = io(socketServer);
  return (
    <main className=" min-h-screen">
      <ChatProvider>
        <Room socket={socket} />
        <Game socket={socket} />
        <Chat socket={socket} />
        <Wins />
      </ChatProvider>
    </main>
  );
}
