import { ChatContext } from "@/app/context/chatContex";
import { useContext, useEffect, useState } from "react";
import { winCondition } from "./IsWining";

export default function Wins() {
  let { tateti, setTateti } = useContext(ChatContext);
  let [win, setWin] = useState("0");
  useEffect(() => {
    let isWin = winCondition(tateti);
    if (isWin == "X" || isWin == "O") {
      setWin(isWin);
      setTimeout(() => {
        setWin("0");
        setTateti([
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ]);
      }, 5000);
    }
  }, [tateti]);
  return (
    <section>
      {(win == "X" || win == "O") && (
        <div
          className={`${
            win == "X" ? "bg-ros" : "bg-cel"
          } absolute right-1/2 bottom-6 p-3 text-md rounded`}
        >
          Ganador {win}
        </div>
      )}
    </section>
  );
}
