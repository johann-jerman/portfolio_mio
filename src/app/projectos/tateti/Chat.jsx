"use client";

import "./scroll.css";
import { ChatContext } from "@/app/context/chatContex";
import { useContext, useEffect, useState } from "react";

export default function Chat({ socket }) {
  let { socketId, setSocketId } = useContext(ChatContext);
  let [message, setMessage] = useState("");
  let [messages, setMessages] = useState([]);
  let [chatOpen, setChatOpen] = useState(false);
  useEffect(() => {
    socket.on("message", receiveMessage);
    let id = localStorage.getItem("socket");
    setSocketId(id);

    return () => socket.off("message", receiveMessage);
  }, []);

  const receiveMessage = (message) => {
    setMessages((state) => [...state, message]);
  };

  const submitMsg = (e) => {
    e.preventDefault();

    const newMessage = {
      from: "Me",
      body: message,
    };
    socket.emit("message", newMessage);
    setMessage("");
  };

  return (
    <aside className="md:max-w-lg lg:max-w-xl">
      {chatOpen ? (
        <form
          className=" md:max-w-lg lg:max-w-xl fixed bottom-5 left-5 bg-white dark:bg-[#0b0f11] p-4 rounded scroll-chat"
          onSubmit={submitMsg}
        >
          <div
            className="cursor-pointer bg-red-700 w-7 h-7 p-1 rounded-full flex justify-center items-center hover:scale-125 transition-all"
            onClick={() => setChatOpen(false)}
          >
            X
          </div>
          <ul className="h-80 overflow-y-auto pr-2 py-2">
            {messages.map((message, index) => (
              <li
                key={index}
                className={`my-2 p-2 table text-sm text-white rounded-md max-w-[60%] 
                ${message.from === socketId && "bg-[#005C4B] ml-auto"}
                ${message.from === "Admin" && "bg-[#48133e] max-w-[90%] m-auto"}
                ${
                  message.from !== socketId &&
                  message.from !== "Admin" &&
                  "bg-[#202C33] "
                }`}
              >
                <b>
                  {message.from === socketId
                    ? "Me"
                    : message.from === "Admin"
                    ? "Admin"
                    : "Opponent"}
                </b>
                :{message.body}
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Message"
            className="w-full rounded p-2"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            autoFocus
          />
        </form>
      ) : (
        <div
          className="fixed bottom-5 left-5"
          onClick={() => setChatOpen(true)}
        >
          <div
            className="bg-[#005C4B] text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
            id="chat-bubble"
          >
            <span>&#9993;</span>
          </div>
        </div>
      )}
    </aside>
  );
}
