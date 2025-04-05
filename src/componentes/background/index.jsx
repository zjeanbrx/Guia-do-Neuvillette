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
    const colors = new Float32Array(particleCount * 3); // Array para cores

    // Criar partículas com diferentes tons de azul
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 200 - 100;     // x
      positions[i * 3 + 1] = Math.random() * 200 - 100; // y
      positions[i * 3 + 2] = Math.random() * 120; // z
      
      velocities[i * 3 + 1] = -Math.random() * 0.1 - 0.05; // velocidade y (queda lenta)

      // Definir tons de azul variados (mantendo saturação e luminosidade altas)
      const hue = 0.6; // Base azul
      const saturation = 1;
      const lightness = Math.random() * 0.4 + 0.6; // Variação entre 60% e 100%
      const color = new THREE.Color().setHSL(hue, saturation, lightness);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material das partículas sem cintilação
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.5,
      transparent: true,
      opacity: 0.8,
      vertexColors: true, // Habilitar cores por vértice
    });

    // Criar sistema de partículas
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 100;

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Atualizar posições das partículas
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += velocities[i * 3 + 1]; // Atualiza y

        // Resetar partículas que saem da tela
        if (positions[i * 3 + 1] < -100) {
          positions[i * 3 + 1] = 100;
        }
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