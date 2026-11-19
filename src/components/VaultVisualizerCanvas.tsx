import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  halftoneBlobVertexShader,
  halftoneBlobFragmentShader
} from '../shaders/halftoneBlobShader';

interface VaultVisualizerCanvasProps {
  activeTrackId?: string | null;
  isHovered?: boolean;
}

export const VaultVisualizerCanvas: React.FC<VaultVisualizerCanvasProps> = ({
  activeTrackId,
  isHovered
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    let width = container.clientWidth || 320;
    let height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 50);
    camera.position.set(0, 0, 3.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // High subdivision sphere for 4D noise displacement
    const geometry = new THREE.SphereGeometry(1.0, 64, 64);

    const uniforms = {
      uTime: { value: 0 },
      uBass: { value: 0 },
      uMids: { value: 0 },
      uHighs: { value: 0 },
      uMorphIntensity: { value: 1.0 }
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: halftoneBlobVertexShader,
      fragmentShader: halftoneBlobFragmentShader,
      uniforms,
      wireframe: false
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Subtle Risograph wireframe orbit ring around the 4D blob
    const ringGeo = new THREE.RingGeometry(1.4, 1.44, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x7b2cbf,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    const clock = new THREE.Clock();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 320;
      height = container.clientHeight || 320;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      const wave = Math.sin(elapsed * 1.5);
      const simEnergy = 0.2 + 0.1 * Math.abs(wave);
      const simBass = 0.2 + 0.1 * Math.max(0, wave);
      const simMids = 0.15 + 0.1 * Math.cos(elapsed * 1.2);
      const simHighs = 0.12 + 0.08 * Math.sin(elapsed * 2.5);

      // State reactive modulation
      const targetIntensity = (activeTrackId ? 1.6 : isHovered ? 1.3 : 0.8) + simEnergy * 0.5;
      uniforms.uMorphIntensity.value += (targetIntensity - uniforms.uMorphIntensity.value) * 0.1;

      uniforms.uTime.value = elapsed * 1.2;
      uniforms.uBass.value = simBass;
      uniforms.uMids.value = simMids;
      uniforms.uHighs.value = simHighs;

      mesh.rotation.y = elapsed * 0.25;
      mesh.rotation.x = Math.sin(elapsed * 0.15) * 0.2;

      ring.rotation.z = elapsed * 0.3;
      ring.rotation.y = Math.cos(elapsed * 0.2) * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, [activeTrackId, isHovered]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280px] sm:h-[340px] flex items-center justify-center pointer-events-none"
    />
  );
};
