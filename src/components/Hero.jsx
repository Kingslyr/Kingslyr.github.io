import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Globe from "./Globe";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8] }} style={{ position: "absolute", inset: 0 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={2} />
        <pointLight position={[-5, -3, -5]} intensity={1.5} color="#00ff88" />
        <Globe />
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>

      <div className="absolute inset-0 z-10 bg-black/50" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_35%,_rgba(255,255,255,0.08),_transparent_45%)]" />

      <div className="absolute inset-0 z-20 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold tracking-wide text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] md:text-8xl">
          EnviroCore
        </h1>

        <p className="mt-5 max-w-2xl text-base text-emerald-300 md:text-lg">
          Sustainable Solutions for a Greener Future. Building resilient environmental systems with data-driven precision.
        </p>

        <a
          href="#contact"
          className="mt-7 rounded-full border border-white/60 bg-white/5 px-7 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/15"
        >
          Learn More &gt;
        </a>

        <div className="mt-16 w-full max-w-4xl">
          <Stats />
        </div>
      </div>
    </section>
  );
}
