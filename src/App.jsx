import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Globe() {
  return (
    <mesh rotation={[0.3, 0.5, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial wireframe color="#00ff88" />
    </mesh>
  );
}

export default function App() {
  return (
    <div style={{ background: "black", color: "white" }}>
      
      {/* HERO */}
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

      {/* STATS */}
      <section style={{ textAlign: "center", padding: "40px" }}>
        <h2>15+ Projects Completed</h2>
        <h2>5+ Years Experience</h2>
        <h2>Sindh Region Active</h2>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <form action="https://formspree.io/f/mzdkbpep" method="POST">
          <input placeholder="Name" name="name" required /><br/><br/>
          <input placeholder="Email" name="email" required /><br/><br/>
          <textarea placeholder="Project Description" name="message" /><br/><br/>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/923362171881?text=Hello%20EnviroCore%2C%20I%20need%20EIA%20services"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          padding: "15px",
          borderRadius: "50%",
          color: "white",
          textDecoration: "none"
        }}
      >
        💬
      </a>
    </div>
  );
}
