import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Globe from "./Globe";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8] }} style={{ position: "absolute", inset: 0 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={2} />
        <pointLight position={[-5, -3, -5]} intensity={1.5} color="#00ff88" />
        <Globe />
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>

      <div className="absolute inset-0 z-10 bg-black/60" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
        <h1 className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
          ENVIROCORE
        </h1>

        <p className="mt-4 text-lg text-green-400">
          Sustainable Solutions for a Greener Future
        </p>

        <a
          href="#contact"
          className="glow mt-6 rounded-full border border-green-400 px-6 py-3 transition hover:bg-green-400 hover:text-black"
        >
          Start Project
        </a>
      </div>
    </section>
  );
}
