export interface HeroStage {
  id: string;
  frameStart: number;
  frameEnd: number;
  eyebrow: string;
  title: string;
  subtitle: string;
  technicalCode: string;
  metrics: { label: string; value: string }[];
}

export const HERO_STAGES: HeroStage[] = [
  {
    id: "stage-1",
    frameStart: 1,
    frameEnd: 24,
    eyebrow: "PRECISION ENGINEERED",
    title: "BUILT FOR THE MOMENT.",
    subtitle: "A new generation of cinematic imaging crafted for visionary filmmakers.",
    technicalCode: "SYS.INIT // CORE_ONLINE",
    metrics: [
      { label: "SENSOR TYPE", value: "8K FULL-FRAME" },
      { label: "CHASSIS", value: "CARBON-MAGNESIUM" },
    ],
  },
  {
    id: "stage-2",
    frameStart: 25,
    frameEnd: 54,
    eyebrow: "MODULAR ARCHITECTURE",
    title: "EVERY DETAIL MATTERS.",
    subtitle: "Engineered from the molecular level up. Uncompromising precision in every mechanical interface.",
    technicalCode: "EXPLODED_VIEW // TOLERANCE: ±0.002mm",
    metrics: [
      { label: "COMPONENTS", value: "1,420 PARTS" },
      { label: "MOUNT INTERFACE", value: "POSITIVE LOCK PL" },
    ],
  },
  {
    id: "stage-3",
    frameStart: 55,
    frameEnd: 84,
    eyebrow: "OPTICAL REFLECTION & THERMALS",
    title: "OPTICS. REFINED.",
    subtitle: "Dual-fan active thermal chamber enables continuous unthrottled 8K 120FPS RAW capture.",
    technicalCode: "THERMAL_DISSIPATION // 48W CONTINUOUS",
    metrics: [
      { label: "COOLING NOISE", value: "< 14 dBA SILENT" },
      { label: "DYNAMIC RANGE", value: "16.5+ STOPS" },
    ],
  },
  {
    id: "stage-4",
    frameStart: 85,
    frameEnd: 109,
    eyebrow: "COLOR SCIENCE & SPEED",
    title: "BUILT FOR CINEMA.",
    subtitle: "16-bit linear color pipeline with zero-latency hardware ProRes & CinemaRAW encoding.",
    technicalCode: "CODEC_PIPELINE // 16-BIT UNCOMPRESSED",
    metrics: [
      { label: "DUAL NATIVE ISO", value: "800 / 3200" },
      { label: "DATA RATE", value: "3.2 Gbps RAW" },
    ],
  },
  {
    id: "stage-5",
    frameStart: 110,
    frameEnd: 120,
    eyebrow: "THE BENCHMARK",
    title: "THE NEXT FRAME.",
    subtitle: "A masterpiece in motion. Ready for extreme environments and the grandest productions.",
    technicalCode: "SYSTEM // LOCKED & ARMED",
    metrics: [
      { label: "RESOLUTION", value: "8192 × 4320" },
      { label: "STATUS", value: "PRODUCTION READY" },
    ],
  },
];

export interface Hotspot {
  id: string;
  name: string;
  description: string;
  category: string;
  x: number;
  y: number;
  visibleFrameStart: number;
  visibleFrameEnd: number;
}

