import { ChatContext } from "@/app/context/chatContex";
import { useContext, useEffect } from "react";
import Icon from "./Icons";

export default function Game({ socket }) {
  let { socketId, tateti, setTateti, currentTurn, setCurrentTurn, turn } =
    useContext(ChatContext);

  useEffect(() => {
    socket.on("game", (game) => {
      game.currentTurn == "X" ? setCurrentTurn("O") : setCurrentTurn("X");
      setTateti(game.tateti);
    });

    return () => socket.off("game");
  }, []);

  const submitTateti = (e) => {
    if (turn != currentTurn) return null;
    let { id } = e.target;
    let positions = id.split("-");
    let y = positions[0];
    let x = positions[1];
    if (tateti[y][x] == "O" || tateti[y][x] == "X") return null;
    let info = {
      id: socketId,
      tateti,
      turn,
      currentTurn,
      y,
      x,
    };
    socket.emit("game", info);
  };
  return (
    <section className=" my-4 flex justify-center items-center flex-col rounded">
      <div className="rounded bg-b dark:bg-bc">
        {tateti?.map((token, y) => (
          <div
            key={y}
            className={`flex justify-center items-center max-w-lg ${
              (y + 1) % 2 == 0 ? "border-y-2 border-[#1c6087]" : ""
            }`}
          >
            {token.map((position, x) => (
              <Icon
                key={x}
                position={position}
                x={x}
                y={y}
                submitTateti={submitTateti}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
