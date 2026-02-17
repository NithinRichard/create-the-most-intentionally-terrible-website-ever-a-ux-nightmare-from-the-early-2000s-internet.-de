const comments = [
  "first!!!",
  "wow nice colors my eyes hurt",
  "pls add midi autoplay",
  "this site crashed my soul",
  "i clicked close and got more popups",
  "10/10 terrible please never improve",
];

export default function GuestbookPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-10 pt-6">
      <section className="bad-card border-purple-800 bg-orange-100 p-5">
        <h1 className="text-center text-4xl font-black uppercase">Guestbook</h1>
        <p className="mt-2 text-center text-xs font-black uppercase">All caps feedback only</p>
        <form className="mt-5 space-y-3">
          <input className="w-full border-4 border-black bg-white p-2 font-bold" placeholder="YOUR COOL USERNAME" />
          <textarea className="h-24 w-full border-4 border-black bg-white p-2 font-bold" placeholder="LEAVE CHAOTIC FEEDBACK" />
          <button className="border-4 border-black bg-fuchsia-300 px-5 py-2 text-sm font-black uppercase">
            Submit Forever
          </button>
        </form>

        <div className="mt-6 space-y-2">
          {comments.map((comment) => (
            <p key={comment} className="border-2 border-black bg-yellow-200 p-2 text-sm font-bold uppercase">
              {comment}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}