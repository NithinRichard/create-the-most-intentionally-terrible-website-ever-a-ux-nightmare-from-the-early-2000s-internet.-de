import Link from "next/link";
import { ChaosMode } from "@/components/ChaosMode";
import { RandomLabelButton } from "@/components/RandomizedButtons";

const uselessFacts = [
  "This page has 14 borders per screen.",
  "Every call-to-action is equally suspicious.",
  "There are exactly zero calm colors.",
  "Navigation clarity was intentionally not shipped.",
];

export default function Home() {
  return (
    <main className="mobile-chaos mx-auto max-w-6xl px-4 pb-10 pt-6">
      <section className="bad-card border-fuchsia-800 bg-white/85 p-4 text-center">
        <h1 className="blink text-5xl font-black uppercase">Worst Website Ever Championship Build</h1>
        <p className="mt-3 text-lg font-bold">Built to maximize confusion, eye strain, and accidental clicks.</p>
        <p className="rainbow-text mt-2 text-xs font-black uppercase tracking-[0.25em]">Visitor Counter: 999,998,321 and rising for no reason</p>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-4">
        <article className="bad-card border-lime-700 bg-yellow-200 p-4 text-center">
          <h2 className="text-2xl font-black uppercase">Urgent</h2>
          <p className="mt-2 text-sm font-bold">Click now before absolutely nothing happens.</p>
          <RandomLabelButton options={["Do It", "Push It", "Smash It", "Tap It"]} className="mt-4 border-4 border-black bg-red-500 px-4 py-2 text-sm font-black uppercase" />
        </article>

        <article className="bad-card border-blue-800 bg-cyan-200 p-4 text-center">
          <h2 className="text-2xl font-black uppercase">Logo</h2>
          <div className="mx-auto mt-3 grid h-24 w-24 place-items-center rounded-full border-4 border-black bg-orange-300 text-4xl spin-slow">@</div>
          <p className="mt-2 text-sm font-bold">Rotation means trust.</p>
        </article>

        <article className="bad-card border-orange-800 bg-pink-200 p-4 text-center">
          <h2 className="text-2xl font-black uppercase">Downloads</h2>
          <p className="mt-2 text-sm font-bold">Every file name looks completely safe.</p>
          <Link href="/downloads" className="mt-4 inline-block border-4 border-black bg-green-400 px-4 py-2 text-sm font-black uppercase">Open Vault</Link>
        </article>

        <article className="bad-card border-purple-800 bg-lime-200 p-4 text-center">
          <h2 className="text-2xl font-black uppercase">Mystery Poll</h2>
          <p className="mt-2 text-sm font-bold">Should the site get even worse?</p>
          <div className="mt-4 flex justify-center gap-2">
            <RandomLabelButton options={["Yes", "Absolutely", "Probably", "Maybe"]} className="border-4 border-black bg-white px-3 py-1 text-xs font-black uppercase" />
            <RandomLabelButton options={["Also Yes", "Still Yes", "Why Not", "Sure"]} className="border-4 border-black bg-white px-3 py-1 text-xs font-black uppercase" />
          </div>
        </article>
      </section>

      <section className="bad-card mt-6 border-black bg-white/80 p-4">
        <h2 className="text-center text-3xl font-black uppercase">Official Facts</h2>
        <ul className="mt-3 list-disc pl-6 text-sm font-black">
          {uselessFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </section>

      <ChaosMode />
    </main>
  );
}