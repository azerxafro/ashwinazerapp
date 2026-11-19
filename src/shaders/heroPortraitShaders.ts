export const simplexNoise4DGLSL = `
// Simplex 4D noise by Ian McEwan, Stefan Gustavsson
vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

float mod289(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

float permute(float x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip) {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p, s;

  p.xyz = floor(fract(vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz * 2.0 - 1.0) * s.www;

  return p;
}

#define F4 0.309016994374947451

float snoise(vec4 v) {
  const vec4 C = vec4(
    0.138196601125011,  // (5 - sqrt(5))/20  G4
    0.276393202250021,  // 2 * G4
    0.414589803375032,  // 3 * G4
   -0.447213595499958   // -1 + 4 * G4
  );

  // First corner
  vec4 i  = floor(v + dot(v, vec4(F4)) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

  // Other corners
  vec4 i0;
  vec3 isX = step(x0.yzw, x0.xxx);
  vec3 isYZ = step(x0.zww, x0.yyz);
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  vec4 i3 = clamp(i0, 0.0, 1.0);
  vec4 i2 = clamp(i0 - 1.0, 0.0, 1.0);
  vec4 i1 = clamp(i0 - 2.0, 0.0, 1.0);

  vec4 x1 = x0 - i1 + C.xxxx;
  vec4 x2 = x0 - i2 + C.yyyy;
  vec4 x3 = x0 - i3 + C.zzzz;
  vec4 x4 = x0 + C.wwww;

  // Permutations
  i = mod289(i);
  float j0 = permute(permute(permute(permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute(permute(permute(permute(
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

  // Gradients: 7x7x6 points on a cube, mapped onto a 4-cross polytope
  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0);

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  // Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

  // Mix contributions from the five corners
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * (dot(m0*m0, vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)))
               + dot(m1*m1, vec2(dot(p3, x3), dot(p4, x4))));
}
`;

export const heroPortraitVertexShader = `
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

uniform float uTime;
uniform float uBass;
uniform float uLayerIndex; // 0: Yellow base, 1: Purple misregistration, 2: Black halftone foreground

void main() {
  vUv = uv;
  vNormal = normal;
  vec3 pos = position;

  // Separate Z-depth layer displacement based on audio bass
  if (uLayerIndex == 0.0) {
    pos.z -= 0.15 + uBass * 0.18;
  } else if (uLayerIndex == 1.0) {
    pos.z -= 0.05 + uBass * 0.08;
    // Chromatic offset
    pos.x += 0.02 + uBass * 0.03;
    pos.y -= 0.01 + uBass * 0.02;
  } else {
    pos.z += uBass * 0.12;
  }

  vPosition = pos;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

export const heroPortraitFragmentShader = `
uniform sampler2D uTexture;
uniform float uTime;
uniform float uBass;
uniform float uMids;
uniform float uHighs;
uniform float uLayerIndex; // 0 = Yellow Base, 1 = Risograph Purple, 2 = Ink Black Foreground
uniform vec2 uResolution;

varying vec2 vUv;
varying vec3 vPosition;

${simplexNoise4DGLSL}

// Screen angle rotation for authentic risograph / CMYK dot matrix
vec2 rotateUV(vec2 uv, float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);
}

void main() {
  vec2 uv = vUv;

  // Dynamic 4D simplex noise displacement for organic ink bleed
  vec4 noiseCoord = vec4(uv * 4.0, vPosition.z * 2.0, uTime * 0.35);
  float noiseVal = snoise(noiseCoord);

  // Plate-specific chromatic offset
  vec2 sampleUv = uv;
  if (uLayerIndex == 1.0) {
    // Purple offset with high-frequency flashes
    vec2 glitch = vec2(0.012 + uHighs * 0.025 * sin(uTime * 20.0), -0.008 - uHighs * 0.015);
    sampleUv += glitch + noiseVal * 0.006;
  } else if (uLayerIndex == 2.0) {
    sampleUv += noiseVal * 0.003;
  }

  vec4 texColor = texture2D(uTexture, sampleUv);

  // Luminance of image
  float lum = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));

  // Halftone Dot Matrix Calculation
  // 45 degree screen angle
  float screenAngle = 0.785398;
  vec2 rotUv = rotateUV(uv, screenAngle);

  // Grid frequency (halftone dot density) modulated by 4D noise and mids
  float gridFreq = 95.0 + uMids * 20.0;
  vec2 gridUv = fract(rotUv * gridFreq) - 0.5;
  float dotDist = length(gridUv);

  // Dot radius: darker areas have larger halftone dots
  float dotRadius = sqrt(clamp(1.0 - lum, 0.0, 1.0)) * 0.68;
  dotRadius += noiseVal * 0.08 * (1.0 + uBass * 0.5);

  // Antialiased dot edge
  float dotMask = 1.0 - smoothstep(dotRadius - 0.06, dotRadius + 0.06, dotDist);

  // Authentic Colors:
  // Acid Yellow: #EEFF00 = rgb(0.933, 1.0, 0.0)
  // Risograph Purple: #7B2CBF = rgb(0.482, 0.173, 0.749)
  // Toner Ink Black: #090909 = rgb(0.035, 0.035, 0.035)
  // Paper White Cutout: #F7F7F2 = rgb(0.969, 0.969, 0.949)

  vec3 colorAcidYellow = vec3(0.933, 1.0, 0.0);
  vec3 colorRisoPurple = vec3(0.482, 0.173, 0.749);
  vec3 colorInkBlack   = vec3(0.035, 0.035, 0.035);

  // Handle Layer separation
  if (uLayerIndex == 0.0) {
    // LAYER 0: Acid Yellow Flood with subtle photocopy toner noise
    float tonerNoise = snoise(vec4(uv * 20.0, 0.0, uTime * 0.1)) * 0.04;
    vec3 col = colorAcidYellow + tonerNoise;
    gl_FragColor = vec4(col, 1.0);
  }
  else if (uLayerIndex == 1.0) {
    // LAYER 1: Risograph Purple Misregistration Plate
    // Renders where shadow/midtones exist, masked with dots
    float purpleIntensity = smoothstep(0.7, 0.2, lum) * dotMask;
    purpleIntensity *= (0.75 + uHighs * 0.6); // flashes on highs
    if (purpleIntensity < 0.05) discard;
    gl_FragColor = vec4(colorRisoPurple, purpleIntensity * 0.85);
  }
  else {
    // LAYER 2: Ink Black Halftone Foreground Plate
    // Cutout transparency: if the source has high lightness (yellow background), make it transparent
    // so the yellow base and purple misregistration layers show through!
    float isSubject = smoothstep(0.92, 0.82, lum);
    if (isSubject < 0.08) discard;

    float ink = dotMask * isSubject;
    if (ink < 0.1) discard;

    gl_FragColor = vec4(colorInkBlack, ink);
  }
}
`;