export const HOTSPOTS: Hotspot[] = [
  {
    id: "sensor",
    name: "8K Full-Frame CMOS Sensor",
    description: "Custom backlit silicon featuring 16.5+ stops of dynamic range and ultra-fast global shutter-like readout.",
    category: "IMAGING CORE",
    x: 53,
    y: 54,
    visibleFrameStart: 45,
    visibleFrameEnd: 78,
  },
  {
    id: "cooling",
    name: "Aero-Flow Thermal Heatsink",
    description: "Ultra-quiet magnetic levitation intake with liquid-vapor heatpipe chamber for continuous 48W heat dispersal.",
    category: "THERMAL",
    x: 30,
    y: 72,
    visibleFrameStart: 50,
    visibleFrameEnd: 75,
  },
  {
    id: "motherboard",
    name: "Neural Processing Engine",
    description: "Dual FPGA image pipeline providing real-time debayering, anamorphic de-squeeze, and ACES color grading.",
    category: "PROCESSING",
    x: 69,
    y: 52,
    visibleFrameStart: 48,
    visibleFrameEnd: 76,
  },
  {
    id: "optics-mount",
    name: "Titanium Positive-Lock PL Mount",
    description: "Sub-micron optical alignment with Cook/i and LDS-2 lens metadata passthrough pins.",
    category: "OPTOMECHANICAL",
    x: 15,
    y: 52,
    visibleFrameStart: 46,
    visibleFrameEnd: 74,
  },
  {
    id: "viewfinder",
    name: "OLED High-Nit Viewfinder Housing",
    description: "0.7-inch 4K Micro-OLED viewfinder with 120Hz refresh rate and 100% DCI-P3 gamut accuracy.",
    category: "MONITORING",
    x: 73,
    y: 22,
    visibleFrameStart: 48,
    visibleFrameEnd: 75,
  },
];

export interface SpecCategory {
  category: string;
  specs: { name: string; value: string }[];
}

export const SPECS_DATA: SpecCategory[] = [
  {
    category: "Sensor & Imaging",
    specs: [
      { name: "Sensor Type", value: "35.4MP Full-Frame Cinema CMOS (36.0 × 24.0 mm)" },
      { name: "Active Pixels", value: "8192 × 4320 (8K DCI)" },
      { name: "Dynamic Range", value: "16.5+ stops at ISO 800 / 3200" },
      { name: "Dual Base ISO", value: "Base 800 (Clean) / Base 3200 (Low Light)" },
      { name: "Color Filter Array", value: "Custom Wide Gamut RGB with Optical Low-Pass Filter" },
      { name: "Shutter Type", value: "Electronic Global-Sync Shutter (1/1 to 1/8000s)" },
    ],
  },
  {
    category: "Recording & Formats",
    specs: [
      { name: "Internal RAW", value: "16-bit CinemaRAW Uncompressed & Compressed (3:1, 5:1, 8:1)" },
      { name: "Industry Codecs", value: "Apple ProRes 4444 XQ, ProRes 422 HQ, Avid DNxHR" },
      { name: "Max Frame Rates", value: "8K DCI up to 120 fps / 4K DCI up to 240 fps / 2K up to 480 fps" },
      { name: "Media Slots", value: "Dual CFexpress Type B (PCIe 4.0 up to 4000 MB/s)" },
      { name: "Color Spaces", value: "ACES 1.3, Kronos-Gamut / K-Log3, Rec.2020, Rec.709" },
    ],
  },
  {
    category: "Optics & Mechanical",
    specs: [
      { name: "Lens Mount", value: "Interchangeable Titanium PL Mount (EF, L-Mount, E-Mount swappable)" },
      { name: "Lens Data", value: "Cooke /i Technology, Zeiss eXtended Data, ARRI LDS-2" },
      { name: "Internal ND", value: "Motorized Optical Clear + 2 to 7 stops Electronic Variable ND" },
      { name: "Chassis Material", value: "Magnesium-Aluminum Monocoque with Carbon-Fiber Inlays" },
      { name: "Thermal System", value: "Sealed Cold-Cavity Liquid-Vapor Chamber with Silent MagLev Fan" },
      { name: "Weight & Dims", value: "1.92 kg (4.23 lbs) body only | 148 × 152 × 180 mm" },
    ],
  },
  {
    category: "Connectivity & Audio",
    specs: [
      { name: "Video Output", value: "2× 12G-SDI (4K 60p 10-bit), 1× Full-Size HDMI 2.1" },
      { name: "Audio Inputs", value: "2× XLR 3-pin with +48V Phantom Power, 32-bit float internal ADC" },
      { name: "Timecode & Genlock", value: "BNC Timecode In/Out, BNC Genlock / Tri-Level Sync" },
      { name: "Remote & Control", value: "Gigabit Ethernet RJ45, USB-C 3.2 Gen 2, Wi-Fi 6E, Bluetooth 5.3" },
      { name: "Power System", value: "Standard V-Mount / Gold-Mount plate + 4-pin XLR 12-28V DC input" },
    ],
  },
];

