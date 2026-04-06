import { Canvas } from "@react-three/fiber";
import MorphingParticleField from "./MorphingParticleField";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8] }} style={{ position: "absolute", inset: 0 }}>
        <fog attach="fog" args={["#02060f", 8, 20]} />
        <MorphingParticleField />
      </Canvas>

      <div className="absolute inset-0 z-10 bg-black/42" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_35%,_rgba(120,255,205,0.2),_transparent_45%)]" />

      <div className="absolute inset-0 z-20 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 text-center animate-rise">
        <div className="rounded-[2rem] border border-white/20 bg-black/35 px-8 py-8 shadow-[0_40px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl md:px-12">
          <p className="tracking-[0.42em] text-emerald-200/80">ENVIRONMENTAL INTELLIGENCE FIELD</p>
          <h1 className="font-display mt-3 text-6xl font-bold tracking-[0.08em] text-white drop-shadow-[0_10px_36px_rgba(0,0,0,0.6)] md:text-8xl">
            EnviroCore
          </h1>

          <p className="mt-6 max-w-2xl text-base text-emerald-200 md:text-xl">
            A living particle field representing ecosystems, carbon flows, and restoration data. Move your cursor and scroll to navigate the intelligence mesh.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#about"
              className="rounded-full border border-white/70 bg-white/10 px-8 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Enter Fly-through &gt;
            </a>
            <a
              href="#contact"
              className="rounded-full border border-emerald-300/70 bg-emerald-400/15 px-8 py-3 text-sm text-emerald-100 transition hover:bg-emerald-300/25"
            >
              Start Project
            </a>
          </div>
        </div>

        <div className="mt-14 w-full max-w-4xl">
          <Stats />
        </div>
      </div>
    </section>
  );
}
