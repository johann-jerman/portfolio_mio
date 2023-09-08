"use client";
import { moonIcon, sunIcon } from "@/icons/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ButtonTheme() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) null;

  return (
    <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
      {theme === "dark" ? moonIcon : sunIcon}
    </button>
  );
}

export default ButtonTheme;
