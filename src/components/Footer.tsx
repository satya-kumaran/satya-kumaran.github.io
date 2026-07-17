export function Footer() {
  return (
    <footer className="snap-end border-t border-line px-5 sm:px-10 py-[clamp(50px,8vw,90px)] text-center">
      <h2 className="font-serif font-medium text-[clamp(1.8rem,5vw,3rem)] tracking-tight mb-6">
        Building useful systems.
        <br />
        Chasing the next stamp in the passport.
        <br />
        Still cheering for Ferrari.
      </h2>
      <div className="flex gap-6 justify-center flex-wrap mb-9">
        <a
          href="https://github.com/satya-kumaran"
          target="_blank"
          rel="noopener"
          className="font-mono text-sm text-muted hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sathyaseelan-kumaran/"
          target="_blank"
          rel="noopener"
          className="font-mono text-sm text-muted hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <a href="#top" className="font-mono text-sm text-muted hover:text-accent transition-colors">
          Back to top ↑
        </a>
      </div>
      <p className="font-mono text-[0.74rem] text-faint">
        © {new Date().getFullYear()} Sathyaseelan Kumaran · Built with React, Vite &amp; Tailwind.
      </p>
    </footer>
  );
}
