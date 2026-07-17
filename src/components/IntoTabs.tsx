import { useState } from 'react';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

type TabKey = 'travel' | 'ferrari' | 'family' | 'eng';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'travel', label: 'Travel' },
  { key: 'ferrari', label: 'Ferrari & F1' },
  { key: 'family', label: 'Family & home' },
  { key: 'eng', label: 'Engineering' },
];

const CONTENT: Record<TabKey, { heading: string; body: React.ReactNode }> = {
  travel: {
    heading: 'Travel',
    body: (
      <>
        <p>
          Rajasthan, Goa, Cambodia, the Philippines, Hong Kong — if there's a flight deal and a free
          weekend, I'm probably already gone. I plan itineraries I never follow and pack badly every
          single time.
        </p>
        <p className="mt-3.5">
          The <b className="text-ink font-semibold">Where I've been</b> section below has the full list.
        </p>
      </>
    ),
  },
  ferrari: {
    heading: 'Ferrari & F1',
    body: (
      <>
        <p>
          Race Sundays are non-negotiable. I've stood close enough to an{' '}
          <b className="text-ink font-semibold">F430</b> to fog the paint with my breathing, and I will
          talk your ear off about strategy calls nobody asked me about.
        </p>
        <p className="mt-3.5">
          Team loyalty runs deep and is not up for debate. Think you've got a driver's reflexes? Try the{' '}
          <b className="text-ink font-semibold">lights out</b> reaction game further down.
        </p>
      </>
    ),
  },
  family: {
    heading: 'Family & home',
    body: (
      <>
        <p>
          Married, based in Seattle, and part of a big, loud extended family that fills more group chats
          than I can realistically keep up with.
        </p>
        <p className="mt-3.5">
          Most weekends are some mix of a family call, a race on the calendar, and a half-finished travel
          itinerary.
        </p>
      </>
    ),
  },
  eng: {
    heading: 'Engineering',
    body: (
      <>
        <p>
          I design distributed systems and cloud data platforms at Microsoft —{' '}
          <b className="text-ink font-semibold">Fabric OneLake</b>, Azure, developer experience. I still
          enjoy being close to the code after all these years.
        </p>
        <p className="mt-3.5">
          Currently building <b className="text-ink font-semibold">glossmd</b>: Word-style review comments
          for Markdown that lives in git — portable, append-only, no database.
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {['C#', '.NET', 'Azure', 'React', 'Node'].map((c) => (
            <span
              key={c}
              className="font-mono text-xs text-muted bg-canvas-soft border border-line px-2.5 py-1.5 rounded-md"
            >
              {c}
            </span>
          ))}
        </div>
        <a
          href="https://github.com/satya-kumaran/glossmd"
          target="_blank"
          rel="noopener"
          className="group font-mono text-sm text-accent inline-flex items-center gap-2 mt-5"
        >
          View glossmd on GitHub{' '}
          <span className="transition-transform group-hover:translate-x-1">↗</span>
        </a>
      </>
    ),
  },
};

export function IntoTabs() {
  const [active, setActive] = useState<TabKey>('travel');
  const c = CONTENT[active];

  return (
    <section id="into" className="snap-start scroll-mt-20 px-5 sm:px-10 py-[clamp(70px,11vw,150px)] max-w-[1080px] mx-auto">
      <Reveal>
        <Eyebrow>Pick a lane</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <div className="flex flex-wrap gap-2.5 mb-8">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-4.5 py-2.5 rounded-full border text-[0.88rem] transition-all ${
                active === t.key
                  ? 'bg-ink text-canvas border-ink'
                  : 'bg-canvas-soft text-muted border-line hover:text-ink hover:border-accent'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </Reveal>
      <Reveal delay={160}>
        <div className="border border-line rounded-2xl p-[clamp(1.6rem,4vw,2.6rem)] bg-card min-h-[220px]">
          <h3 className="font-serif text-[clamp(1.4rem,3vw,1.9rem)] font-medium mb-3.5">{c.heading}</h3>
          <div className="text-muted max-w-[62ch] text-[1.02rem]">{c.body}</div>
        </div>
      </Reveal>
    </section>
  );
}
