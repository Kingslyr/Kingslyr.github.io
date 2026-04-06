import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 5000;

const vertexShader = `
uniform float uTime;
uniform float uScroll;
uniform vec2 uMouse;

varying float vPulse;
varying vec3 vPosition;

void main() {
  vec3 pos = position;

  float waveX = sin(pos.y * 2.0 + uTime * 1.3) * 0.22;
  float waveY = cos(pos.x * 2.1 + uTime * 1.1) * 0.22;
  float waveZ = sin(pos.z * 1.7 + uTime * 0.9) * 0.18;

  pos.x += waveX + cos(pos.z * 1.4 + uTime + uMouse.x * 3.1415) * 0.16;
  pos.y += waveY + sin(pos.x * 1.8 + uTime + uMouse.y * 3.1415) * 0.16;
  pos.z += waveZ + uScroll * 1.25;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

  float pulse = sin(uTime * 2.0 + pos.x * 0.8 + pos.y * 0.4) * 0.5 + 0.5;
  float baseSize = 14.0 + pulse * 8.0 + uScroll * 6.0;

  gl_PointSize = clamp(baseSize * (1.0 / -mvPosition.z), 1.6, 11.0);
  gl_Position = projectionMatrix * mvPosition;

  vPulse = pulse;
  vPosition = pos;
}
`;

const fragmentShader = `
varying float vPulse;
varying vec3 vPosition;

void main() {
  vec2 center = gl_PointCoord - vec2(0.5);
  float distanceToCenter = length(center);

  if (distanceToCenter > 0.5) {
    discard;
  }

  vec3 colorA = vec3(0.17, 0.84, 0.50);
  vec3 colorB = vec3(0.20, 0.88, 0.96);

  float blend = smoothstep(-0.8, 0.8, vPosition.z * 0.12 + vPulse * 0.8);
  vec3 finalColor = mix(colorA, colorB, blend);

  float alpha = smoothstep(0.52, 0.05, distanceToCenter);
  gl_FragColor = vec4(finalColor, alpha * 0.95);
}
`;

export default function MorphingParticleField() {
  const pointsRef = useRef();
  const materialRef = useRef();
  const { camera } = useThree();

  const targetMouse = useRef({ x: 0, y: 0 });
  const targetScroll = useRef(0);

  const positions = useMemo(() => {
    const array = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT * 3; i += 1) {
      array[i] = (Math.random() - 0.5) * 15;
    }
    return array;
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  useEffect(() => {
    const updateMouse = (event) => {
      targetMouse.current.x = event.clientX / window.innerWidth - 0.5;
      targetMouse.current.y = event.clientY / window.innerHeight - 0.5;
    };

    const updateScroll = () => {
      const scrollable = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      targetScroll.current = Math.min(window.scrollY / scrollable, 1);
    };

    updateScroll();
    window.addEventListener("mousemove", updateMouse, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useFrame((state, delta) => {
    if (!materialRef.current || !pointsRef.current) {
      return;
    }

    uniforms.uTime.value = state.clock.elapsedTime;
    uniforms.uMouse.value.lerp(
      new THREE.Vector2(targetMouse.current.x, targetMouse.current.y),
      0.08
    );
    uniforms.uScroll.value += (targetScroll.current - uniforms.uScroll.value) * 0.06;

    camera.position.x += (targetMouse.current.x * 2.1 - camera.position.x) * 0.045;
    camera.position.y += (targetMouse.current.y * -1.1 + 0.2 - camera.position.y) * 0.045;
    camera.position.z += (7.6 - uniforms.uScroll.value * 2.0 - camera.position.z) * 0.04;
    camera.lookAt(0, 0, 0);

    pointsRef.current.rotation.y += delta * 0.09;
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      targetMouse.current.y * 0.25,
      0.06
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        blending={THREE.AdditiveBlending}
        transparent
        depthWrite={false}
      />
    </points>
  );
}
