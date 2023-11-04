"use client";
import { useState } from "react";
import { Game } from "./class/Game.jsx";
let boardWidth = 10;
let board = new Game(boardWidth);
export default function Board() {
  let [cellsClicked, setCellClicked] = useState([]);
  let [flags, setFlags] = useState([]);
  let [winCondition, setWinCondition] = useState("playing");

  const handelClick = (y, x) => {
    if (cellsClicked.includes(`${y}-${x}`)) return;
    if (board.board[y]?.[x] === 0) {
      let ceros = board.getNeabyCeros(y, x);
      let newFlags = [];
      ceros.forEach((cero) => {
        if (!cellsClicked.includes(cero)) {
          newFlags.push(cero);
        }
      });
      setCellClicked((flag) => [...flag, ...newFlags]);
    } else {
      setCellClicked((cells) => [...cells, `${y}-${x}`]);
    }
    if (board.board[y]?.[x] == board.getBoom()) {
      setWinCondition("lose");
      if (new Date().getMonth() == 9) {
        let audio = new Audio("/boo.mp3");
        audio.volume = 0.2;
        audio.play();
      }
    }
    if (cellsClicked.length + 1 == boardWidth ** 2 - boardWidth) {
      setWinCondition("win");
    }
  };
  const handleRightClick = (e, y, x) => {
    e.preventDefault();
    if (flags.includes(`${y}-${x}`)) {
      let newFlags = flags.filter((flags) => flags != `${y}-${x}`);
      setFlags(newFlags);
    }
    if (!flags.includes(`${y}-${x}`)) {
      setFlags((flag) => [...flag, `${y}-${x}`]);
    }
  };
  return (
    <section>
      {winCondition == "lose" ? (
        <article className="flex justify-center items-center mt-7 ">
          <p className="p-2 bg-ros">Pedriste </p>
          <button onClick={() => location.reload()} className="p-2 bg-ros">
            Clickea para jugar de nuevo?
          </button>
        </article>
      ) : null}
      {winCondition == "win" ? (
        <article className="flex justify-center items-center mt-7 ">
          <p className="p-2 bg-cel">Ganeste </p>
          <button onClick={() => location.reload()} className="p-2 bg-cel">
            Clickea para jugar de nuevo?
          </button>
        </article>
      ) : null}
      <section className="py-8">
        {board.board?.map((row, y) => (
          <article key={y} className="flex justify-center items-center">
            {row.map((cell, x) => (
              <p
                key={y + "-" + x}
                className="border flex justify-center items-center w-10 h-10"
              >
                {cellsClicked.includes(`${y}-${x}`) ? (
                  <span className="bg-bo w-full h-full flex justify-center items-center text-black">
                    {cell == 0 ? null : cell}
                  </span>
                ) : (
                  <button
                    onClick={() =>
                      winCondition == "playing" ? handelClick(y, x) : null
                    }
                    onContextMenu={(e) => handleRightClick(e, y, x)}
                    className="w-full h-full bg-bc"
                  >
                    {flags.includes(`${y}-${x}`) ? "🚩" : null}
                  </button>
                )}
              </p>
            ))}
          </article>
        ))}
      </section>
    </section>
  );
}
