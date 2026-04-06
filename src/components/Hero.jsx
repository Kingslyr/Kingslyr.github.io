import { Canvas } from "@react-three/fiber";
import MorphingParticleField from "./MorphingParticleField";
import Globe from "./Globe";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="relative min-h-[96svh] overflow-hidden scroll-mt-28">
      <Canvas camera={{ position: [0, 0, 8] }} style={{ position: "absolute", inset: 0 }}>
        <fog attach="fog" args={["#02060f", 8, 20]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[6, 3, 4]} intensity={1.3} color="#bce8ff" />
        <pointLight position={[2, -1, 5]} intensity={1.1} color="#89ffd2" />
        <MorphingParticleField />
        <group position={[0, -0.15, -0.5]}>
          <Globe />
        </group>
      </Canvas>

      <div className="absolute inset-0 z-10 bg-black/14" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_35%,_rgba(120,255,205,0.12),_transparent_45%)]" />

      <div className="absolute inset-0 z-20 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center animate-rise md:pt-28">
        <div className="rounded-[2rem] border border-white/25 bg-black/8 px-8 py-8 shadow-[0_40px_100px_rgba(0,0,0,0.28)] backdrop-blur-[3px] md:px-12">
          <div className="mb-3 mx-auto w-64 text-emerald-200/85 md:w-80" aria-hidden="true">
            <svg viewBox="0 0 320 72" className="h-16 w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 66H310" stroke="currentColor" strokeOpacity="0.55" strokeWidth="2" />

              <circle cx="62" cy="26" r="16" fill="currentColor" fillOpacity="0.22" />
              <circle cx="54" cy="30" r="11" fill="currentColor" fillOpacity="0.22" />
              <circle cx="72" cy="30" r="11" fill="currentColor" fillOpacity="0.22" />
              <path d="M62 40V63" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M62 63L50 71M62 63L74 71M62 63L62 71" stroke="currentColor" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" />

              <circle cx="160" cy="22" r="20" fill="currentColor" fillOpacity="0.25" />
              <circle cx="145" cy="28" r="12" fill="currentColor" fillOpacity="0.24" />
              <circle cx="175" cy="28" r="12" fill="currentColor" fillOpacity="0.24" />
              <path d="M160 40V63" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              <path d="M160 63L143 71M160 63L177 71M160 63L160 71" stroke="currentColor" strokeOpacity="0.82" strokeWidth="2" strokeLinecap="round" />

              <circle cx="258" cy="27" r="15" fill="currentColor" fillOpacity="0.22" />
              <circle cx="249" cy="31" r="10" fill="currentColor" fillOpacity="0.22" />
              <circle cx="267" cy="31" r="10" fill="currentColor" fillOpacity="0.22" />
              <path d="M258 40V63" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
              <path d="M258 63L247 71M258 63L269 71M258 63L258 71" stroke="currentColor" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
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
