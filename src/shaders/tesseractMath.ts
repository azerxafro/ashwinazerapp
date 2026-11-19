import * as THREE from 'three';

export interface TesseractState {
  angleXW: number;
  angleYW: number;
  angleZW: number;
  angleXY: number;
}

// 16 vertices of a 4D hypercube with coordinates in {-1, 1}^4
export const TESSERACT_VERTICES_4D: number[][] = [];
for (let i = 0; i < 16; i++) {
  TESSERACT_VERTICES_4D.push([
    (i & 1) ? 1 : -1,
    (i & 2) ? 1 : -1,
    (i & 4) ? 1 : -1,
    (i & 8) ? 1 : -1,
  ]);
}

// 32 edges: connect vertices that differ in exactly one coordinate (Hamming distance == 1)
export const TESSERACT_EDGES: [number, number][] = [];
for (let i = 0; i < 16; i++) {
  for (let j = i + 1; j < 16; j++) {
    let diff = 0;
    for (let k = 0; k < 4; k++) {
      if (TESSERACT_VERTICES_4D[i][k] !== TESSERACT_VERTICES_4D[j][k]) {
        diff++;
      }
    }
    if (diff === 1) {
      TESSERACT_EDGES.push([i, j]);
    }
  }
}

/**
 * Rotates a 4D vector across 4D rotation planes and projects it into 3D.
 */
export function project4Dto3D(
  v: number[],
  state: TesseractState,
  distance = 2.5
): THREE.Vector3 {
  let [x, y, z, w] = v;

  // Rotation in XW plane
  const cosXW = Math.cos(state.angleXW);
  const sinXW = Math.sin(state.angleXW);
  const x1 = x * cosXW - w * sinXW;
  const w1 = x * sinXW + w * cosXW;
  x = x1;
  w = w1;

  // Rotation in YW plane
  const cosYW = Math.cos(state.angleYW);
  const sinYW = Math.sin(state.angleYW);
  const y1 = y * cosYW - w * sinYW;
  const w2 = y * sinYW + w * cosYW;
  y = y1;
  w = w2;

  // Rotation in ZW plane
  const cosZW = Math.cos(state.angleZW);
  const sinZW = Math.sin(state.angleZW);
  const z1 = z * cosZW - w * sinZW;
  const w3 = z * sinZW + w * cosZW;
  z = z1;
  w = w3;

  // Rotation in XY plane
  const cosXY = Math.cos(state.angleXY);
  const sinXY = Math.sin(state.angleXY);
  const x2 = x * cosXY - y * sinXY;
  const y2 = x * sinXY + y * cosXY;
  x = x2;
  y = y2;

  // 4D Perspective Projection into 3D:
  // scale factor inversely proportional to 4D distance
  const scale = 1.0 / Math.max(0.2, distance - w);
  return new THREE.Vector3(x * scale, y * scale, z * scale);
}

/**
 * Creates or updates BufferGeometry for 32 wireframe edges of the rotating Tesseract.
 */
export function updateTesseractGeometry(
  geometry: THREE.BufferGeometry,
  state: TesseractState,
  scaleMultiplier = 1.0,
  distance = 2.5
): void {
  const projected = TESSERACT_VERTICES_4D.map((v) =>
    project4Dto3D(v, state, distance).multiplyScalar(scaleMultiplier)
  );

  const positions = new Float32Array(TESSERACT_EDGES.length * 2 * 3);
  let ptr = 0;

  for (let i = 0; i < TESSERACT_EDGES.length; i++) {
    const [iA, iB] = TESSERACT_EDGES[i];
    const pA = projected[iA];
    const pB = projected[iB];

    positions[ptr++] = pA.x;
    positions[ptr++] = pA.y;
    positions[ptr++] = pA.z;

    positions[ptr++] = pB.x;
    positions[ptr++] = pB.y;
    positions[ptr++] = pB.z;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
}
