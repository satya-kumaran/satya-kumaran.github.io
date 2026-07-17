import { useRef, useState } from 'react';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

type GameState = 'idle' | 'armed' | 'waiting' | 'live' | 'result';

const LIGHT_COUNT = 5;
const LIGHT_INTERVAL_MS = 600;

export function F1Game() {
  const [lit, setLit] = useState(0);
  const [reaction, setReaction] = useState<number | null>(null);
  const [best, setBest] = useState<number | null>(null);
  const [status, setStatus] = useState('Click the lights to start.');

  const stateRef = useRef<GameState>('idle');
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const outAtRef = useRef(0);

  function clearTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  function startSequence() {
    clearTimers();
    setLit(0);
    setReaction(null);
    stateRef.current = 'armed';
    setStatus('Get ready...');

    for (let i = 0; i < LIGHT_COUNT; i++) {
      timers.current.push(
        setTimeout(() => {
          setLit(i + 1);
          if (i === LIGHT_COUNT - 1) stateRef.current = 'waiting';
        }, LIGHT_INTERVAL_MS * (i + 1)),
      );
    }

    const goDelay = LIGHT_INTERVAL_MS * LIGHT_COUNT + 400 + Math.random() * 2200;
    timers.current.push(
      setTimeout(() => {
        setLit(0);
        stateRef.current = 'live';
        outAtRef.current = performance.now();
        setStatus('GO!');
      }, goDelay),
    );
  }

  function handleClick() {
    const state = stateRef.current;

    if (state === 'idle' || state === 'result') {
      startSequence();
      return;
    }

    if (state === 'armed' || state === 'waiting') {
      clearTimers();
      setLit(0);
      stateRef.current = 'result';
      setStatus('Jump start — wait for lights out next time. Click to try again.');
      return;
    }

    if (state === 'live') {
      const ms = Math.round(performance.now() - outAtRef.current);
      stateRef.current = 'result';
      setReaction(ms);
      setBest((b) => (b === null || ms < b ? ms : b));
      setStatus(`${ms} ms — click to go again.`);
    }
  }

  return (
    <section id="rally" className="snap-start scroll-mt-20 px-5 sm:px-10 py-[clamp(70px,11vw,150px)] max-w-[1080px] mx-auto">
      <Reveal>
        <Eyebrow>Lights out and away we go</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <p className="font-serif text-[clamp(1.05rem,2vw,1.3rem)] max-w-[60ch] mb-8">
          Real F1 starts come down to reflexes. Five lights, then they go out — click the instant they do.
          Jump the start and you're penalized, same as on the grid.
        </p>
      </Reveal>
      <Reveal delay={160}>
        <div className="border border-line rounded-2xl p-[clamp(1.4rem,3.5vw,2.2rem)] bg-card">
          <div className="flex flex-wrap gap-8 items-center justify-between mb-5">
            <div className="font-mono text-[0.95rem] text-muted">
              REACTION{' '}
              <b className="text-accent text-[1.3rem]">{reaction === null ? '—' : reaction}</b> ms
            </div>
            <div className="font-mono text-[0.95rem] text-muted">
              BEST <b className="text-accent text-[1.3rem]">{best === null ? '—' : best}</b> ms
            </div>
          </div>
          <button
            onClick={handleClick}
            className="inline-flex gap-2.5 px-6 py-4.5 rounded-xl bg-[#0c0b0a] border border-line cursor-pointer touch-manipulation select-none"
            aria-label="Start or react to the lights"
          >
            {Array.from({ length: LIGHT_COUNT }).map((_, i) => (
              <span
                key={i}
                className="rounded-full transition-[background,box-shadow] duration-150"
                style={{
                  width: 'clamp(28px, 6vw, 38px)',
                  height: 'clamp(28px, 6vw, 38px)',
                  background: i < lit ? '#ff2b2b' : '#3a1414',
                  boxShadow:
                    i < lit
                      ? 'inset 0 0 0 2px #1a0a0a, 0 0 20px 4px rgba(255,43,43,0.7)'
                      : 'inset 0 0 0 2px #1a0a0a',
                }}
              />
            ))}
          </button>
          <p className="font-mono text-[0.78rem] text-faint mt-4">{status}</p>
        </div>
      </Reveal>
    </section>
  );
}
