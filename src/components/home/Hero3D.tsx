"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function BrutalistShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 0]} />
        <meshStandardMaterial 
          color="#FF3B00" 
          wireframe={true} 
          wireframeLinewidth={3}
        />
      </mesh>
      <mesh scale={0.98}>
        <icosahedronGeometry args={[2, 0]} />
        <MeshDistortMaterial
          color="#FFD700"
          envMapIntensity={0.5}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.8}
          roughness={0.2}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none mix-blend-multiply opacity-80 hidden md:block">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#FF3B00" />
        <BrutalistShape />
      </Canvas>
    </div>
  );
}
