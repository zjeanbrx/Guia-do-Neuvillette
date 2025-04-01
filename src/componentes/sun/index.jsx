'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Moon3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Configuração da cena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio será ajustado
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    // Função para atualizar o tamanho do renderer
    const updateRendererSize = () => {
      if (mountRef.current) {
        const { clientWidth } = mountRef.current;
        const height = 600; // Altura fixa de 600px
        renderer.setSize(clientWidth, height);
        camera.aspect = clientWidth / height;
        camera.updateProjectionMatrix();
      }
    };

    // Inicializa o tamanho do renderer
    updateRendererSize();
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Criando a lua
    const radius = 1;
    const geometry = new THREE.SphereGeometry(radius, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    const material = new THREE.MeshPhongMaterial({
      map: textureLoader.load('/personagens/Neuvillette.webp'), // Substitua pelo caminho da sua textura
      shininess: 30,
      specular: 0x333333,
    });
    const moon = new THREE.Mesh(geometry, material);
    scene.add(moon);

    // Adicionando uma luz ambiente
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Adicionando uma luz direcional que seguirá o cursor
    const cursorLight = new THREE.PointLight(0xffffff, 3, 10);
    cursorLight.position.set(0, 0, 3);
    scene.add(cursorLight);

    // Posicionando a câmera
    camera.position.z = 3;

    // Criando as partículas de emoji de água (usando Sprites)
    const particleCount = 20;
    const particles = [];
    const angles = new Float32Array(particleCount);

    // Carregar a textura do emoji de água
    const particleTexture = textureLoader.load('/icones/agua.png');

    // Material para as partículas (usando SpriteMaterial)
    const particleMaterial = new THREE.SpriteMaterial({
      map: particleTexture,
      transparent: true,
      alphaTest: 0.5,
      color: 0x1e3a8a, // Cor azul escura para simular água escura
    });

    // Definir as posições iniciais das partículas em um anel ao redor da lua
    const orbitRadius = 1.5;
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      angles[i] = angle;

      const particle = new THREE.Sprite(particleMaterial);
      particle.scale.set(0.2, 0.2, 0.2); // Tamanho do sprite
      particle.position.x = orbitRadius * Math.cos(angle);
      particle.position.y = 0;
      particle.position.z = orbitRadius * Math.sin(angle);
      particles.push(particle);
      scene.add(particle);
    }

    // Função para atualizar a posição da luz com base no cursor
    const handleMouseMove = (event) => {
      const { clientWidth, clientHeight } = mountRef.current;
      const rect = mountRef.current.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / clientWidth) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / clientHeight) * 2 + 1;

      cursorLight.position.x = mouseX * 5;
      cursorLight.position.y = mouseY * 5;
      cursorLight.position.z = 3;
    };

    // Adiciona o evento de movimento do mouse
    window.addEventListener('mousemove', handleMouseMove);

    // Animação
    // Animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotação da lua
      moon.rotation.y += 0.005;

      // Animação das partículas (órbita)
      for (let i = 0; i < particleCount; i++) {
        angles[i] += 0.02;
        const angle = angles[i];
        particles[i].position.x = orbitRadius * Math.cos(angle);
        particles[i].position.y = 0.3 * Math.sin(angle);
        particles[i].position.z = orbitRadius * Math.sin(angle);

        // Simular iluminação: ajustar a cor da partícula com base na proximidade da luz
        const distanceToLight = particles[i].position.distanceTo(cursorLight.position);
        const maxDistance = 5; // Distância máxima para o efeito de luz
        const intensity = Math.max(0, 1 - distanceToLight / maxDistance); // Intensidade baseada na distância
        const baseColor = new THREE.Color(0x0a1430); // Cor base (azul escuro)
        const lightColor = new THREE.Color(0xffffff); // Cor da luz (branco)
        const finalColor = baseColor.clone().lerp(lightColor, intensity * 0.6); // Mistura as cores
        particles[i].material.color = finalColor;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Ajuste responsivo
    const handleResize = () => {
      updateRendererSize();
    };
    window.addEventListener('resize', handleResize);

    // Limpeza
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%', // 100% da largura do pai
        height: '600px', // Altura fixa de 600px
        background: '#000',
      }}
    />
  );
}