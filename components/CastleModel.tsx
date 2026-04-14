"use client";

import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, Html, useProgress } from "@react-three/drei";
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

function FantasyLoader() {
  const { progress } = useProgress();
  const [localProgress, setLocalProgress] = useState(0);

  useEffect(() => {
    setLocalProgress(progress);
  }, [progress]);

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center w-[300px] h-[300px]">
        {/* Magic Circle SVG */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="absolute w-full h-full animate-spin-slow opacity-20" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
            <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
          </svg>
          <span 
            style={{ fontFamily: 'var(--font-cinzel)' }}
            className="text-white text-xl font-bold tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          >
            {Math.round(localProgress)}%
          </span>
        </div>
        <p 
          style={{ fontFamily: 'var(--font-cinzel)' }}
          className="text-[#5a6266] text-[10px] tracking-[0.3em] uppercase mt-4 animate-pulse"
        >
          Summoning Citadel...
        </p>
      </div>
    </Html>
  );
}

export default function CastleModel() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0.7, 1.6], fov: 35 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-3, 3, -3]} intensity={0.4} />
        <Suspense fallback={<FantasyLoader />}>
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
