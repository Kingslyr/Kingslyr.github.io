export default function Stats() {
  return (
    <section className="rounded-2xl border border-white/20 bg-black/35 px-4 py-4 shadow-[0_25px_55px_rgba(0,0,0,0.45)] backdrop-blur-md md:px-8 md:py-6">
      <div className="grid grid-cols-1 text-center sm:grid-cols-3">
        {[
          ["50+", "EIA / IEE Projects"],
          ["20+", "Audits & ESG Reports"],
          ["Pakistan", "Field Coverage"],
        ].map((item, index) => (
          <div
            key={item[1]}
            className={`py-3 ${index !== 0 ? "sm:border-l sm:border-white/20" : ""}`}
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">{item[0]}</h2>
            <p className="mt-1 text-xs tracking-[0.13em] text-white/70 md:text-sm">{item[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
