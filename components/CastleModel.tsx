"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

function Castle() {
  const { nodes, materials } = useGLTF("/castle-compressed.glb");
  const groupRef = useRef<THREE.Group>(null);

  // Slow auto-rotation
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} dispose={null} position={[0, -0.5, 0]}>
      <mesh
        geometry={(nodes.texture_pbr_v128 as THREE.Mesh).geometry}
        material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1}
      />
    </group>
  );
}

useGLTF.preload("/castle-compressed.glb");

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#333" wireframe />
    </mesh>
  );
}

export default function CastleModel() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0.8, 1.8], fov: 40 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-3, 3, -3]} intensity={0.4} />
        <Suspense fallback={<LoadingFallback />}>
          <Castle />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
