import Hero from "./components/Hero";
import EcoScene from "./components/EcoScene";
import Stats from "./components/Stats";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div style={{ background: "black", color: "white" }}>
      <Hero />
      <EcoScene />
      <Stats />
      <Contact />

      <a href="https://wa.me/923362171881"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#25D366",
          padding: 15,
          borderRadius: "50%"
        }}>
        💬
      </a>
    </div>
  );
}
