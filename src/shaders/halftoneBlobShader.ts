import { simplexNoise4DGLSL } from './heroPortraitShaders';

export const halftoneBlobVertexShader = `
uniform float uTime;
uniform float uBass;
uniform float uMids;
uniform float uMorphIntensity;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;

${simplexNoise4DGLSL}

void main() {
  vUv = uv;
  vNormal = normal;

  vec3 pos = position;

  // 4D simplex noise displacement on sphere surface
  vec4 noiseCoord = vec4(normal * 2.2, uTime * 0.45);
  float displacement = snoise(noiseCoord);

  // Secondary harmonic
  vec4 detailCoord = vec4(normal * 5.0, uTime * 0.9);
  float detail = snoise(detailCoord) * 0.4;

  float totalDisplacement = (displacement + detail) * (0.28 + uBass * 0.45) * uMorphIntensity;

  pos += normal * totalDisplacement;
  vPosition = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

export const halftoneBlobFragmentShader = `
uniform float uTime;
uniform float uBass;
uniform float uMids;
uniform float uHighs;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;

${simplexNoise4DGLSL}

void main() {
  // Lighting computation
  vec3 lightDir = normalize(vec3(1.0, 1.5, 2.0));
  vec3 norm = normalize(vNormal);
  float diff = clamp(dot(norm, lightDir), 0.0, 1.0);

  // Dynamic 4D noise on luminance
  float surfaceNoise = snoise(vec4(vPosition * 3.0, uTime * 0.2)) * 0.15;
  float lum = diff + surfaceNoise;

  // Screen space or UV halftone dot matrix
  vec2 screenPos = gl_FragCoord.xy * 0.12;
  vec2 gridUv = fract(screenPos) - 0.5;
  float dist = length(gridUv);

  float radius = sqrt(clamp(1.0 - lum, 0.0, 1.0)) * 0.65;
  float dotMask = 1.0 - smoothstep(radius - 0.08, radius + 0.08, dist);

  vec3 colorYellow = vec3(0.933, 1.0, 0.0); // #EEFF00
  vec3 colorBlack  = vec3(0.035, 0.035, 0.035); // #090909
  vec3 colorPurple = vec3(0.482, 0.173, 0.749); // #7B2CBF

  // Blend black ink halftone dots on acid yellow paper
  vec3 finalColor = mix(colorYellow, colorBlack, dotMask);

  // Purple rim lighting / misregistration flash on highs
  float rim = 1.0 - clamp(dot(normalize(-vPosition), norm), 0.0, 1.0);
  if (rim > 0.65) {
    float purpleFlash = (rim - 0.65) * 2.5 * (0.5 + uHighs * 0.8);
    finalColor = mix(finalColor, colorPurple, clamp(purpleFlash, 0.0, 1.0));
  }

  gl_FragColor = vec4(finalColor, 1.0);
}
`;
