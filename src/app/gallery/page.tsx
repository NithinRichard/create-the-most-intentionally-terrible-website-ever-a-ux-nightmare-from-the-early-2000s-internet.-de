const fakeImages = [
  "sparkle-cat.gif",
  "fire-text.png",
  "under-construction.bmp",
  "alien-dance.gif",
  "flame-divider.jpg",
  "skull-button.png",
  "neon-laser-dolphin.webp",
  "ultra-compressed-selfie.jpeg",
  "broken-banner-final-final2.psd",
];

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-10 pt-6">
      <section className="bad-card border-red-700 bg-white/80 p-5">
        <h1 className="rainbow-text text-center text-4xl font-black uppercase">Gallery of Regret</h1>
        <p className="mt-2 text-center text-xs font-black uppercase">
          Hover effects are dramatic. Actual image files are imaginary.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {fakeImages.map((name) => (
            <article key={name} className="jitter border-4 border-black bg-yellow-200 p-3 text-center font-black">
              <div className="grid h-24 place-items-center border-2 border-dashed border-black bg-pink-300 text-xs uppercase">
                {name}
              </div>
              <button className="mt-2 border-2 border-black bg-cyan-200 px-3 py-1 text-xs uppercase">
                Enhance
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}