import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="snap-start scroll-mt-20 px-5 sm:px-10 py-[clamp(70px,11vw,150px)] max-w-[1080px] mx-auto">
      <Reveal>
        <Eyebrow>Who I am</Eyebrow>
      </Reveal>
      <Reveal>
        <p className="font-serif text-[clamp(1.1rem,2.2vw,1.5rem)] leading-snug max-w-[62ch]">
          I'm happiest when a system is{' '}
          <b className="font-semibold">boring in production and interesting to build</b> — and just as
          happy with a boarding pass in hand.
        </p>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-5 text-[clamp(1rem,1.7vw,1.15rem)] text-muted max-w-[62ch]">
          Married, based in Seattle, part of a big loud family that fills more group chats than I can keep
          up with. A fair chunk of my life outside work has gone to Rajasthan, Goa, Cambodia, the
          Philippines, and Hong Kong — usually with a camera and questionable luggage packing.
        </p>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-5 text-[clamp(1rem,1.7vw,1.15rem)] text-muted max-w-[62ch]">
          Pick a tab below — engineering is one lane out of several, not the whole road.
        </p>
      </Reveal>
    </section>
  );
}
