import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#into', label: "What I'm into" },
  { href: '#travel', label: 'Travel' },
  { href: '#rally', label: 'Lights out' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-[18px] sm:px-10 backdrop-blur-md bg-canvas/72 border-b transition-colors duration-400 ${
        scrolled ? 'border-line' : 'border-transparent'
      }`}
    >
      <a href="#top" className="font-mono text-sm tracking-wide font-medium flex items-center gap-2">
        <span className="text-accent">◆</span> Sathyaseelan Kumaran
      </a>
      <div className="flex items-center gap-4 sm:gap-7">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hidden sm:inline text-[0.86rem] text-muted hover:text-ink transition-colors relative"
          >
            {l.label}
          </a>
        ))}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="w-[34px] h-[34px] rounded-full border border-line text-muted grid place-items-center text-sm hover:text-ink hover:border-accent transition-colors"
        >
          {dark ? '☾' : '☀'}
        </button>
      </div>
    </nav>
  );
}
