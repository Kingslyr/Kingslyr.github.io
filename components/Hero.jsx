import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Globe from "./Globe";

export default function Hero() {
  return (
    <section style={{ height: "100vh", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight />
        <Globe />
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>

      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center"
      }}>
        <h1>EnviroCore</h1>
        <p style={{ color: "#00ff88" }}>
          Sustainable Solutions for a Greener Future
        </p>
      </div>
    </section>
  );
}
