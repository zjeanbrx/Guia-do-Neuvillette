'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Configuração básica
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Parâmetros das partículas
    const particleCount = 220;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const oscillationOffsets = new Float32Array(particleCount); // Offset para movimento lateral

    // Criar partículas com diferentes tons de azul
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 200 - 100;     // x
      positions[i * 3 + 1] = Math.random() * 200 - 100; // y
      positions[i * 3 + 2] = Math.random() * 120;       // z
      
      velocities[i * 3 + 1] = -Math.random() * 0.1 - 0.05; // velocidade y (queda lenta)
      velocities[i * 3] = 0; // Velocidade x inicial (será atualizada na animação)

      oscillationOffsets[i] = Math.random() * Math.PI * 2; // Offset aleatório para oscilação

      const hue = 0.6;
      const saturation = 1;
      const lightness = Math.random() * 0.4 + 0.6;
      const color = new THREE.Color().setHSL(hue, saturation, lightness);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material das partículas
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.5,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
    });

    // Criar sistema de partículas
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 100;

    let time = 0; // Variável para controlar o tempo da oscilação

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.016; // Incremento aproximado para 60fps

      // Atualizar posições das partículas
      for (let i = 0; i < particleCount; i++) {
        // Movimento vertical (queda)
        positions[i * 3 + 1] += velocities[i * 3 + 1];

        // Movimento horizontal sutil e aleatório
        const lateralMovement = Math.sin(time + oscillationOffsets[i]) * 0.05; // Amplitude muito pequena
        positions[i * 3] += lateralMovement;

        // Resetar partículas que saem da tela
        if (positions[i * 3 + 1] < -100) {
          positions[i * 3 + 1] = 100;
          positions[i * 3] = Math.random() * 200 - 100; // Resetar x para posição aleatória
        }

        // Manter partículas dentro dos limites laterais
        if (positions[i * 3] > 100) positions[i * 3] = 100;
        if (positions[i * 3] < -100) positions[i * 3] = -100;
      }

      particles.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    // Lidar com resize da janela
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
      scene.remove(particleSystem);
      particles.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  );
}