import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Globe from "./Globe";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8] }} style={{ position: "absolute", inset: 0 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={2} />
        <pointLight position={[-5, -3, -5]} intensity={1.5} color="#00ff88" />
        <Globe />
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>

      <div className="absolute inset-0 z-10 bg-black/55" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_35%,_rgba(255,255,255,0.12),_transparent_45%)]" />

      <div className="absolute inset-0 z-20 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 text-center animate-rise">
        <p className="tracking-[0.35em] text-white/70">ENVIRONMENTAL TECHNOLOGY</p>
        <h1 className="mt-4 text-6xl font-bold tracking-[0.08em] text-white drop-shadow-[0_10px_36px_rgba(0,0,0,0.6)] md:text-8xl">
          EnviroCore
        </h1>

        <p className="mt-6 max-w-2xl text-base text-emerald-300 md:text-xl">
          Sustainable Solutions for a Greener Future. Building resilient environmental systems with data-driven precision.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full border border-white/70 bg-white/10 px-8 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Learn More &gt;
          </a>
          <a
            href="#contact"
            className="rounded-full border border-emerald-300/70 bg-emerald-400/15 px-8 py-3 text-sm text-emerald-100 transition hover:bg-emerald-300/25"
          >
            Start Project
          </a>
        </div>

        <div className="mt-14 w-full max-w-4xl">
          <Stats />
        </div>
      </div>
    </section>
  );
}
