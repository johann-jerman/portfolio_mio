"use client";

import { useEffect, useState } from "react";
import { icons } from "./Icons";
import { compare, hidennElements, randomArray } from "./Utils";

export default function MemoTest() {
  let [icon, setIcon] = useState(icons);
  let [start, setStart] = useState(false);
  let win = 0;

  const startPlay = () => {
    setStart(true);
    setIcon(randomArray(icon));
  };

  const handle = (e) => {
    if (!start) return null;
    let { currentTarget } = e;
    let { id } = currentTarget;
    currentTarget.children[0].classList.remove("fa-question");
    currentTarget.children[0].classList.add(
      `fa-${currentTarget.children[0].id}`
    );

    setTimeout(() => {
      win = compare(id, currentTarget.children[0]);
    }, 500);
  };

  return (
    <main className="py-6">
      <aside className="m-auto max-w-xs text-center">
        <div onClick={() => (start ? null : startPlay())}>
          {start ? "Da vuelta todas las fichas" : " Comenzar a jugar"}
        </div>
      </aside>
      <article className="flex justify-center items-center flex-wrap p-5 m-5">
        {icon?.map((icon, i) => {
          return (
            <div
              onClick={handle}
              key={i}
              id={i}
              className="m-4 p-4 bg-rc w-40 h-40 flex justify-center items-center rounded"
            >
              {icon}
            </div>
          );
        })}
      </article>
    </main>
  );
}
