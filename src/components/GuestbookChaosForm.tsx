"use client";

import { useState } from "react";

export function GuestbookChaosForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function clearSometimes() {
    if (Math.random() < 0.35) {
      setMessage("");
    }
  }

  return (
    <form className="mt-5 space-y-3">
      <input
        className="w-full border-4 border-black bg-white p-2 font-bold"
        placeholder="YOUR COOL USERNAME"
        value={name}
        onChange={(e) => setName(e.target.value.toUpperCase().slice(0, 24))}
        onFocus={() => setName((value) => value.split("").reverse().join(""))}
      />
      <textarea
        className="h-24 w-full border-4 border-black bg-white p-2 font-bold"
        placeholder="LEAVE CHAOTIC FEEDBACK"
        value={message}
        onChange={(e) => setMessage(e.target.value.toUpperCase())}
        onBlur={clearSometimes}
      />
      <button
        type="button"
        className="border-4 border-black bg-fuchsia-300 px-5 py-2 text-sm font-black uppercase"
        onMouseEnter={() => setMessage((value) => `${value} !!!`) }
      >
        Submit Forever
      </button>
    </form>
  );
}