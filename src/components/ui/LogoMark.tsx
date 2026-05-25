interface LogoMarkProps {
  size?: "sm" | "md";
}

export function LogoMark({ size = "md" }: LogoMarkProps) {
  return (
    <div
      className={`grid place-items-center rounded-lg border border-ember-400/30 bg-ember-500/10 font-mono font-black tracking-tight text-ember-200 shadow-glow ${
        size === "sm" ? "h-9 w-11 text-xs" : "h-12 w-14 text-sm"
      }`}
    >
      BSSP
    </div>
  );
}
