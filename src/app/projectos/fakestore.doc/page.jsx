"use client";
import { useState } from "react";
import Aside from "./Aside.jsx";
import Documentation from "./Documentation.jsx";
export default function Doc() {
  let [doc, setDoc] = useState("Introduction");
  return (
    <main className="min-h-screen max-w-6xl m-auto">
      <section className="md:grid grid-cols-3">
        <Aside doc={setDoc} />
        <Documentation doc={doc} />
      </section>
    </main>
  );
}
