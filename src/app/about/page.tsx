const rules = [
  ["Visual hierarchy", "All items shout at max volume"],
  ["Readability", "Fonts selected by emotional instability"],
  ["Navigation", "Clear paths replaced with surprises"],
  ["Interaction", "Buttons may dodge the cursor"],
  ["Performance", "Animations first, purpose second"],
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-10 pt-6">
      <section className="bad-card border-blue-900 bg-lime-200 p-5">
        <h1 className="text-center text-4xl font-black uppercase underline">About This Disaster</h1>
        <p className="mt-4 text-sm font-bold leading-7 uppercase">
          This is a strategic anti-UX build for a worst-website competition. Every design choice is intentional,
          measurable, and confidently incorrect.
        </p>

        <table className="bad-table mt-5 bg-white/90">
          <thead>
            <tr>
              <th>Category</th>
              <th>Implementation</th>
            </tr>
          </thead>
          <tbody>
            {rules.map(([left, right]) => (
              <tr key={left}>
                <td>{left}</td>
                <td>{right}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}