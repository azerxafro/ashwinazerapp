import { AudioMetrics } from '../types';

class AudioEngine {
  private ctx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private masterGain: GainNode | null = null;
  private dataArray: Uint8Array<ArrayBuffer> | null = null;
  private isInitialized = false;
  private isSoundOn = false;
  private currentTrackId: string | null = null;

  // Synthesis nodes
  private timerId: number | null = null;
  private currentStep = 0;
  private tempo = 132;
  private currentKey = 'F#';

  // Procedural fallback simulator values (used when sound is muted or context suspended)
  private fallbackTime = 0;
  private simulatedMetrics: AudioMetrics = {
    bass: 0.3,
    mids: 0.2,
    highs: 0.15,
    energy: 0.25,
    isPlaying: false,
    isMuted: true
  };

  private listeners: Set<(metrics: AudioMetrics) => void> = new Set();

  public subscribe(cb: (metrics: AudioMetrics) => void) {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  private notify(metrics: AudioMetrics) {
    this.listeners.forEach((cb) => cb(metrics));
  }

  public async init(): Promise<void> {
    if (this.isInitialized && this.ctx) {
      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }
      return;
    }

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 256;
      this.analyser.smoothingTimeConstant = 0.85;

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.5, this.ctx.currentTime);

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);

      this.dataArray = new Uint8Array(new ArrayBuffer(this.analyser.frequencyBinCount));
      this.isInitialized = true;
    } catch (err) {
      console.warn('Web Audio initialization error, using fallback procedural oscillator:', err);
    }
  }

  public async toggleSound(): Promise<boolean> {
    if (!this.isInitialized || !this.ctx) {
      await this.init();
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    this.isSoundOn = !this.isSoundOn;

    if (this.isSoundOn) {
      this.startSynthesizer();
    } else {
      this.stopSynthesizer();
    }

    return this.isSoundOn;
  }

  public async setTrack(trackId: string, bpm = 132, key = 'F#'): Promise<void> {
    this.currentTrackId = trackId;
    this.tempo = bpm;
    this.currentKey = key;

    if (!this.isSoundOn) {
      await this.toggleSound();
    } else {
      // Restart sequencer with updated BPM/key
      this.restartSequencer();
    }
  }

  public stopTrack(): void {
    if (this.isSoundOn) {
      this.toggleSound();
    }
    this.currentTrackId = null;
  }

  private restartSequencer() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
    if (this.isSoundOn) {
      this.startSynthesizer();
    }
  }

  private startSynthesizer() {
    if (!this.ctx || !this.masterGain) return;
    if (this.timerId !== null) return;

    const stepInterval = (60 / this.tempo / 4) * 1000; // 16th notes
    this.currentStep = 0;

    this.timerId = window.setInterval(() => {
      this.step();
    }, stepInterval);
  }

  private stopSynthesizer() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private step() {
    if (!this.ctx || !this.masterGain || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    const stepInBar = this.currentStep % 16;

    // 808 Kick: Heavy on beat 0 and beat 10, ghost kick on 14
    if (stepInBar === 0 || stepInBar === 10 || stepInBar === 14) {
      this.trigger808(now, stepInBar === 0 ? 1.0 : 0.7);
    }

    // Snare / Riso Clap: sharp crack on beat 4 and beat 12
    if (stepInBar === 4 || stepInBar === 12) {
      this.triggerSnare(now);
    }

    // Hi-hats: 16th notes with velocity dynamics and roll on step 11 & 15
    if (stepInBar % 2 === 0 || stepInBar === 11 || stepInBar === 15) {
      const isAccent = stepInBar === 2 || stepInBar === 6 || stepInBar === 10;
      this.triggerHiHat(now, isAccent ? 0.35 : 0.18);
    }

    // Sub synth bassline / arpeggio note
    if (stepInBar % 4 === 0) {
      this.triggerBassNote(now, this.currentKey);
    }

    this.currentStep++;
  }

  private trigger808(time: number, velocity: number) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    // Frequency drop for punchy 808
    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(45, time + 0.12);
    osc.frequency.exponentialRampToValueAtTime(32, time + 0.35);

    gain.gain.setValueAtTime(velocity * 0.9, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.45);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.45);
  }

  private triggerSnare(time: number) {
    if (!this.ctx || !this.masterGain) return;

    // Noise burst
    const bufferSize = this.ctx.sampleRate * 0.15;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1200, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.6, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + 0.15);

    // Tonal body
    const bodyOsc = this.ctx.createOscillator();
    const bodyGain = this.ctx.createGain();
    bodyOsc.type = 'triangle';
    bodyOsc.frequency.setValueAtTime(190, time);
    bodyOsc.frequency.exponentialRampToValueAtTime(80, time + 0.08);

    bodyGain.gain.setValueAtTime(0.4, time);
    bodyGain.gain.exponentialRampToValueAtTime(0.01, time + 0.08);

    bodyOsc.connect(bodyGain);
    bodyGain.connect(this.masterGain);

    bodyOsc.start(time);
    bodyOsc.stop(time + 0.08);
  }

  private triggerHiHat(time: number, velocity: number) {
    if (!this.ctx || !this.masterGain) return;

    const bufferSize = this.ctx.sampleRate * 0.04;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(7000, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(velocity, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + 0.04);
  }

  private triggerBassNote(time: number, keyName: string) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';

    // Key frequency lookup
    let baseFreq = 46.25; // F#1
    if (keyName.includes('C#')) baseFreq = 34.65;
    else if (keyName.includes('A')) baseFreq = 55.0;
    else if (keyName.includes('D')) baseFreq = 36.71;

    osc.frequency.setValueAtTime(baseFreq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(350, time);
    filter.frequency.exponentialRampToValueAtTime(140, time + 0.4);

    gain.gain.setValueAtTime(0.35, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.45);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.45);
  }

  public getAudioMetrics(): AudioMetrics {
    this.fallbackTime += 0.035;

    if (this.isSoundOn && this.analyser && this.dataArray) {
      this.analyser.getByteFrequencyData(this.dataArray);

      // Lows (0-8 bins: ~0 - 150Hz)
      let bassSum = 0;
      for (let i = 0; i < 8; i++) {
        bassSum += this.dataArray[i];
      }
      const bass = bassSum / (8 * 255);

      // Mids (8-40 bins: ~150Hz - 2500Hz)
      let midSum = 0;
      for (let i = 8; i < 40; i++) {
        midSum += this.dataArray[i];
      }
      const mids = midSum / (32 * 255);

      // Highs (40-100 bins: ~2500Hz - 10000Hz)
      let highSum = 0;
      for (let i = 40; i < 100; i++) {
        highSum += this.dataArray[i];
      }
      const highs = highSum / (60 * 255);

      const energy = (bass * 0.5 + mids * 0.3 + highs * 0.2);

      const metrics: AudioMetrics = {
        bass: Math.min(1.0, bass * 1.5),
        mids: Math.min(1.0, mids * 1.8),
        highs: Math.min(1.0, highs * 2.0),
        energy: Math.min(1.0, energy * 1.6),
        isPlaying: true,
        isMuted: false,
        currentTrackId: this.currentTrackId || undefined
      };

      this.notify(metrics);
      return metrics;
    }

    // Procedural fallback rhythm when muted so 4D elements always breathe with organic pulse!
    const beat = (Math.sin(this.fallbackTime * 4.5) + 1) * 0.5;
    const subPulse = Math.pow(beat, 3);
    const midPulse = (Math.sin(this.fallbackTime * 2.8) + 1) * 0.5 * 0.4;
    const highPulse = (Math.cos(this.fallbackTime * 6.2) + 1) * 0.5 * 0.25;

    this.simulatedMetrics = {
      bass: 0.15 + subPulse * 0.45,
      mids: 0.1 + midPulse,
      highs: 0.08 + highPulse,
      energy: 0.15 + subPulse * 0.35,
      isPlaying: false,
      isMuted: true,
      currentTrackId: this.currentTrackId || undefined
    };

    this.notify(this.simulatedMetrics);
    return this.simulatedMetrics;
  }

  public getSoundState() {
    return {
      isSoundOn: this.isSoundOn,
      currentTrackId: this.currentTrackId,
      bpm: this.tempo
    };
  }
}

export const audioEngine = new AudioEngine();
