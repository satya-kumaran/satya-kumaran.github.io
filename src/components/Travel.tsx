import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

const COUNTRIES = [
  'USA',
  'Canada',
  'Mexico',
  'Panama',
  'Colombia',
  'India',
  'China',
  'Hong Kong',
  'Thailand',
  'Cambodia',
  'Singapore',
  'Malaysia',
  'Indonesia',
  'Philippines',
  'Japan',
];

export function Travel() {
  return (
    <section id="travel" className="snap-start scroll-mt-20 px-5 sm:px-10 py-[clamp(70px,11vw,150px)] max-w-[1080px] mx-auto">
      <Reveal>
        <Eyebrow>Where I've been</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <p className="font-serif text-[clamp(1.05rem,2vw,1.3rem)] max-w-[60ch] mb-8">
          Fifteen countries and counting — here's where the passport's been stamped.
        </p>
      </Reveal>
      <Reveal delay={160}>
        <div>
          <div className="font-serif text-[clamp(2.2rem,5vw,3.2rem)] font-medium leading-none mb-5">
            {COUNTRIES.length} <i className="italic text-accent">countries</i>, and counting
          </div>
          <div className="flex flex-wrap gap-2">
            {COUNTRIES.map((c) => (
              <span
                key={c}
                className="font-mono text-xs text-muted bg-canvas-soft border border-line px-2.5 py-1.5 rounded-md"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