export interface FeatureCard {
  id: string;
  tag: string;
  title: string;
  tagline: string;
  description: string;
  stats: { label: string; value: string }[];
}

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "optics",
    tag: "01 // OPTICAL PURITY",
    title: "OPTICS",
    tagline: "Sub-micron optical alignment with zero aberration.",
    description: "Crafted with hand-polished fluorite elements and multi-layer nano-coatings, delivering unprecedented micro-contrast, organic skin tones, and controlled anamorphic streak flares.",
    stats: [
      { label: "TRANSMISSION", value: "T1.4 MAXIMUM" },
      { label: "FLARE CONTROL", value: "NANO AR COATING" },
    ],
  },
  {
    id: "control",
    tag: "02 // TACTILE ERGONOMICS",
    title: "CONTROL",
    tagline: "Intuitive cinema ergonomics with physical precision dials.",
    description: "Every knurled knob and tactile switch is weighted for muscle memory operation in pitch-black studio or harsh field conditions. Direct access to shutter angle, ISO, and false color overlays.",
    stats: [
      { label: "RESPONSE TIME", value: "< 2ms LATENCY" },
      { label: "PRESETS", value: "12 USER BANKS" },
    ],
  },
  {
    id: "performance",
    tag: "03 // HARSH PRODUCTION",
    title: "PERFORMANCE",
    tagline: "Continuous 8K RAW recording without thermal throttling.",
    description: "A dual-zone sealed magnesium chassis isolates all sensitive electronics from moisture, dust, and sand while directing high-output thermal dissipation through an isolated exhaust channel.",
    stats: [
      { label: "WEATHER SEAL", value: "IP54 RATED" },
      { label: "OPERATING TEMP", value: "-20°C TO +50°C" },
    ],
  },
];

export interface SubsystemDetail {
  id: string;
  title: string;
  badge: string;
  primaryStat: string;
  secondaryStat: string;
  description: string;
  bullets: string[];
}

export const SUBSYSTEMS: Record<string, SubsystemDetail> = {
  sensor: {
    id: "sensor",
    title: "FULL FRAME SENSOR",
    badge: "IMAGING CORE",
    primaryStat: "16.5+ STOPS",
    secondaryStat: "8K DCI @ 120FPS",
    description: "A bespoke 35.4MP CMOS architecture featuring dual-gain output circuitry and ultra-fine pixel pitch. Delivers breathtaking latitude in deep shadows and organic specular highlight roll-off.",
    bullets: [
      "Dual Native ISO at 800 & 3200 for clean shadow response",
      "Sub-millisecond electronic global sync readout",
      "Custom multi-spectral optical low-pass filter (OLPF)",
    ],
  },
  optics: {
    id: "optics",
    title: "PRECISION OPTICS",
    badge: "OPTOMECHANICAL",
    primaryStat: "±0.002mm",
    secondaryStat: "TITANIUM PL LOCK",
    description: "Engineered to withstand rigorous cine zooms and high-torque wireless focus motors with zero flange-depth deflection. Includes native electronic passthrough for lens metadata.",
    bullets: [
      "Interchangeable titanium positive-lock mount design",
      "Cooke /i, Zeiss eXtended Data & ARRI LDS-2 protocols",
      "Integrated electronic variable ND filter (2 to 7 stops)",
    ],
  },
  control: {
    id: "control",
    title: "CINEMATIC CONTROL",
    badge: "OPERATIONAL UI",
    primaryStat: "< 2ms LATENCY",
    secondaryStat: "12 USER PRESETS",
    description: "Tactile knurled aluminum controls designed for blind muscle memory on fast-paced sets. Ultra-responsive touch UI combined with physical hotkeys for critical parameters.",
    bullets: [
      "Direct mechanical switches for shutter angle and ISO",
      "Full false color, waveform, and anamorphic de-squeeze",
      "Dual 12G-SDI & Genlock for multi-cam studio sync",
    ],
  },
};
