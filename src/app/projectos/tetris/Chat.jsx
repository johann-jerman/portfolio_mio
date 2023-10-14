"use client";

import { useEffect, useState } from "react";

export default function Chat({ socket }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (message) =>
    setMessages((state) => [...state, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages((state) => [...state, newMessage]);
    setMessage("");
    socket.emit("message", newMessage.body);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <ul className="h-80 overflow-y-auto">
        {messages?.map((message, index) => (
          <li
            key={index}
            className={`my-2 p-2 table text-sm rounded-md 
            ${message.from === "Me" ? "bg-sky-700 ml-auto" : "bg-black"}
            `}
          >
            <b>{message.from == "Me" ? "Me" : "Opponent"}</b>:{message.body}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Message"
        className="border-2 border-zinc-500 p-2 w-full text-black"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
    </form>
  );
}
