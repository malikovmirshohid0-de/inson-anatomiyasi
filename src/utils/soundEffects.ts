/**
 * Procedural Medical Sound Effects using Web Audio API
 * No external .mp3 dependencies (100% in-code procedural audio)
 */

class MedicalAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private heartbeatInterval: number | null = null;
  private isHeartbeatPlaying: boolean = false;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted && this.isHeartbeatPlaying) {
      this.stopHeartbeat();
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public toggleHeartbeat(bpm: number = 72): boolean {
    if (this.isHeartbeatPlaying) {
      this.stopHeartbeat();
      return false;
    } else {
      this.startHeartbeat(bpm);
      return true;
    }
  }

  public startHeartbeat(bpm: number = 72) {
    this.initContext();
    if (this.isMuted || !this.ctx) return;
    this.stopHeartbeat();
    this.isHeartbeatPlaying = true;

    const intervalMs = (60 / bpm) * 1000;
    this.playLubDub();
    this.heartbeatInterval = window.setInterval(() => {
      if (!this.isMuted) {
        this.playLubDub();
      }
    }, intervalMs);
  }

  public stopHeartbeat() {
    if (this.heartbeatInterval !== null) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
    this.isHeartbeatPlaying = false;
  }

  public isPlaying(): boolean {
    return this.isHeartbeatPlaying;
  }

  // Realistic Lub-Dub (S1 & S2 heart sounds)
  private playLubDub() {
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    // S1 "Lub" (Mitral & Tricuspid valve closure, lower frequency ~50-80 Hz, longer)
    this.synthesizePulse(now, 75, 45, 0.16, 0.45);

    // S2 "Dub" (Aortic & Pulmonary valve closure, higher pitch ~100-140 Hz, shorter, 0.28s after S1)
    this.synthesizePulse(now + 0.28, 120, 70, 0.12, 0.35);
  }

  private synthesizePulse(startTime: number, freqStart: number, freqEnd: number, duration: number, gainPeak: number) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Lowpass filter to muffle and create organic chest cavity resonance
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180, startTime);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freqStart, startTime);
    osc.frequency.exponentialRampToValueAtTime(Math.max(freqEnd, 20), startTime + duration);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.linearRampToValueAtTime(gainPeak, startTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }

  // Click / Selection Sound
  public playClickSound() {
    this.initContext();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.06);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.07);
  }
}

export const medicalAudio = new MedicalAudioEngine();
