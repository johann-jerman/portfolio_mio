"use client";

import { ChatContext } from "@/app/context/chatContex";
import { useContext, useEffect } from "react";

export default function Room({ socket }) {
  let {
    roomCode,
    setRoomCode,
    joined,
    setJoined,
    setSocketId,
    socketId,
    turn,
    currentTurn,
    setTurn,
  } = useContext(ChatContext);

  useEffect(() => {
    socket.on("join", (roomCode) => {
      setRoomCode(roomCode.room);
      setJoined(true);
      setSocketId(roomCode.id);
      setTurn(roomCode.turn);
    });
    return () => {
      socket.off("join", roomCode);
    };
  }, []);

  const createRoom = () => {
    const code = Math.random().toString(36).substring(2).toUpperCase();
    const turn = "X";
    socket.emit("join", { code, turn });
  };

  const joinRoom = (e) => {
    e.preventDefault();
    const turn = "O";
    socket.emit("join", { code: roomCode.trim(), turn });
  };

  return (
    <>
      {!joined ? (
        <section className=" flex flex-col md:flex-row gap-5 pt-6 justify-center items-center">
          <div
            onClick={createRoom}
            className=" cursor-pointer p-2 text-white text-lg bg-[#005C4B] rounded"
          >
            Crear Sala
          </div>
          <form onSubmit={joinRoom}>
            <input
              type="text"
              placeholder="Ingresar a Sala"
              onChange={(e) => setRoomCode(e.target.value)}
              className="p-2 rounded text-lg"
            />
          </form>
        </section>
      ) : (
        <section className="flex justify-center flex-wrap m-5">
          <div className="bg-[#005C4B] text-lg  text-white max-w-fit p-3 rounded m-2">
            Numero de Sala: {roomCode}
          </div>
          <div className="bg-[#005C4B] text-lg  text-white max-w-fit p-3 rounded m-2">
            Tu Ficha Es: {turn}
          </div>
          <div className="bg-[#005C4B] text-lg  text-white max-w-fit p-3 rounded m-2">
            Turno Actual Es: {currentTurn}
          </div>
        </section>
      )}
    </>
  );
}
