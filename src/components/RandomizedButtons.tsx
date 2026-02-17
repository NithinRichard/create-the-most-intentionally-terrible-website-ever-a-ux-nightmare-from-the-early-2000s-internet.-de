"use client";

import { useMemo } from "react";

type RandomLabelButtonProps = {
  options: string[];
  className: string;
};

function randomItem(items: string[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export function RandomLabelButton({ options, className }: RandomLabelButtonProps) {
  const label = useMemo(() => randomItem(options), [options]);
  return <button className={className}>{label}</button>;
}