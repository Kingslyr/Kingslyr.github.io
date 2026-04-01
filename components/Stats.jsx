import { useEffect, useState } from "react";

function Counter({ end, label }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    let i = 0;
    const int = setInterval(() => {
      i += end / 40;
      if (i >= end) clearInterval(int);
      setN(Math.floor(i));
    }, 30);
  }, []);

  return (
    <div>
      <h2 style={{ color: "#00ff88" }}>{n}+</h2>
      <p>{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section style={{ display: "flex", justifyContent: "space-around", padding: 40 }}>
      <Counter end={15} label="Projects Completed" />
      <Counter end={5} label="Years Experience" />
      <Counter end={1} label="Sindh Region" />
    </section>
  );
}
