import { ChatContext } from "../../context/chatContex";
import { useContext, useEffect, useState } from "react";
import { winCondition } from "./IsWining";

export default function Wins() {
  let { tateti, setTateti } = useContext(ChatContext);
  let [win, setWin] = useState("0");
  useEffect(() => {
    let isWin = winCondition(tateti);
    if (isWin == "X" || isWin == "O" || isWin == "Empate") {
      setWin(isWin);
      setTimeout(() => {
        setWin("0");
        setTateti([
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ]);
      }, 2500);
    }
  }, [tateti]);
  return (
    <section>
      {(win == "X" || win == "O" || win == "Empate") && (
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
