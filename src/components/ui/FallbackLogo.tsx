interface FallbackLogoProps {
  label: string;
}

export function FallbackLogo({ label }: FallbackLogoProps) {
  return (
    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05] font-mono text-sm font-bold text-ember-200">
      {label.slice(0, 2).toUpperCase()}
    </div>
  );
}
