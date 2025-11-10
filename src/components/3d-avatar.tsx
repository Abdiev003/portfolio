"use client";

import { useRef, useMemo, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Code Lines on Screen
function CodeLines() {
  const groupRef = useRef<THREE.Group>(null);
  const [time, setTime] = useState(0);

  useFrame((state) => {
    setTime(state.clock.getElapsedTime());
  });

  // Generate code line patterns
  const codeLines = useMemo(() => {
    const lines = [];
    const lineCount = 12;
    const startY = 0.7;
    const lineHeight = 0.12;

    for (let i = 0; i < lineCount; i++) {
      const y = startY - i * lineHeight;
      const lineWidth = Math.random() * 1.5 + 0.8;
      const xOffset = -1.2;

      // Different colors for syntax highlighting
      const colorIndex = Math.floor(Math.random() * 4);
      const colors = [
        { color: "#60a5fa", emissive: "#3b82f6" }, // Blue - keywords
        { color: "#34d399", emissive: "#10b981" }, // Green - strings
        { color: "#a78bfa", emissive: "#8b5cf6" }, // Purple - functions
        { color: "#f472b6", emissive: "#ec4899" }, // Pink - variables
      ];

      lines.push({
        id: i,
        y,
        width: lineWidth,
        x: xOffset,
        ...colors[colorIndex],
        delay: i * 0.1,
      });

      // Add some dots (like syntax elements)
      const dotCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < dotCount; j++) {
        lines.push({
          id: `${i}-${j}`,
          y,
          width: 0.05,
          x: xOffset + lineWidth + 0.1 + j * 0.15,
          color: colors[Math.floor(Math.random() * 4)].color,
          emissive: colors[Math.floor(Math.random() * 4)].emissive,
          delay: i * 0.1 + j * 0.05,
        });
      }
    }
    return lines;
  }, []);

  return (
    <group ref={groupRef}>
      {codeLines.map((line) => {
        // Typing animation effect
        const progress = Math.max(0, Math.min(1, (time - line.delay) / 0.5));
        const animatedWidth = line.width * progress;

        if (progress === 0) return null;

        return (
          <mesh
            key={line.id}
            position={[line.x + animatedWidth / 2, line.y, 0]}
          >
            <planeGeometry args={[animatedWidth, 0.06]} />
            <meshStandardMaterial
              color={line.color}
              emissive={line.emissive}
              emissiveIntensity={0.6}
              transparent
              opacity={0.9}
            />
          </mesh>
        );
      })}

      {/* Blinking cursor */}
      <mesh position={[1.0, 0.7 - (Math.floor(time * 2) % 12) * 0.12, 0]}>
        <planeGeometry args={[0.04, 0.08]} />
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={Math.sin(time * 3) > 0 ? 1 : 0}
        />
      </mesh>
    </group>
  );
}

