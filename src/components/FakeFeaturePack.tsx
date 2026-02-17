"use client";

import { useEffect, useMemo, useState } from "react";

const tips = [
  "Try clicking harder.",
  "Have you refreshed five times?",
  "Your cursor looks outdated.",
  "Disable common sense for better results.",
  "This tip is not useful by design.",
];

export function FakeFeaturePack() {
  const [trustScore, setTrustScore] = useState(99.9);
  const [toastOpen, setToastOpen] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTipIndex((current) => (current + 1) % tips.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!toastOpen) return;
    const timer = setTimeout(() => setToastOpen(false), 1700);
    return () => clearTimeout(timer);
  }, [toastOpen]);

  const trustTone = useMemo(() => {
    if (trustScore >= 90) return "bg-lime-300";
    if (trustScore >= 40) return "bg-yellow-300";
    return "bg-red-300";
  }, [trustScore]);

  return (
    <>
      <section className="bad-card mt-6 grid gap-4 border-black bg-white/80 p-4 md:grid-cols-2">
        <article className="border-4 border-black bg-cyan-100 p-3 text-center">
          <p className="text-xs font-black uppercase">404 Insurance</p>
          <p className="mt-2 text-sm font-bold uppercase">Your clicks are allegedly protected.</p>
          <button
            type="button"
            className="mt-3 border-2 border-black bg-orange-300 px-3 py-1 text-xs font-black uppercase"
            onClick={() => setToastOpen(true)}
          >
            Verify Protection
          </button>
        </article>

        <article
          className={`border-4 border-black p-3 text-center ${trustTone}`}
          onMouseEnter={() => setTrustScore(2.1)}
          onMouseLeave={() => setTrustScore(99.9)}
        >
          <p className="text-xs font-black uppercase">Trust Meter</p>
          <p className="mt-2 text-3xl font-black">{trustScore.toFixed(1)}%</p>
          <p className="mt-2 text-xs font-bold uppercase">Hover to reveal the truth</p>
        </article>
      </section>

      <aside className="fixed bottom-4 right-4 z-[65] max-w-[280px] border-4 border-black bg-yellow-200 p-3 text-xs font-black uppercase shadow-[6px_6px_0_#000]">
        <p className="text-sm">AI Helper</p>
        <p className="mt-1">{tips[tipIndex]}</p>
      </aside>

      {toastOpen && (
        <div className="fixed bottom-5 left-5 z-[72] border-4 border-black bg-red-200 p-3 text-xs font-black uppercase shadow-[6px_6px_0_#000]">
          404 blocked by insurance plan. no refund.
        </div>
      )}
    </>
  );
}
