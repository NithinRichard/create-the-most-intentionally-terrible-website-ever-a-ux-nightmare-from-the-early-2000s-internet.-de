const files = [
  "Download_Free_Screensaver.exe",
  "Very_Important_Toolbar_Setup.zip",
  "Secret_Game_Crack_NOT_VIRUS.rar",
  "HD_Wallpaper_Pack_17_of_400.iso",
  "mystery-driver-update.bat",
];

export default function DownloadsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-10 pt-6">
      <section className="bad-card border-green-800 bg-cyan-100 p-5">
        <h1 className="text-center text-4xl font-black uppercase">Downloads</h1>
        <p className="mt-3 text-center text-sm font-bold uppercase">
          Pick a random file and commit to the consequences.
        </p>
        <div className="mt-5 space-y-3">
          {files.map((file, i) => (
            <button
              key={file}
              className="w-full border-4 border-black p-3 text-left text-sm font-black uppercase"
              style={{ backgroundColor: i % 2 === 0 ? "#f87171" : "#fde047" }}
            >
              {file}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}