// 3D Laptop/Computer
function Laptop() {
  const laptopRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <group ref={laptopRef} position={[0, -0.5, 0]}>
      {/* Screen */}
      <mesh position={[0, 1, -0.05]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>

      {/* Screen Background (dark) */}
      <mesh position={[0, 1, 0.01]} rotation={[-0.1, 0, 0]}>
        <planeGeometry args={[2.8, 1.8]} />
        <meshStandardMaterial
          color="#0f172a"
          emissive="#1e293b"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Code Lines on Screen */}
      <group position={[0, 1, 0.02]} rotation={[-0.1, 0, 0]}>
        <CodeLines />
      </group>

      {/* Keyboard Base */}
      <mesh position={[0, 0, 0.8]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial color="#2d2d44" />
      </mesh>

      {/* Keys (grid of small cubes) */}
      {Array.from({ length: 60 }).map((_, i) => {
        const x = (i % 10) * 0.25 - 1.125;
        const z = Math.floor(i / 10) * 0.25 + 0.2;
        return (
          <mesh key={i} position={[x, 0.05, z]}>
            <boxGeometry args={[0.2, 0.05, 0.2]} />
            <meshStandardMaterial
              color="#3a3a5a"
              emissive="#60a5fa"
              emissiveIntensity={Math.random() * 0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Code particles flying from screen
function CodeParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 150;

  const { positions, colors, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Start from screen area
      positions[i * 3] = (Math.random() - 0.5) * 3;
      positions[i * 3 + 1] = Math.random() * 2;
      positions[i * 3 + 2] = Math.random() * 5 - 2;

      // Random colors (blue, cyan, green spectrum)
      const hue = Math.random() * 0.3 + 0.5; // 0.5-0.8 range (blue to green)
      const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      speeds[i] = Math.random() * 0.5 + 0.5;
    }

    return { positions, colors, speeds };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < count; i++) {
        // Move particles outward from screen
        positions[i * 3 + 2] += speeds[i] * 0.02;

        // Reset if too far
        if (positions[i * 3 + 2] > 5) {
          positions[i * 3] = (Math.random() - 0.5) * 3;
          positions[i * 3 + 1] = Math.random() * 2;
          positions[i * 3 + 2] = -2;
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
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
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Floating code blocks (using simple cubes as "text")
function FloatingCodeBlocks() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 30 }).map((_, i) => {
        const angle = (i / 30) * Math.PI * 2;
        const radius = 5 + Math.random() * 2;
        const height = (Math.random() - 0.5) * 4;

        return (
          <FloatingCodeBlock
            key={i}
            position={[
              Math.cos(angle) * radius,
              height,
              Math.sin(angle) * radius,
            ]}
            delay={i * 0.1}
          />
        );
      })}
    </group>
  );
}

function FloatingCodeBlock({
  position,
  delay,
}: {
  position: [number, number, number];
  delay: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const color = useMemo(() => {
    const colors = ["#60a5fa", "#34d399", "#a78bfa", "#f472b6"];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.getElapsedTime() + delay) * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() + delay;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5 + delay;
    }
  });

  // Random size for variety (representing different code lengths)
  const width = Math.random() * 0.3 + 0.1;
  const height = Math.random() * 0.2 + 0.05;

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[width, height, 0.05]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

// Binary rain (like Matrix)
function BinaryRain() {
  const groupRef = useRef<THREE.Group>(null);
  const streams = 20;

  return (
    <group ref={groupRef}>
      {Array.from({ length: streams }).map((_, i) => (
        <BinaryStream
          key={i}
          position={[(Math.random() - 0.5) * 10, 5, (Math.random() - 0.5) * 10]}
          delay={i * 0.3}
        />
      ))}
    </group>
  );
}

function BinaryStream({
  position,
  delay,
}: {
  position: [number, number, number];
  delay: number;
}) {
  const streamRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (streamRef.current) {
      const offset = (state.clock.getElapsedTime() * 0.5 + delay) % 10;
      streamRef.current.position.y = 5 - offset;
    }
  });

  return (
    <group ref={streamRef} position={position}>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[0, -i * 0.3, 0]}>
          <boxGeometry args={[0.1, 0.2, 0.05]} />
          <meshBasicMaterial
            color="#10b981"
            transparent
            opacity={1 - i * 0.2}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

// Typing animation indicators
function TypingIndicators() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const scale = 1 + Math.sin(state.clock.getElapsedTime() * 3 + i) * 0.3;
        child.scale.setScalar(Math.max(0.5, scale));
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, 1.2, 0.1]}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[i * 0.3 - 0.3, 0, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#3b82f6"
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </group>
  );
}

// Glowing rings around the laptop
function GlowingRings() {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.z = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={ringsRef}>
      {[3, 4, 5].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.5, 0]}>
          <torusGeometry args={[radius, 0.02, 16, 100]} />
          <meshBasicMaterial
            color={["#60a5fa", "#a78bfa", "#ec4899"][i]}
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
    <div className="w-full h-[450px] relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl" />

      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        className="cursor-pointer h-full"
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[0, 2, 2]} intensity={2} color="#60a5fa" />
          <pointLight position={[5, 5, 5]} intensity={1} color="#a78bfa" />
          <pointLight position={[-5, 3, -5]} intensity={1} color="#ec4899" />
          <spotLight
            position={[0, 5, 0]}
            angle={0.6}
            penumbra={1}
            intensity={1.5}
            color="#60a5fa"
          />

          {/* Main Elements */}
          <Laptop />
          <TypingIndicators />
          <CodeParticles />
          <FloatingCodeBlocks />
          <BinaryRain />
          <GlowingRings />

          {/* Camera Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
