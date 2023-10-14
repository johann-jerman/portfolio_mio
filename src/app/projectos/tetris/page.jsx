"use client";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Chat from "./Chat";

const socket = io("http://localhost:3004");
// console.log(socket);

export default function Tetris() {
  const [roomCode, setRoomCode] = useState("");
  const [roomCreated, setRoomCreated] = useState(false);
  const [joiningRoom, setJoiningRoom] = useState(false);

  const handleCreateRoom = () => {
    const newRoomCode = Math.random().toString(36).substring(2).toUpperCase();

    setRoomCode(newRoomCode);
    setRoomCreated(true);

    socket.emit("createRoom", newRoomCode);
  };

  const handleJoinRoom = () => {
    socket.emit("joinRoom", roomCode);
    setJoiningRoom(true);
    setRoomCreated(true);
  };

  useEffect(() => {
    socket.on("roomJoined", () => {
      setJoiningRoom(false);
    });

    socket.on("error", (error) => {
      setJoiningRoom(false);
    });

    return () => {
      socket.off("roomJoined");
      socket.off("roomError");
    };
  }, []);

  return (
    <main className="max-w-6xl py-4 m-auto">
      <section>
        {roomCreated ? (
          <div>Código de sala: {roomCode}</div>
        ) : (
          <div className="cursor-pointer" onClick={handleCreateRoom}>
            Crear Sala
          </div>
        )}

        {!joiningRoom && !roomCreated && (
          <div>
            <input
              type="text"
              placeholder="Código de Sala"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
            />
            <button className="cursor-pointer" onClick={handleJoinRoom}>
              Unirse a la Sala
            </button>
          </div>
        )}
        {roomCreated && <Chat socket={socket} />}
      </section>
    </main>
  );
}
