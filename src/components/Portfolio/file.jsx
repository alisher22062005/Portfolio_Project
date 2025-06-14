import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function RotatingCard({ image }) {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, image);

  useFrame(() => {
    ref.current.rotation.y += 0.01; // continuous rotation
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 3]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}
