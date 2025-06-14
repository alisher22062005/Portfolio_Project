// // src/components/SceneWrapper.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RotatingCard from "./file";
import frame2 from "../../assets/Frame (1).png";

export default function SceneWrapper() {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 2, 5]} />
        <RotatingCard image={frame2} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
