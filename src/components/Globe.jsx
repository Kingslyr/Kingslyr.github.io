import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function Globe() {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/earth.jpg");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0015;
    }
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.65}
          metalness={0.15}
          emissive="#0f3b2b"
          emissiveIntensity={0.18}
        />
      </mesh>

      <mesh scale={2.1}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial color="#00ff88" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}
