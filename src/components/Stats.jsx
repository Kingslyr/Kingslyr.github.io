export default function Stats() {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-6 py-20 text-center md:grid-cols-4">
      {[
        ["15+", "Projects Completed"],
        ["5+", "Years Experience"],
        ["Sindh", "Region Active"],
        ["98%", "Approval Rate"],
      ].map((item) => (
        <div key={item[1]} className="glow rounded-xl bg-white/5 p-6 backdrop-blur">
          <h2 className="text-3xl text-green-400">{item[0]}</h2>
          <p className="text-gray-400">{item[1]}</p>
        </div>
      ))}
    </section>
  );
}
