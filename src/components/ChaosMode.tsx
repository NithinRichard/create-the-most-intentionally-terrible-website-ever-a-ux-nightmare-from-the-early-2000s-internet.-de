"use client";

import { useEffect, useMemo, useState } from "react";

type Popup = {
  id: number;
  title: string;
  body: string;
};

const popupMessages: Omit<Popup, "id">[] = [
  { title: "System Alert", body: "Your mouse is too slow. Upgrade your hand." },
  { title: "Congratulations", body: "You won a free ringtone subscription." },
  { title: "Warning", body: "Closing this popup opens another popup." },
  { title: "Performance", body: "Website speed reduced to increase nostalgia." },
  { title: "Privacy", body: "We use 913 cookies and a sandwich." },
  { title: "Update", body: "Install seven toolbars to continue browsing." },
];

const closeLabels = ["Close", "No Thanks", "Decline", "Ignore", "Not Now", "Escape"];
const claimLabels = ["Claim Prize", "Win Now", "Tap Fast", "Unlock Gold", "Secret Bonus", "Instant Reward"];
const loadTasks = ["Installing nostalgia pack", "Fetching 2004 plugins", "Compressing UI ethics"];

function randomItem(items: string[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export function ChaosMode() {
  const [popups, setPopups] = useState<Popup[]>([
    { id: 1, ...popupMessages[0] },
    { id: 2, ...popupMessages[1] },
  ]);
  const [nextId, setNextId] = useState(3);
  const [runawayPos, setRunawayPos] = useState({ top: 40, left: 20 });
  const [chaosScore, setChaosScore] = useState(2);
  const [claimLabel] = useState(() => randomItem(claimLabels));
  const [progress, setProgress] = useState(() => [19, 67, 42]);
  const [shieldOn, setShieldOn] = useState(false);

  useEffect(() => {
    const popupTimer = setInterval(() => {
      setPopups((current) => {
        if (current.length >= 9) {
          return current;
        }
        const msg = popupMessages[Math.floor(Math.random() * popupMessages.length)];
        return [...current, { id: Date.now(), ...msg }];
      });
      setChaosScore((score) => score + 1);
    }, 4500);

    return () => clearInterval(popupTimer);
  }, []);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((current) =>
        current.map((value) => {
          const swing = Math.floor(Math.random() * 61) - 25;
          const next = value + swing;
          if (next < 0) return 0;
          if (next > 100) return 100;
          return next;
        })
      );
    }, 1100);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    const shieldTimer = setInterval(() => {
      setShieldOn(true);
      setChaosScore((score) => score + 2);
      setTimeout(() => setShieldOn(false), 900);
    }, 6500);

    return () => clearInterval(shieldTimer);
  }, []);

  const meterText = useMemo(() => {
    if (chaosScore < 5) return "Mildly annoying";
    if (chaosScore < 10) return "Actively unpleasant";
    return "Prize-winning disaster";
  }, [chaosScore]);

  function closePopup(id: number) {
    setPopups((current) => current.filter((item) => item.id !== id));
    const msg = popupMessages[Math.floor(Math.random() * popupMessages.length)];
    setPopups((current) => [...current, { id: nextId, ...msg }]);
    setNextId((value) => value + 1);
    setChaosScore((score) => score + 2);
  }

  function moveRunawayButton() {
    const top = Math.floor(Math.random() * 72) + 8;
    const left = Math.floor(Math.random() * 72) + 8;
    setRunawayPos({ top, left });
    setChaosScore((score) => score + 1);
  }

  return (
    <>
      {shieldOn && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-black/25"
          onClick={() => setChaosScore((score) => score + 1)}
        >
          <div className="border-4 border-black bg-yellow-300 p-3 text-center text-xs font-black uppercase">
            click blocked by premium security layer
          </div>
        </div>
      )}

      <section className="bad-card jitter mt-6 border-red-800 bg-white/85 p-4">
        <h2 className="rainbow-text text-center text-3xl font-black uppercase">Chaos Control Panel</h2>
        <p className="mt-2 text-center text-sm font-black uppercase">Live Annoyance Meter: {chaosScore} ({meterText})</p>

        <div className="mt-5 space-y-3 border-4 border-black bg-cyan-100 p-3">
          <p className="text-center text-xs font-black uppercase">Fake Loading Center</p>
          {loadTasks.map((task, idx) => (
            <div key={task}>
              <p className="text-[11px] font-black uppercase">{task}... {progress[idx]}%</p>
              <div className="mt-1 h-5 border-2 border-black bg-white">
                <div className="h-full bg-[linear-gradient(90deg,#ff3131,#ffe53b,#41ff6e,#2ec5ff)]" style={{ width: `${progress[idx]}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-5 h-44 border-4 border-black bg-yellow-100">
          <button
            type="button"
            onMouseEnter={moveRunawayButton}
            onFocus={moveRunawayButton}
            className="absolute border-4 border-black bg-lime-400 px-4 py-2 text-xs font-black uppercase"
            style={{ top: `${runawayPos.top}%`, left: `${runawayPos.left}%`, transform: "translate(-50%, -50%)" }}
          >
            {claimLabel}
          </button>
          <p className="p-3 text-xs font-bold uppercase">Try clicking the button. It relocates whenever you get close.</p>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {popups.map((popup) => (
            <article key={popup.id} className="border-4 border-black bg-pink-200 p-3 text-xs font-bold uppercase">
              <p className="text-sm font-black">{popup.title}</p>
              <p className="mt-1">{popup.body}</p>
              <button
                type="button"
                onClick={() => closePopup(popup.id)}
                className="mt-2 border-2 border-black bg-red-400 px-3 py-1 font-black"
              >
                {randomItem(closeLabels)}
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}