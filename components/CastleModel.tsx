"use client";

import { Suspense, useRef, useState, useEffect, Component, ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Html, useProgress } from "@react-three/drei";
import * as THREE from "three";

// A small component that reports when it has mounted (meaning Suspense is finished)
function ReportReady({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    // Small delay to ensure the scene has actually had its first render
    const timer = setTimeout(onReady, 500);
    return () => clearTimeout(timer);
  }, [onReady]);
  return null;
}

function Castle() {
  const gltf = useGLTF("/castle-compressed.glb");
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  // Safely find the first mesh node regardless of exported name
  const meshNode = Object.values(gltf.nodes).find(
    (n): n is THREE.Mesh => (n as THREE.Mesh).isMesh === true
  );

  if (!meshNode) return null;

  const material = Object.values(gltf.materials)[0] as THREE.Material | undefined;

  return (
    <group ref={groupRef} dispose={null} position={[0, -0.5, 0]}>
      <mesh
        geometry={meshNode.geometry}
        material={material}
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
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="absolute w-full h-full animate-spin-slow opacity-20" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
            <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
          </svg>
          <span
            style={{ fontFamily: "var(--font-cinzel)" }}
            className="text-white text-xl font-bold tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          >
            {Math.round(localProgress)}%
          </span>
        </div>
        <p
          style={{ fontFamily: "var(--font-cinzel)" }}
          className="text-[#5a6266] text-[10px] tracking-[0.3em] uppercase mt-4 animate-pulse"
        >
          Summoning Citadel...
        </p>
      </div>
    </Html>
  );
}

interface ErrorBoundaryState { hasError: boolean }
class CanvasErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="opacity-10 text-white text-xs tracking-widest font-light" style={{ fontFamily: "var(--font-cinzel)" }}>
            ~ loading error ~
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function CastleModel({ onLoaded }: { onLoaded?: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative" }}
      className="pointer-events-none md:pointer-events-auto"
    >
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0.7, 1.6], fov: 35 }}
          style={{ width: "100%", height: "100%" }}
          gl={{ antialias: true, alpha: true }}
        >
          {/* Fully self-contained lighting — no external CDN dependency */}
          <ambientLight intensity={0.5} />
          {/* Key light — warm from front-right */}
          <directionalLight position={[4, 6, 4]} intensity={1.4} color="#fff8f0" />
          {/* Fill light — cool blue from left */}
          <directionalLight position={[-4, 2, -2]} intensity={0.5} color="#a0b8d0" />
          {/* Rim light — gold from behind */}
          <directionalLight position={[0, -2, -6]} intensity={0.6} color="#b08d57" />
          {/* Soft ground bounce */}
          <hemisphereLight args={["#1a1a2e", "#0d0d0d", 0.4]} />

          <Suspense fallback={<FantasyLoader />}>
            <Castle />
            {onLoaded && <ReportReady onReady={onLoaded} />}
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
