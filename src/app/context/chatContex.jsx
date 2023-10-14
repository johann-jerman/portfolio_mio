import { createContext, useState } from "react";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  let [roomCode, setRoomCode] = useState("");
  let [joined, setJoined] = useState(false);
  let [socketId, setSocketId] = useState("");
  let [turn, setTurn] = useState("");
  let [currentTurn, setCurrentTurn] = useState("X");
  let [error, setErro] = useState({
    status: false,
    msg: "",
  });
  let [tateti, setTateti] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  return (
    <ChatContext.Provider
      value={{
        roomCode,
        setRoomCode,
        joined,
        setJoined,
        socketId,
        setSocketId,
        tateti,
        setTateti,
        setTurn,
        turn,
        currentTurn,
        setCurrentTurn,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
