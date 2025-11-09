"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function HolographicShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;

      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
      groupRef.current.scale.setScalar(hovered ? scale * 1.2 : scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <group
        ref={groupRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Main Icosahedron */}
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.2, 1]} />
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={0.8}
            emissive="#4f46e5"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Outer Wireframe */}
        <mesh position={[0, 0, 0]} scale={1.5}>
          <icosahedronGeometry args={[1, 0]} />
          <meshBasicMaterial
            color="#60a5fa"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Inner Sphere */}
        <mesh position={[0, 0, 0]} scale={0.7}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#a78bfa"
            transparent
            opacity={0.5}
            roughness={0.1}
            metalness={1}
          />
        </mesh>

        {/* Rotating Rings */}
        {[0, 60, 120].map((rotation, i) => (
          <mesh
            key={i}
            rotation={[
              THREE.MathUtils.degToRad(rotation),
              THREE.MathUtils.degToRad(rotation),
              0,
            ]}
          >
            <torusGeometry args={[1.8, 0.02, 16, 100]} />
            <meshStandardMaterial
              color={["#60a5fa", "#a78bfa", "#ec4899"][i]}
              emissive={["#3b82f6", "#8b5cf6", "#db2777"][i]}
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Floating particles with gradient colors
function EnhancedParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 200;

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Random position
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      // Gradient colors
      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.3 + 0.5, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x =
        Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Animated light beams
function LightBeams() {
  const beamsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (beamsRef.current) {
      beamsRef.current.rotation.z = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={beamsRef}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((angle * Math.PI) / 180) * 3,
            Math.sin((angle * Math.PI) / 180) * 3,
            0,
          ]}
          rotation={[0, 0, (angle * Math.PI) / 180]}
        >
          <planeGeometry args={[0.05, 3]} />
          <meshBasicMaterial
            color="#60a5fa"
            transparent
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

export function Avatar3D() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] relative">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />

      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        className="cursor-pointer"
        gl={{ alpha: true, antialias: true }}
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.8}
          color="#a78bfa"
        />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#ec4899" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.5}
          penumbra={1}
          intensity={2}
          color="#6366f1"
          castShadow
        />

        {/* 3D Elements */}
        <HolographicShapes />
        <EnhancedParticles />
        <LightBeams />

        {/* Camera Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
