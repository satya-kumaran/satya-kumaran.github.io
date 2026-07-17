export function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs tracking-[0.18em] uppercase text-accent mb-6 flex items-center gap-3 before:content-[''] before:w-[26px] before:h-px before:bg-accent">
      {children}
    </p>
  );
}
