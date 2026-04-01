import { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function Globe() {
  const ref = useRef();
  const nodeRefs = useRef([]);
  const texture = useLoader(THREE.TextureLoader, "/earth.jpg");

  const network = useMemo(() => {
    const latLngToVec3 = (lat, lng, radius = 2.06) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      return [x, y, z];
    };

    const nodeLatLng = [
      [24, 67],
      [35, -120],
      [-23, -46],
      [1, 103],
      [19, 72],
      [51, 0],
      [-1, 36],
    ];

    const links = [
      [0, 4],
      [4, 3],
      [3, 6],
      [6, 5],
      [5, 1],
      [0, 2],
      [2, 1],
    ];

    const nodes = nodeLatLng.map(([lat, lng]) => latLngToVec3(lat, lng));
    const linkPositions = links.map(([a, b]) => [...nodes[a], ...nodes[b]]);

    return { nodes, linkPositions };
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y += 0.0015;
    }

    const t = clock.getElapsedTime();
    nodeRefs.current.forEach((node, index) => {
      if (!node) {
        return;
      }
      const pulse = 1 + Math.sin(t * 2.2 + index) * 0.35;
      node.scale.setScalar(pulse);
    });
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.65}
          metalness={0.15}
          emissive="#0f3b2b"
          emissiveIntensity={0.18}
        />
      </mesh>

      {network.linkPositions.map((linePosition, index) => (
        <line key={`line-${index}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array(linePosition)}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#61ffc2" transparent opacity={0.55} />
        </line>
      ))}

      {network.nodes.map((position, index) => (
        <mesh
          key={`node-${index}`}
          ref={(el) => {
            nodeRefs.current[index] = el;
          }}
          position={position}
        >
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color="#7dffd0" />
        </mesh>
      ))}

      <mesh scale={2.1}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial
          color="#00ff88"
          transparent
          opacity={0.16}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
