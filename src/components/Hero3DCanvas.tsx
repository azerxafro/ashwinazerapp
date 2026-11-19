import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  TesseractState,
  updateTesseractGeometry
} from '../shaders/tesseractMath';
import {
  heroPortraitVertexShader,
  heroPortraitFragmentShader
} from '../shaders/heroPortraitShaders';

interface Hero3DCanvasProps {
  onAudioPeak?: () => void;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ onAudioPeak }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.0);

    // Renderer with strict performance budget (dpr 1 - 1.5)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0xeeff00, 0); // Transparent so acid yellow canvas shines
    container.appendChild(renderer.domElement);

    // 1. TESSERACT 4D HYPERCUBE
    const tesseractState: TesseractState = {
      angleXW: 0,
      angleYW: 0,
      angleZW: 0,
      angleXY: 0
    };

    const tesseractGeometry = new THREE.BufferGeometry();
    updateTesseractGeometry(tesseractGeometry, tesseractState, 1.7, 2.5);

    // Stark Risograph Purple & Toner Black wireframe lines
    const tesseractMaterial = new THREE.LineBasicMaterial({
      color: 0x7b2cbf, // Risograph Purple
      linewidth: 2,
      transparent: true,
      opacity: 0.85
    });

    const tesseractLines = new THREE.LineSegments(tesseractGeometry, tesseractMaterial);
    tesseractLines.position.set(0, 0.1, -0.6); // Intersects behind and slightly through portrait
    scene.add(tesseractLines);

    // Secondary black wireframe halo for depth
    const blackHaloMaterial = new THREE.LineBasicMaterial({
      color: 0x090909,
      linewidth: 1,
      transparent: true,
      opacity: 0.4
    });
    const tesseractBlackLines = new THREE.LineSegments(tesseractGeometry.clone(), blackHaloMaterial);
    tesseractBlackLines.position.set(0, 0.1, -0.65);
    scene.add(tesseractBlackLines);

    // 2. LAYERED ASHWIN AZER CUTOUT PORTRAIT (3 Z-DEPTH PLATES)
    const textureLoader = new THREE.TextureLoader();
    const portraitTexture = textureLoader.load('/images/hero-portrait.png', (tex) => {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
    });

    const portraitGroup = new THREE.Group();
    scene.add(portraitGroup);

    // Common uniforms for portrait shader
    const createPortraitUniforms = (layerIndex: number) => ({
      uTexture: { value: portraitTexture },
      uTime: { value: 0 },
      uBass: { value: 0 },
      uMids: { value: 0 },
      uHighs: { value: 0 },
      uLayerIndex: { value: layerIndex },
      uResolution: { value: new THREE.Vector2(width, height) }
    });

    // Plate 0: Acid Yellow Paper Base
    const matLayer0 = new THREE.ShaderMaterial({
      vertexShader: heroPortraitVertexShader,
      fragmentShader: heroPortraitFragmentShader,
      uniforms: createPortraitUniforms(0.0),
      transparent: false,
      depthWrite: true
    });

    // Plate 1: Risograph Purple Misregistration Layer
    const matLayer1 = new THREE.ShaderMaterial({
      vertexShader: heroPortraitVertexShader,
      fragmentShader: heroPortraitFragmentShader,
      uniforms: createPortraitUniforms(1.0),
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    // Plate 2: Deep Toner Ink Black Halftone Foreground
    const matLayer2 = new THREE.ShaderMaterial({
      vertexShader: heroPortraitVertexShader,
      fragmentShader: heroPortraitFragmentShader,
      uniforms: createPortraitUniforms(2.0),
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    const portraitGeo = new THREE.PlaneGeometry(2.8, 2.8, 48, 48);

    const meshLayer0 = new THREE.Mesh(portraitGeo, matLayer0);
    const meshLayer1 = new THREE.Mesh(portraitGeo, matLayer1);
    const meshLayer2 = new THREE.Mesh(portraitGeo, matLayer2);

    portraitGroup.add(meshLayer0);
    portraitGroup.add(meshLayer1);
    portraitGroup.add(meshLayer2);

    // Raw Jagged Cutout White Border Frame around Portrait
    const borderGeo = new THREE.PlaneGeometry(2.9, 2.9);
    const borderMat = new THREE.MeshBasicMaterial({
      color: 0xf7f7f2, // Raw Paper White
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.95
    });
    const borderMesh = new THREE.Mesh(borderGeo, borderMat);
    borderMesh.position.set(0, 0, -0.22);
    portraitGroup.add(borderMesh);

    // Spring Physics & Pointer Parallax State
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    let targetTransX = 0;
    let targetTransY = 0;
    let currentTransX = 0;
    let currentTransY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotY = nx * 0.35;
      targetRotX = -ny * 0.3;
      targetTransX = nx * 0.25;
      targetTransY = ny * 0.2;
    };

    // Mobile Touch and Gyroscope Fallback
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const nx = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const ny = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);

        targetRotY = nx * 0.4;
        targetRotX = -ny * 0.35;
        targetTransX = nx * 0.25;
        targetTransY = ny * 0.2;
      }
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        // gamma is left/right [-90, 90], beta is front/back [-180, 180]
        const nx = Math.max(-1, Math.min(1, e.gamma / 35));
        const ny = Math.max(-1, Math.min(1, (e.beta - 45) / 35));
        targetRotY = nx * 0.35;
        targetRotX = -ny * 0.3;
      }
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    }

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

      matLayer0.uniforms.uResolution.value.set(width, height);
      matLayer1.uniforms.uResolution.value.set(width, height);
      matLayer2.uniforms.uResolution.value.set(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Fluid geometric breathing oscillations (fluid 60fps, decoupled from Web Audio oscillators)
      const pulse = Math.sin(elapsedTime * 1.8);
      const wave = Math.cos(elapsedTime * 1.2);
      const simBass = 0.25 + 0.15 * Math.max(0, pulse);
      const simMids = 0.2 + 0.1 * Math.abs(wave);
      const simHighs = 0.15 + 0.1 * Math.sin(elapsedTime * 3.1);
      const simEnergy = 0.2 + 0.15 * Math.sin(elapsedTime * 1.5);

      // 1. Tesseract 4D Rotation:
      const tesseractSpeed = 0.8 + simMids * 1.2;
      tesseractState.angleXW += 0.012 * tesseractSpeed;
      tesseractState.angleYW += 0.018 * tesseractSpeed;
      tesseractState.angleZW += 0.009 * tesseractSpeed;
      tesseractState.angleXY += 0.006 * tesseractSpeed;

      // Update Tesseract line vertices in 3D
      const tesseractScale = 1.7 + simBass * 0.2;
      updateTesseractGeometry(tesseractGeometry, tesseractState, tesseractScale, 2.5);
      tesseractGeometry.attributes.position.needsUpdate = true;

      // Pulse color opacity
      tesseractMaterial.opacity = 0.75 + simEnergy * 0.25;
      tesseractMaterial.color.setHex(0x7b2cbf); // Riso Purple

      // 2. Damped Spring Physics for Cursor/Tilt
      const springDamp = 0.08;
      currentRotX += (targetRotX - currentRotX) * springDamp;
      currentRotY += (targetRotY - currentRotY) * springDamp;
      currentTransX += (targetTransX - currentTransX) * springDamp;
      currentTransY += (targetTransY - currentTransY) * springDamp;

      portraitGroup.rotation.x = currentRotX;
      portraitGroup.rotation.y = currentRotY;
      portraitGroup.position.x = currentTransX;
      portraitGroup.position.y = currentTransY;

      // Dynamic Z-Depth Plate separation
      meshLayer1.position.z = 0.04 + simBass * 0.1;
      meshLayer2.position.z = 0.08 + simBass * 0.18;

      // Subtle lateral chromatic slippage between plates
      meshLayer1.position.x = 0.03 + (currentRotY * 0.2) + (simHighs * 0.03);
      meshLayer1.position.y = -0.01 + (currentRotX * 0.15);

      // 3. Update GLSL Uniforms
      [matLayer0, matLayer1, matLayer2].forEach((mat) => {
        mat.uniforms.uTime.value = elapsedTime;
        mat.uniforms.uBass.value = simBass;
        mat.uniforms.uMids.value = simMids;
        mat.uniforms.uHighs.value = simHighs;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      tesseractGeometry.dispose();
      tesseractMaterial.dispose();
      blackHaloMaterial.dispose();
      portraitGeo.dispose();
      matLayer0.dispose();
      matLayer1.dispose();
      matLayer2.dispose();
      borderGeo.dispose();
      borderMat.dispose();
      portraitTexture.dispose();
      renderer.dispose();
    };
  }, [onAudioPeak]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[620px] md:h-[720px] flex items-center justify-center pointer-events-auto"
      style={{ touchAction: 'none' }}
    />
  );
};
