"use client";
import { useState } from "react";
import MenuBar from "../../icons/MenuBar.jsx";
const endpoints = [
  { name: "Introduction" },
  { name: "Products" },
  { name: "Product Query" },
  { name: "Users" },
  { name: "Category" },
  { name: "Auth" },
  { name: "File" },
];

export default function Aside({ doc }) {
  let [state, setState] = useState("block");
  return (
    <aside className="mt-4">
      <button
        onClick={() => setState(state == "block" ? "hidden" : "block")}
        className="md:hidden p-2 "
      >
        <MenuBar />
      </button>
      <ul
        className={`${state} md:block w-full h-screen bg-bc dark:bg-n absolute md:relative`}
      >
        {endpoints?.map((link, i) => {
          return (
            <li
              key={i}
              className="text-3xl w-fit ml-2 py-2 md:text-2xl lg:ml-0 cursor-pointer z-10"
              onClick={() => {
                doc(link.name), setState(state == "block" ? "hidden" : "block");
              }}
            >
              {link.name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
