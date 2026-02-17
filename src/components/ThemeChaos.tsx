"use client";

import { useEffect } from "react";

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function ThemeChaos() {
  useEffect(() => {
    let theme = 0;
    const html = document.documentElement;
    html.setAttribute("data-chaos-theme", "0");

    const themeTimer = setInterval(() => {
      theme = (theme + 1) % 4;
      html.setAttribute("data-chaos-theme", String(theme));
    }, 3000);

    return () => {
      clearInterval(themeTimer);
      html.setAttribute("data-chaos-theme", "0");
    };
  }, []);

  useEffect(() => {
    let context: AudioContext | null = null;
    let beepA: number | null = null;
    let beepB: number | null = null;

    const playBeep = (freq: number, duration = 0.11) => {
      if (!context) return;
      const osc = context.createOscillator();
      const gain = context.createGain();
      osc.type = "square";
      osc.frequency.value = freq;
      gain.gain.value = 0.018;
      osc.connect(gain);
      gain.connect(context.destination);
      osc.start();
      osc.stop(context.currentTime + duration);
    };

    const startAudioChaos = () => {
      if (context) return;
      context = new window.AudioContext();
      beepA = window.setInterval(() => playBeep(randomBetween(260, 860)), 700);
      beepB = window.setInterval(() => playBeep(randomBetween(120, 440), 0.17), 1100);
    };

    const autoTry = window.setTimeout(startAudioChaos, 600);
    window.addEventListener("pointerdown", startAudioChaos, { once: true });

    return () => {
      window.removeEventListener("pointerdown", startAudioChaos);
      window.clearTimeout(autoTry);
      if (beepA) window.clearInterval(beepA);
      if (beepB) window.clearInterval(beepB);
      if (context) {
        void context.close();
      }
    };
  }, []);

  return null;
}