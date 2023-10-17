"use client";
// import { moonIcon, sunIcon } from "@/app/icons/icons";
import { moonIcon, sunIcon } from "../../app/icons/icons.jsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ButtonTheme() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) null;

  return (
    // (
    //   <button
    //     onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    //     className=""
    //   >
    //     {theme === "dark" ? moonIcon : sunIcon}
    //   </button>
    // ),
    <button
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      className="flex-row justify-center cursor-pointer hover:bg-white dark:hover:bg-black  focus:outline-none  font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center   hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-70 hover:opacity-100"
    >
      {theme === "dark" ? moonIcon : sunIcon}
    </button>
  );
}

export default ButtonTheme;
