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

      <div className="absolute inset-0 z-20 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 pt-32 text-center animate-rise md:pt-36">
        <div className="rounded-[2rem] border border-white/25 bg-black/8 px-8 py-8 shadow-[0_40px_100px_rgba(0,0,0,0.28)] backdrop-blur-[3px] md:px-12">
          <div className="mx-auto mb-4 w-full max-w-xl text-emerald-200/85" aria-hidden="true">
            <svg viewBox="0 0 520 160" className="h-28 w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="forestGround" x1="0" y1="98" x2="0" y2="154" gradientUnits="userSpaceOnUse">
                  <stop stopColor="currentColor" stopOpacity="0.22" />
                  <stop offset="1" stopColor="currentColor" stopOpacity="0.06" />
                </linearGradient>
                <linearGradient id="trunkShade" x1="0" y1="64" x2="0" y2="132" gradientUnits="userSpaceOnUse">
                  <stop stopColor="currentColor" stopOpacity="0.94" />
                  <stop offset="1" stopColor="currentColor" stopOpacity="0.62" />
                </linearGradient>
                <radialGradient id="leafSoft" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(260 64) rotate(90) scale(48 160)">
                  <stop stopColor="currentColor" stopOpacity="0.34" />
                  <stop offset="1" stopColor="currentColor" stopOpacity="0.12" />
                </radialGradient>
              </defs>

              <path d="M10 132H510" stroke="currentColor" strokeOpacity="0.26" strokeWidth="2" />
              <path d="M18 132C48 120 80 116 112 120C136 123 164 118 190 106C216 94 246 92 274 102C302 112 328 120 356 120C384 120 412 112 440 110C466 108 488 116 504 132V154H18V132Z" fill="url(#forestGround)" />

              <g fill="url(#leafSoft)">
                <ellipse cx="74" cy="78" rx="26" ry="18" />
                <ellipse cx="100" cy="72" rx="30" ry="20" />
                <ellipse cx="126" cy="76" rx="24" ry="16" />

                <ellipse cx="168" cy="68" rx="30" ry="21" />
                <ellipse cx="198" cy="62" rx="34" ry="23" />
                <ellipse cx="230" cy="68" rx="28" ry="20" />

                <ellipse cx="258" cy="60" rx="36" ry="25" />
                <ellipse cx="294" cy="66" rx="30" ry="21" />
                <ellipse cx="324" cy="72" rx="26" ry="19" />

                <ellipse cx="356" cy="70" rx="28" ry="20" />
                <ellipse cx="384" cy="64" rx="32" ry="22" />
                <ellipse cx="414" cy="70" rx="28" ry="19" />
                <ellipse cx="446" cy="74" rx="24" ry="17" />
              </g>

              <path d="M56 86V132M82 84V132M104 82V132M124 86V132M166 82V132M194 78V132M220 82V132M246 80V132M272 78V132M298 82V132M324 86V132M354 82V132M382 80V132M408 84V132M438 88V132" stroke="url(#trunkShade)" strokeWidth="3" strokeLinecap="round" />

              <g stroke="currentColor" strokeOpacity="0.7" strokeWidth="2.1" strokeLinecap="round">
                <path d="M82 132L68 146M82 132L78 150M82 132L94 147" />
                <path d="M104 132L90 147M104 132L100 151M104 132L116 147" />
                <path d="M166 132L150 147M166 132L162 151M166 132L178 147" />
                <path d="M194 132L178 147M194 132L190 151M194 132L206 147" />
                <path d="M246 132L230 148M246 132L242 151M246 132L258 147" />
                <path d="M272 132L256 148M272 132L268 151M272 132L286 147" />
                <path d="M324 132L308 148M324 132L320 151M324 132L338 147" />
                <path d="M382 132L366 148M382 132L378 151M382 132L394 147" />
                <path d="M438 132L422 148M438 132L434 151M438 132L450 147" />
              </g>
            </svg>
          </div>
          <p className="tracking-[0.42em] text-emerald-200/80">EIA · IEE · AUDIT · ESG</p>
          <h1 className="font-display mt-3 text-6xl font-bold tracking-[0.08em] text-white drop-shadow-[0_10px_36px_rgba(0,0,0,0.6)] md:text-8xl">
            EnviroCore
          </h1>

          <p className="mt-6 max-w-2xl text-base text-emerald-200 md:text-xl">
            Environmental consultancy for EIA, IEE, compliance audit, and ESG strategy. We support sustainable project approvals, environmental reporting, and long-term impact management.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#about"
              className="rounded-full border border-white/70 bg-white/10 px-8 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Explore Services &gt;
            </a>
            <a
              href="#contact"
              className="rounded-full border border-emerald-300/70 bg-emerald-400/15 px-8 py-3 text-sm text-emerald-100 transition hover:bg-emerald-300/25"
            >
              Request Consultation
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
