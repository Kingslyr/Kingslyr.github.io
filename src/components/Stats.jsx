export default function Stats() {
  return (
    <section className="rounded-2xl border border-white/15 bg-black/30 px-4 py-4 backdrop-blur-sm md:px-8 md:py-6">
      <div className="grid grid-cols-1 text-center sm:grid-cols-3">
        {[
          ["15+", "Projects Completed"],
          ["5+", "Years Experience"],
          ["Sindh", "Region Active"],
        ].map((item, index) => (
          <div
            key={item[1]}
            className={`py-3 ${index !== 0 ? "sm:border-l sm:border-white/20" : ""}`}
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">{item[0]}</h2>
            <p className="mt-1 text-xs tracking-wide text-white/70 md:text-sm">{item[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
