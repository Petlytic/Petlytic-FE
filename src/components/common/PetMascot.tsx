"use client";

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'motion/react';
import * as THREE from 'three';

function Dog() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Body */}
        <mesh position={[0, 0, 0]}>
          <capsuleGeometry args={[0.6, 1.2, 16, 32]} />
          <meshStandardMaterial color="#FF6B9D" roughness={0.3} />
        </mesh>
        
        {/* Head */}
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#FF6B9D" roughness={0.3} />
        </mesh>
        
        {/* Ears */}
        <mesh position={[-0.4, 1.5, 0]} rotation={[0, 0, -0.5]}>
          <coneGeometry args={[0.2, 0.6, 16]} />
          <meshStandardMaterial color="#FF4D8C" roughness={0.3} />
        </mesh>
        <mesh position={[0.4, 1.5, 0]} rotation={[0, 0, 0.5]}>
          <coneGeometry args={[0.2, 0.6, 16]} />
          <meshStandardMaterial color="#FF4D8C" roughness={0.3} />
        </mesh>
        
        {/* Eyes */}
        <mesh position={[-0.25, 1.3, 0.5]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.25, 1.3, 0.5]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        
        {/* Nose */}
        <mesh position={[0, 1, 0.6]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        
        {/* Tail */}
        <mesh position={[0, 0.2, -0.8]} rotation={[0.5, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.05, 0.8, 16]} />
          <meshStandardMaterial color="#FF4D8C" roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

export function PetMascot() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full h-full"
    >
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#A855F7" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22D3EE" />
          <Dog />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
