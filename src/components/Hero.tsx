import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section className="snap-start relative min-h-[100svh] flex flex-col justify-center pt-[120px] pb-20 px-5 sm:px-10 max-w-[1080px] mx-auto">
      <Reveal>
        <p className="font-mono text-[0.82rem] text-faint mb-6 tracking-wide">
          seattle · married · engineer · traveler · Ferrari diehard
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="font-serif font-medium text-[clamp(2.6rem,7.5vw,5.2rem)] leading-[1.05] tracking-tight mb-6">
          Hi, I'm Sathya. I build things and then{' '}
          <span className="italic text-accent">
            go looking for a flight deal.
          </span>
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="text-[clamp(1.05rem,2vw,1.32rem)] text-muted max-w-[54ch] mb-2">
          Some days that means designing a distributed system. Other days it means arguing about F1
          strategy, defending a questionable Ferrari pit call, or getting talked into one more temple.
        </p>
      </Reveal>
      <Reveal delay={240}>
        <p className="text-[clamp(0.98rem,1.4vw,1.08rem)] text-muted max-w-[58ch] mb-10">
          By day: <b className="text-ink font-semibold">distributed systems &amp; cloud data platforms</b>{' '}
          at Microsoft Fabric OneLake. By the rest of the day: recovering from the last trip and planning
          the next one.
        </p>
      </Reveal>
      <Reveal delay={320}>
        <div className="flex flex-wrap gap-3.5 items-center">
          <a
            href="#into"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-ink text-canvas border border-ink transition-transform hover:-translate-y-0.5"
          >
            What I'm into <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
          <a
            href="https://github.com/satya-kumaran"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-line hover:border-accent hover:text-accent transition-all hover:-translate-y-0.5"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sathyaseelan-kumaran/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-line hover:border-accent hover:text-accent transition-all hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>
      <div className="absolute bottom-[34px] left-1/2 -translate-x-1/2 font-mono text-[0.7rem] text-faint tracking-[0.12em] flex flex-col items-center gap-2">
        <span className="w-px h-[34px] bg-gradient-to-b from-faint to-transparent animate-[drop_1.8s_ease-in-out_infinite]" />
        SCROLL
      </div>
    </section>
  );
}
