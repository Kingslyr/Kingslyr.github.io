import { useEffect, useState } from "react";

const stages = [
  {
    title: "Exploded Infrastructure View",
    text: "Scroll-triggered layer separation for pipes, mangrove belts, and energy grid systems.",
  },
  {
    title: "Environmental Data Overlay",
    text: "Real-time color states mapped to carbon, biodiversity, and compliance metrics.",
  },
  {
    title: "Liquid Scene Transition",
    text: "GLSL-style melt and glitch transition between EIA, ESG, and restoration modules.",
  },
];

export default function EcoScene() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      setScrollProgress(Math.min(window.scrollY / max, 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="rounded-3xl border border-emerald-300/20 bg-[linear-gradient(140deg,rgba(8,16,26,0.9),rgba(6,36,31,0.62),rgba(11,16,29,0.92))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <div>
          <p className="text-sm tracking-[0.3em] text-emerald-200/80">IMMERSIVE ENGINEERING FLOW</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Interactive Sanctuary Fly-through</h2>
          <p className="mt-4 max-w-2xl text-white/75">
            This control layer turns your AutoCAD ecosystem model into a guided cinematic experience. As users move and scroll, infrastructure systems split, data pulses in real time, and modules transition with fluid distortion.
          </p>

          <div className="mt-7 space-y-3">
            {stages.map((stage, index) => (
              <article
                key={stage.title}
                className="rounded-2xl border border-white/15 bg-black/35 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              >
                <p className="text-xs tracking-[0.2em] text-emerald-300/80">PHASE 0{index + 1}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{stage.title}</h3>
                <p className="mt-2 text-sm text-white/70">{stage.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/20 bg-black/40 p-5">
          <h3 className="text-sm tracking-[0.25em] text-emerald-300/80">RESTORATION INDEX</h3>
          <p className="mt-3 text-5xl font-bold text-emerald-300">{Math.round(42 + scrollProgress * 58)}%</p>
          <p className="mt-2 text-sm text-white/70">Dynamic confidence score based on user progression through the model narrative.</p>

          <div className="mt-6 overflow-hidden rounded-full border border-emerald-300/30 bg-emerald-900/30 p-1">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-500 transition-[width] duration-300"
              style={{ width: `${Math.round(20 + scrollProgress * 80)}%` }}
            />
          </div>

          <div className="mt-6 space-y-3 text-sm text-white/75">
            <p className="rounded-xl border border-white/15 bg-black/35 px-3 py-2">GHG Verification: {Math.round(61 + scrollProgress * 34)} / 100</p>
            <p className="rounded-xl border border-white/15 bg-black/35 px-3 py-2">Mangrove Belt Integrity: {Math.round(54 + scrollProgress * 42)} / 100</p>
            <p className="rounded-xl border border-white/15 bg-black/35 px-3 py-2">Infrastructure Readiness: {Math.round(49 + scrollProgress * 45)} / 100</p>
          </div>
        </div>
      </div>
    </section>
  );
}
