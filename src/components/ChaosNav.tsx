"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

const baseItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Lore" },
  { href: "/gallery", label: "Pixels" },
  { href: "/downloads", label: "Danger" },
  { href: "/guestbook", label: "Shoutbox" },
  { href: "/contact", label: "Fax Us" },
];

function shuffleLabels(items: NavItem[]): NavItem[] {
  const labels = items.map((item) => item.label);
  for (let i = labels.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [labels[i], labels[j]] = [labels[j], labels[i]];
  }
  return items.map((item, idx) => ({ ...item, label: labels[idx] }));
}

export function ChaosNav() {
  const [items, setItems] = useState(baseItems);
  const glitchLabel = useMemo(() => {
    const glitch = ["Broken Link", "???", "Do Not Click", "Maybe Home"];
    return glitch[Math.floor(Math.random() * glitch.length)];
  }, []);

  function scrambleNav() {
    setItems((current) => shuffleLabels(current));
  }

  return (
    <nav className="top-nav mt-2 flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="bad-link" onMouseEnter={scrambleNav}>
          {item.label}
        </Link>
      ))}
      <a href="#" className="bad-link" onMouseEnter={scrambleNav}>
        {glitchLabel}
      </a>
    </nav>
  );
}