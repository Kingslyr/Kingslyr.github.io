import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Globe() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial wireframe color="#00ff88" />
    </mesh>
  );
}
